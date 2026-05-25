import { useCallback, useEffect, useRef, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import type { AxiosError } from 'axios'
import YouTube from 'react-youtube'
import apiClient from '../lib/apiClient'
import { useAppStore } from '../store/appStore'
import type { Player } from '../types'

// ─── Local types ────────────────────────────────────────────────────────────

type TrackingStep = 'roster' | 'start_mode' | 'tracking'
type GameMode = 'OFFENSE' | 'DEFENSE'
type PositionFilter = 'ALL' | 'HANDLER' | 'CUTTER' | 'HYBRID'

type LocalPointEvent = {
  actionType: string
  playerId: string
  secondaryPlayerId?: string
  videoTimestampSeconds?: number
  scoreUsAtEvent?: number
  scoreThemAtEvent?: number
}

interface HistoryEntry {
  gameMode: GameMode
  activePasserId: string | null
  isPullPhase: boolean
  homeScore: number
  awayScore: number
}

interface ErrorResponse { status: 'error'; message: string }

// ─── Position sort weight ────────────────────────────────────────────────────

const POSITION_WEIGHT: Record<string, number> = { HANDLER: 0, HYBRID: 1, CUTTER: 2 }

function sortPlayers(list: Player[]): Player[] {
  return [...list].sort((a, b) => {
    const pw = (POSITION_WEIGHT[a.position] ?? 3) - (POSITION_WEIGHT[b.position] ?? 3)
    if (pw !== 0) return pw
    return a.jerseyNumber - b.jerseyNumber
  })
}

// ─── API helpers ─────────────────────────────────────────────────────────────

async function archivePointApi(
  matchId: string,
  lineup: string[],
  whoScored: 'US' | 'THEM',
  startMode: 'OFFENSE' | 'DEFENSE',
  events: LocalPointEvent[],
): Promise<void> {
  await apiClient.post(`/api/matches/${matchId}/points/archive`, {
    lineup,
    whoScored,
    startMode,
    events,
  })
}

async function finishMatchApi(matchId: string): Promise<void> {
  await apiClient.post(`/api/matches/${matchId}/finish`)
}

// ─── Sub-components ──────────────────────────────────────────────────────────

function JerseyBadge({ number }: { number: number }) {
  return (
    <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-green-500/10 border border-green-500/20 font-mono text-sm font-bold text-green-400 tabular-nums flex-shrink-0">
      {number}
    </span>
  )
}

function Spinner() {
  return (
    <div className="w-5 h-5 border-2 border-green-500 border-t-transparent rounded-full animate-spin" />
  )
}

function ActionLoadingOverlay({ message }: { message: string }) {
  return (
    <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center">
      <div className="bg-[#0f1117] border border-white/[0.08] rounded-2xl p-8 flex flex-col items-center gap-4 shadow-2xl">
        <div className="w-8 h-8 border-2 border-green-500 border-t-transparent rounded-full animate-spin" />
        <p className="text-slate-300 text-sm">{message}</p>
      </div>
    </div>
  )
}

// ─── Main component ──────────────────────────────────────────────────────────

export default function MatchTracking() {
  const { t } = useTranslation()
  const { id: matchId } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const selectedTeam = useAppStore((s) => s.selectedTeam)

  // ── Data state ──────────────────────────────────────────────────────────
  const [match, setMatch] = useState<any>(null)
  const [players, setPlayers] = useState<Player[]>([])
  const [loading, setLoading] = useState(true)
  const [loadError, setLoadError] = useState<string | null>(null)
  const [actionLoading, setActionLoading] = useState(false)

  // ── Tracking state ──────────────────────────────────────────────────────
  const [trackingStep, setTrackingStep] = useState<TrackingStep>('roster')
  const [gameMode, setGameMode] = useState<GameMode>('OFFENSE')
  const [selectedLineup, setSelectedLineup] = useState<Player[]>([])
  const [lastLineup, setLastLineup] = useState<Player[]>([])
  const [activePasserId, setActivePasserId] = useState<string | null>(null)
  const [isPullPhase, setIsPullPhase] = useState(false)
  const [pullingPlayerId, setPullingPlayerId] = useState<string | null>(null)
  const [pullTimerMs, setPullTimerMs] = useState(0)
  const [pullTimerRunning, setPullTimerRunning] = useState(false)
  const [homeScore, setHomeScore] = useState(0)
  const [awayScore, setAwayScore] = useState(0)
  const [historyStack, setHistoryStack] = useState<HistoryEntry[]>([])
  const [positionFilter, setPositionFilter] = useState<PositionFilter>('ALL')
  const [pointCount, setPointCount] = useState(0)
  const [liveEvents, setLiveEvents] = useState<string[]>([])
  const [archivedPoints, setArchivedPoints] = useState<Array<{ index: number; whoScored: 'US' | 'THEM'; homeScore: number; awayScore: number }>>([])
  const [localPointEvents, setLocalPointEvents] = useState<LocalPointEvent[]>([])

  // ── Modal state ─────────────────────────────────────────────────────────
  const [showFinishModal, setShowFinishModal] = useState(false)
  const [showBackWarning, setShowBackWarning] = useState(false)
  const [showInjuryModal, setShowInjuryModal] = useState(false)
  const [injuryStep, setInjuryStep] = useState<'out' | 'in'>('out')
  const [injuryOutPlayer, setInjuryOutPlayer] = useState<Player | null>(null)
  const [playerPickerFor, setPlayerPickerFor] = useState<'block' | 'callahan' | 'pickup' | null>(null)

  // ── YouTube state (video URL is set on Match Detail page) ────────────────
  const [youtubeVideoId, setYoutubeVideoId] = useState<string>('')
  const ytPlayerRef = useRef<any>(null)

  // Pull current timestamp from YouTube player (returns undefined if no video)
  const vts = useCallback((): number | undefined => {
    const player = ytPlayerRef.current
    if (!player || typeof player.getCurrentTime !== 'function') return undefined
    const t = player.getCurrentTime() as number
    return t > 0 ? Math.floor(t) : undefined
  }, [])

  // ── Pull timer ref ──────────────────────────────────────────────────────
  const pullTimerRef = useRef<ReturnType<typeof setInterval> | null>(null)

  // ── Initial data load ───────────────────────────────────────────────────
  useEffect(() => {
    if (!matchId || !selectedTeam?.id) return
    let cancelled = false

    const load = async () => {
      setLoading(true)
      setLoadError(null)
      try {
        const [matchRes, playersRes] = await Promise.all([
          apiClient.get<{ status: 'success'; data: any }>(`/api/matches/${matchId}`),
          apiClient.get<{ status: 'success'; data: Player[] }>(`/api/teams/${selectedTeam.id}/players`),
        ])
        if (cancelled) return
        const matchData = matchRes.data.data?.match ?? matchRes.data.data
        setMatch(matchData)
        setHomeScore(matchData?.homeScore ?? 0)
        setAwayScore(matchData?.awayScore ?? 0)
        setYoutubeVideoId(matchData?.youtubeVideoId ?? '')
        setPlayers(playersRes.data.data)
        if (matchData?.status === 'SCHEDULED') {
          await apiClient.post(`/api/matches/${matchId}/start`)
        }
      } catch (err) {
        const ax = err as AxiosError<ErrorResponse>
        if (!cancelled) setLoadError(ax.response?.data?.message ?? t('matches.errors.detailFailed'))
      } finally {
        if (!cancelled) setLoading(false)
      }
    }
    load()
    return () => { cancelled = true }
  }, [matchId, selectedTeam?.id, t])

  // ── Pull timer effect ────────────────────────────────────────────────────
  useEffect(() => {
    if (pullTimerRunning) {
      pullTimerRef.current = setInterval(() => {
        setPullTimerMs((prev) => prev + 10)
      }, 10)
    } else {
      if (pullTimerRef.current) clearInterval(pullTimerRef.current)
    }
    return () => { if (pullTimerRef.current) clearInterval(pullTimerRef.current) }
  }, [pullTimerRunning])

  // ── Helpers ──────────────────────────────────────────────────────────────

  const pushLiveEvent = useCallback((text: string) => {
    setLiveEvents((prev) => [text, ...prev].slice(0, 20))
  }, [])

  const pushHistory = useCallback(() => {
    setHistoryStack((prev) => [
      ...prev,
      { gameMode, activePasserId, isPullPhase, homeScore, awayScore },
    ])
  }, [gameMode, activePasserId, isPullPhase, homeScore, awayScore])

  const addLocalEvent = useCallback((event: LocalPointEvent) => {
    setLocalPointEvents(prev => [...prev, event])
  }, [])

  const filteredPlayers = sortPlayers(
    positionFilter === 'ALL' ? players : players.filter((p) => p.position === positionFilter),
  )

  const opponentName =
    match?.awayTeam?.name ?? match?.opponentName ?? t('matches.detail.vs')

  // ── Roster phase handlers ─────────────────────────────────────────────────

  const togglePlayer = useCallback((player: Player) => {
    setSelectedLineup((prev) => {
      const isSelected = prev.some((p) => p.id === player.id)
      if (isSelected) return prev.filter((p) => p.id !== player.id)
      if (prev.length >= 7) return prev
      return [...prev, player]
    })
  }, [])

  const loadLastLineupHandler = useCallback(() => {
    setSelectedLineup(lastLineup)
  }, [lastLineup])

  // ── Start mode handlers ──────────────────────────────────────────────────

  const startOffense = useCallback(() => {
    setGameMode('OFFENSE')
    setActivePasserId(null)
    setIsPullPhase(false)
    setTrackingStep('tracking')
  }, [])

  const startDefense = useCallback(() => {
    setGameMode('DEFENSE')
    setIsPullPhase(true)
    setPullingPlayerId(null)
    setPullTimerMs(0)
    setPullTimerRunning(false)
    setTrackingStep('tracking')
  }, [])

  // ── Core tracking handlers ───────────────────────────────────────────────

  // finishPoint must be defined before the handlers that call it
  const finishPoint = useCallback(async (
    who: 'US' | 'THEM',
    newHome: number,
    newAway: number,
    finalEvent?: LocalPointEvent,
  ) => {
    if (!matchId) return
    setActionLoading(true)
    try {
      const eventsToSend = finalEvent ? [...localPointEvents, finalEvent] : localPointEvents
      await archivePointApi(
        matchId,
        selectedLineup.map((p) => p.id),
        who,
        gameMode,
        eventsToSend,
      )
    } finally {
      setActionLoading(false)
    }
    setLastLineup(selectedLineup)
    setHomeScore(newHome)
    setAwayScore(newAway)
    setPointCount((n) => {
      const next = n + 1
      setArchivedPoints((prev) => [
        ...prev,
        { index: next, whoScored: who, homeScore: newHome, awayScore: newAway },
      ])
      return next
    })
    setLiveEvents([])
    setHistoryStack([])
    setLocalPointEvents([])
    setTrackingStep('roster')
    setSelectedLineup([])
    setActivePasserId(null)
    setIsPullPhase(false)
    setPullingPlayerId(null)
    setPullTimerMs(0)
    setPullTimerRunning(false)
  }, [matchId, selectedLineup, gameMode, localPointEvents])

  const handleCatch = useCallback((receiverId: string) => {
    if (!matchId || !activePasserId) return
    pushHistory()
    const thrower = selectedLineup.find((p) => p.id === activePasserId)
    const receiver = selectedLineup.find((p) => p.id === receiverId)
    addLocalEvent({ actionType: 'COMPLETION', playerId: activePasserId, secondaryPlayerId: receiverId, videoTimestampSeconds: vts() })
    pushLiveEvent(`${thrower?.firstName} ${thrower?.lastName}: Completion → ${receiver?.firstName} ${receiver?.lastName}`)
    setActivePasserId(receiverId)
  }, [matchId, activePasserId, selectedLineup, pushHistory, pushLiveEvent, addLocalEvent, vts])

  const handlePickup = useCallback((playerId: string) => {
    setActivePasserId(playerId)
    setPlayerPickerFor(null)
  }, [])

  const handleDrop = useCallback((receiverId: string) => {
    if (!matchId || !activePasserId) return
    pushHistory()
    const thrower = selectedLineup.find((p) => p.id === activePasserId)
    const receiver = selectedLineup.find((p) => p.id === receiverId)
    addLocalEvent({ actionType: 'DROP', playerId: receiverId, secondaryPlayerId: activePasserId, videoTimestampSeconds: vts() })
    pushLiveEvent(`${thrower?.firstName} ${thrower?.lastName}: Hata/Pas → ${receiver?.firstName} ${receiver?.lastName}: Drop`)
    setGameMode('DEFENSE')
    setIsPullPhase(false)
    setActivePasserId(null)
  }, [matchId, activePasserId, selectedLineup, pushHistory, pushLiveEvent, addLocalEvent, vts])

  const handleThrowaway = useCallback(() => {
    if (!matchId || !activePasserId) return
    pushHistory()
    const thrower = selectedLineup.find((p) => p.id === activePasserId)
    addLocalEvent({ actionType: 'THROWAWAY', playerId: activePasserId, videoTimestampSeconds: vts() })
    pushLiveEvent(`${thrower?.firstName} ${thrower?.lastName}: Hata/Pas`)
    setGameMode('DEFENSE')
    setIsPullPhase(false)
    setActivePasserId(null)
  }, [matchId, activePasserId, selectedLineup, pushHistory, pushLiveEvent, addLocalEvent, vts])

  const handleBlock = useCallback((playerId: string) => {
    if (!matchId) return
    pushHistory()
    const blocker = selectedLineup.find((p) => p.id === playerId)
    addLocalEvent({ actionType: 'BLOCK', playerId, videoTimestampSeconds: vts() })
    pushLiveEvent(`${blocker?.firstName} ${blocker?.lastName}: Blok`)
    setGameMode('OFFENSE')
    setActivePasserId(null)
    setPlayerPickerFor(null)
  }, [matchId, selectedLineup, pushHistory, pushLiveEvent, addLocalEvent, vts])

  const handleCallahan = useCallback(async (playerId: string) => {
    if (!matchId) return
    pushHistory()
    const scorer = selectedLineup.find((p) => p.id === playerId)
    const newHomeScore = homeScore + 1
    const event: LocalPointEvent = { actionType: 'CALLAHAN', playerId, videoTimestampSeconds: vts(), scoreUsAtEvent: newHomeScore, scoreThemAtEvent: awayScore }
    addLocalEvent(event)
    pushLiveEvent(`${scorer?.firstName} ${scorer?.lastName}: Callahan`)
    setPlayerPickerFor(null)
    await finishPoint('US', newHomeScore, awayScore, event)
  }, [matchId, selectedLineup, homeScore, awayScore, pushHistory, pushLiveEvent, addLocalEvent, finishPoint, vts])

  const handleOpponentTurnover = useCallback(() => {
    pushHistory()
    setGameMode('OFFENSE')
    setIsPullPhase(false)
    setActivePasserId(null)
  }, [pushHistory])

  const handleScore = useCallback(async (who: 'US' | 'THEM') => {
    if (!matchId || !activePasserId) return
    pushHistory()
    const activePlayer = selectedLineup.find((p) => p.id === activePasserId)
    let newHome = homeScore
    let newAway = awayScore
    let finalEvent: LocalPointEvent
    if (who === 'US') {
      newHome = homeScore + 1
      finalEvent = { actionType: 'GOAL', playerId: activePasserId, videoTimestampSeconds: vts(), scoreUsAtEvent: newHome, scoreThemAtEvent: awayScore }
      addLocalEvent(finalEvent)
      pushLiveEvent(`${activePlayer?.firstName} ${activePlayer?.lastName}: Gol`)
    } else {
      newAway = awayScore + 1
      finalEvent = { actionType: 'OPPONENT_GOAL', playerId: 'opponent', videoTimestampSeconds: vts(), scoreUsAtEvent: homeScore, scoreThemAtEvent: newAway }
      addLocalEvent(finalEvent)
    }
    await finishPoint(who, newHome, newAway, finalEvent)
  }, [matchId, activePasserId, selectedLineup, homeScore, awayScore, pushHistory, pushLiveEvent, addLocalEvent, finishPoint, vts])

  const handleOpponentScore = useCallback(async () => {
    if (!matchId) return
    pushHistory()
    const newAway = awayScore + 1
    const event: LocalPointEvent = { actionType: 'OPPONENT_GOAL', playerId: 'opponent', videoTimestampSeconds: vts(), scoreUsAtEvent: homeScore, scoreThemAtEvent: newAway }
    addLocalEvent(event)
    await finishPoint('THEM', homeScore, newAway, event)
  }, [matchId, homeScore, awayScore, pushHistory, addLocalEvent, finishPoint, vts])

  const handleGoalToPlayer = useCallback(async (receiverId: string) => {
    if (!matchId || !activePasserId) return
    pushHistory()
    const thrower = selectedLineup.find((p) => p.id === activePasserId)
    const receiver = selectedLineup.find((p) => p.id === receiverId)
    const newHomeScore = homeScore + 1
    const event: LocalPointEvent = { actionType: 'GOAL', playerId: activePasserId, secondaryPlayerId: receiverId, videoTimestampSeconds: vts(), scoreUsAtEvent: newHomeScore, scoreThemAtEvent: awayScore }
    addLocalEvent(event)
    pushLiveEvent(`${thrower?.firstName} ${thrower?.lastName}: Asist → ${receiver?.firstName} ${receiver?.lastName}: Gol`)
    await finishPoint('US', newHomeScore, awayScore, event)
  }, [matchId, activePasserId, selectedLineup, homeScore, awayScore, pushHistory, pushLiveEvent, addLocalEvent, finishPoint, vts])

  const handleUndo = useCallback(() => {
    if (historyStack.length === 0) return
    const prev = historyStack[historyStack.length - 1]
    setGameMode(prev.gameMode)
    setActivePasserId(prev.activePasserId)
    setIsPullPhase(prev.isPullPhase)
    setHomeScore(prev.homeScore)
    setAwayScore(prev.awayScore)
    setHistoryStack((s) => s.slice(0, -1))
    setLocalPointEvents((e) => e.slice(0, -1))
  }, [historyStack])

  // ── Pull handlers ─────────────────────────────────────────────────────────

  const handleSelectPuller = useCallback((playerId: string) => {
    setPullingPlayerId(playerId)
    setPullTimerMs(0)
    setPullTimerRunning(false)
  }, [])

  const handleEndPull = useCallback((inBounds: boolean) => {
    if (!matchId || !pullingPlayerId) return
    setPullTimerRunning(false)
    pushHistory()
    addLocalEvent({ actionType: inBounds ? 'PULL_SUCCESS' : 'PULL_FAIL', playerId: pullingPlayerId, videoTimestampSeconds: vts() })
    setIsPullPhase(false)
    setPullingPlayerId(null)
  }, [matchId, pullingPlayerId, pushHistory, addLocalEvent, vts])

  // ── Injury substitution ──────────────────────────────────────────────────

  const handleInjuryOut = useCallback((player: Player) => {
    setInjuryOutPlayer(player)
    setInjuryStep('in')
  }, [])

  const handleInjuryIn = useCallback((player: Player) => {
    if (!injuryOutPlayer) return
    setSelectedLineup((prev) =>
      prev.map((p) => (p.id === injuryOutPlayer.id ? player : p)),
    )
    if (activePasserId === injuryOutPlayer.id) {
      setActivePasserId(player.id)
    }
    setInjuryOutPlayer(null)
    setInjuryStep('out')
    setShowInjuryModal(false)
  }, [injuryOutPlayer, activePasserId])

  // ── Finish match ──────────────────────────────────────────────────────────

  const handleFinishMatch = useCallback(async () => {
    if (!matchId) return
    setActionLoading(true)
    try {
      await finishMatchApi(matchId)
      navigate(`/matches/${matchId}`)
    } finally {
      setActionLoading(false)
    }
  }, [matchId, navigate])

  // ── Back from tracking warning ────────────────────────────────────────────

  const confirmBackToRoster = useCallback(() => {
    setShowBackWarning(false)
    setTrackingStep('roster')
    setActivePasserId(null)
    setIsPullPhase(false)
    setPullingPlayerId(null)
    setPullTimerMs(0)
    setPullTimerRunning(false)
    setHistoryStack([])
    setLocalPointEvents([])
  }, [])

  // ─────────────────────────────────────────────────────────────────────────
  // Render: Loading / Error
  // ─────────────────────────────────────────────────────────────────────────

  if (loading) {
    return (
      <div className="min-h-screen bg-[#090c10] flex items-center justify-center">
        <Spinner />
      </div>
    )
  }

  if (loadError) {
    return (
      <div className="min-h-screen bg-[#090c10] flex items-center justify-center px-4">
        <div className="px-5 py-4 bg-red-500/10 border border-red-500/30 rounded-2xl text-red-400 text-center max-w-sm">
          {loadError}
        </div>
      </div>
    )
  }

  // ─────────────────────────────────────────────────────────────────────────
  // Score bar (reused across phases)
  // ─────────────────────────────────────────────────────────────────────────

  const ScoreBar = () => {
    const leading = homeScore > awayScore
      ? 'text-green-400'
      : homeScore < awayScore
        ? 'text-red-400'
        : 'text-white'

    return (
      <div className="flex items-center gap-3">
        <span className={`text-4xl font-mono font-black tabular-nums ${leading}`}>
          {homeScore}
        </span>
        <span className="text-2xl text-slate-600 font-light">–</span>
        <span className={`text-4xl font-mono font-black tabular-nums ${homeScore < awayScore ? 'text-green-400' : homeScore > awayScore ? 'text-red-400' : 'text-white'}`}>
          {awayScore}
        </span>
      </div>
    )
  }

  // ─────────────────────────────────────────────────────────────────────────
  // PHASE 1: Roster Selection
  // ─────────────────────────────────────────────────────────────────────────

  if (trackingStep === 'roster') {
    const positionFilters: PositionFilter[] = ['ALL', 'HANDLER', 'CUTTER', 'HYBRID']

    return (
      <div className="min-h-screen bg-[#090c10] pb-32">
        {actionLoading && <ActionLoadingOverlay message={t('tracking.processing')} />}

        {/* Top bar */}
        <div className="sticky top-0 z-20 bg-[#090c10]/90 backdrop-blur-sm border-b border-white/[0.06] px-4 py-3">
          <div className="max-w-2xl mx-auto flex items-center justify-between gap-3">
            <Link
              to={`/matches/${matchId}`}
              className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-400 hover:text-slate-100 transition-colors"
            >
              ← {t('common.back')}
            </Link>
            <div className="text-center">
              <p className="text-xs text-slate-500 mb-0.5 font-medium">{t('tracking.point', { number: pointCount + 1 })}</p>
              <p className="text-sm font-semibold text-slate-200 truncate max-w-[140px]">vs {opponentName}</p>
            </div>
            <ScoreBar />
          </div>
        </div>

        <div className="max-w-2xl mx-auto px-4 pt-5 space-y-4">
          {/* Header */}
          <div>
            <h1 className="text-xl font-bold text-white">{t('tracking.roster.title')}</h1>
            <p className="text-sm text-slate-500 mt-0.5">{t('tracking.roster.selectPlayers')}</p>
          </div>

          {/* Position filter */}
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider mr-1">
              {t('roster.fields.position')}:
            </span>
            {positionFilters.map((f) => (
              <button
                key={f}
                type="button"
                onClick={() => setPositionFilter(f)}
                className={[
                  'px-3 py-1.5 rounded-xl text-xs font-semibold border transition-all duration-150',
                  positionFilter === f
                    ? 'bg-green-500/20 text-green-400 border-green-500/40'
                    : 'bg-white/[0.04] text-slate-400 border-white/[0.06] hover:border-white/[0.12] hover:text-slate-300',
                ].join(' ')}
              >
                {f === 'ALL'
                  ? t('tracking.roster.filter.all')
                  : f === 'HANDLER'
                    ? t('tracking.roster.filter.handler')
                    : f === 'CUTTER'
                      ? t('tracking.roster.filter.cutter')
                      : t('tracking.roster.filter.hybrid')}
              </button>
            ))}
          </div>

          {/* Player grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2.5">
            {filteredPlayers.map((player) => {
              const isSelected = selectedLineup.some((p) => p.id === player.id)
              return (
                <button
                  key={player.id}
                  type="button"
                  onClick={() => togglePlayer(player)}
                  className={[
                    'relative flex items-center gap-3 p-3 rounded-2xl border text-left transition-all duration-150',
                    isSelected
                      ? 'bg-green-500/10 border-green-500/30 ring-1 ring-green-500/50'
                      : 'bg-[#0f1117] border-white/[0.08] hover:border-white/[0.15]',
                  ].join(' ')}
                  aria-pressed={isSelected}
                  aria-label={`${player.firstName} ${player.lastName}`}
                >
                  <JerseyBadge number={player.jerseyNumber} />
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-semibold text-slate-100 truncate">
                      {player.firstName} {player.lastName}
                    </p>
                    <p className="text-xs text-slate-500 mt-0.5">{player.position}</p>
                  </div>
                  {isSelected && (
                    <span className="absolute top-2 right-2 w-4 h-4 rounded-full bg-green-500 flex items-center justify-center text-white text-[10px] font-bold flex-shrink-0">
                      ✓
                    </span>
                  )}
                </button>
              )
            })}
          </div>
        </div>

        {/* Sticky bottom bar */}
        <div className="fixed bottom-0 left-0 right-0 z-20 bg-[#090c10]/95 backdrop-blur-sm border-t border-white/[0.08] px-4 py-3 safe-area-pb">
          <div className="max-w-2xl mx-auto flex items-center justify-between gap-3">
            {lastLineup.length === 7 ? (
              <button
                type="button"
                onClick={loadLastLineupHandler}
                className="px-3 py-2 rounded-xl text-xs font-semibold bg-white/[0.05] text-slate-400 border border-white/[0.08] hover:bg-white/[0.08] transition-all"
              >
                {t('tracking.roster.loadLastLine')}
              </button>
            ) : (
              <div />
            )}

            <span className={[
              'text-sm font-bold tabular-nums',
              selectedLineup.length === 7 ? 'text-green-400' : 'text-slate-400',
            ].join(' ')}>
              {t('tracking.roster.selected', { count: selectedLineup.length })}
            </span>

            <button
              type="button"
              onClick={() => setTrackingStep('start_mode')}
              disabled={selectedLineup.length !== 7}
              className={[
                'px-5 py-2.5 rounded-xl text-sm font-bold transition-all shadow-lg',
                selectedLineup.length === 7
                  ? 'bg-green-500 hover:bg-green-400 text-white shadow-green-500/25'
                  : 'bg-white/[0.05] text-slate-600 cursor-not-allowed',
              ].join(' ')}
            >
              {t('tracking.roster.next')} →
            </button>
          </div>
        </div>
      </div>
    )
  }

  // ─────────────────────────────────────────────────────────────────────────
  // PHASE 2: Start Mode Selection
  // ─────────────────────────────────────────────────────────────────────────

  if (trackingStep === 'start_mode') {
    return (
      <div className="min-h-screen bg-[#090c10] flex flex-col">
        {actionLoading && <ActionLoadingOverlay message={t('tracking.processing')} />}

        {/* Top bar */}
        <div className="sticky top-0 z-20 bg-[#090c10]/90 backdrop-blur-sm border-b border-white/[0.06] px-4 py-3">
          <div className="max-w-2xl mx-auto flex items-center justify-between gap-3">
            <button
              type="button"
              onClick={() => setTrackingStep('roster')}
              className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-400 hover:text-slate-100 transition-colors"
            >
              ← {t('common.back')}
            </button>
            <p className="text-xs text-slate-500 font-medium">{t('tracking.point', { number: pointCount + 1 })}</p>
            <ScoreBar />
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col items-center justify-center px-4 py-8 max-w-2xl mx-auto w-full">
          <h1 className="text-2xl font-bold text-white mb-2 text-center">
            {t('tracking.startMode.title')}
          </h1>
          <p className="text-slate-500 text-sm mb-8 text-center">
            {t('tracking.point', { number: pointCount + 1 })}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-lg">
            {/* OFFENSE */}
            <button
              type="button"
              onClick={startOffense}
              className="flex flex-col items-center gap-4 p-8 rounded-2xl border-2 border-green-500/40 hover:border-green-500/60 bg-green-500/5 hover:bg-green-500/10 transition-all duration-200 group"
              aria-label={t('tracking.startMode.offense')}
            >
              <span className="text-5xl group-hover:scale-110 transition-transform duration-200" role="img" aria-hidden="true">🥏</span>
              <div className="text-center">
                <p className="text-xl font-bold text-green-400">{t('tracking.startMode.offense')}</p>
                <p className="text-sm text-slate-500 mt-1">{t('tracking.startMode.offenseDesc')}</p>
              </div>
            </button>

            {/* DEFENSE */}
            <button
              type="button"
              onClick={startDefense}
              className="flex flex-col items-center gap-4 p-8 rounded-2xl border-2 border-red-500/40 hover:border-red-500/60 bg-red-500/5 hover:bg-red-500/10 transition-all duration-200 group"
              aria-label={t('tracking.startMode.defense')}
            >
              <span className="text-5xl group-hover:scale-110 transition-transform duration-200" role="img" aria-hidden="true">🛡️</span>
              <div className="text-center">
                <p className="text-xl font-bold text-red-400">{t('tracking.startMode.defense')}</p>
                <p className="text-sm text-slate-500 mt-1">{t('tracking.startMode.defenseDesc')}</p>
              </div>
            </button>
          </div>

          {/* Selected lineup preview */}
          <div className="mt-8 w-full max-w-lg">
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">
              {t('tracking.roster.selected', { count: selectedLineup.length })}
            </p>
            <div className="flex flex-wrap gap-2">
              {selectedLineup.map((p) => (
                <span
                  key={p.id}
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-white/[0.05] border border-white/[0.08] rounded-lg text-xs text-slate-300"
                >
                  <span className="font-mono text-green-400 font-bold">#{p.jerseyNumber}</span>
                  {p.firstName} {p.lastName}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }

  // ─────────────────────────────────────────────────────────────────────────
  // PHASE 3: Tracking
  // ─────────────────────────────────────────────────────────────────────────

  const activePlayer = activePasserId
    ? selectedLineup.find((p) => p.id === activePasserId)
    : null

  const pullingPlayer = pullingPlayerId
    ? selectedLineup.find((p) => p.id === pullingPlayerId)
    : null

  const benchPlayers = players.filter(
    (p) => !selectedLineup.some((lp) => lp.id === p.id),
  )

  // Player picker context label
  const pickerTitle =
    playerPickerFor === 'block'
      ? t('tracking.defense.whoBlocked')
      : playerPickerFor === 'callahan'
        ? t('tracking.defense.whoCallahan')
        : t('tracking.defense.whoPickedUp')

  const pickerHandler =
    playerPickerFor === 'block'
      ? handleBlock
      : playerPickerFor === 'callahan'
        ? handleCallahan
        : handlePickup

  const pullTimerDisplay = (pullTimerMs / 1000).toFixed(2) + 's'

  return (
    <div className="h-screen bg-[#090c10] flex flex-col overflow-hidden">
      {actionLoading && <ActionLoadingOverlay message={t('tracking.processing')} />}

      {/* ── Top bar ── */}
      <div className="flex-shrink-0 z-20 bg-[#090c10]/95 backdrop-blur-sm border-b border-white/[0.06] px-3 py-2 flex items-center justify-between gap-2">
        <button
          type="button"
          onClick={() => setShowBackWarning(true)}
          className="text-sm font-medium text-slate-400 hover:text-slate-100 transition-colors whitespace-nowrap"
        >
          ←
        </button>
        <ScoreBar />
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => { setInjuryStep('out'); setShowInjuryModal(true) }}
            className="px-2 py-1.5 text-xs font-semibold rounded-lg bg-amber-500/10 text-amber-400 border border-amber-500/20 hover:bg-amber-500/20 transition-all"
          >
            ⚕️
          </button>
          <button
            type="button"
            onClick={() => setShowFinishModal(true)}
            className="px-2 py-1.5 rounded-lg text-xs font-bold bg-red-500/15 text-red-400 border border-red-500/30 hover:bg-red-500/25 transition-all whitespace-nowrap"
          >
            {t('tracking.actions.finishMatch')}
          </button>
        </div>
      </div>

      {/* ── Main: video (left) + event history (right) ── */}
      <div className="flex flex-1 min-h-0 overflow-hidden">

        {/* Left: video area */}
        <div className="flex flex-col overflow-hidden" style={{ flex: '1 1 65%' }}>

          {/* YouTube video (set on Match Detail page) */}
          {youtubeVideoId ? (
            <div className="relative w-full aspect-video min-h-0 flex-shrink bg-black">
              <YouTube
                videoId={youtubeVideoId}
                opts={{ width: '100%', height: '100%', playerVars: { controls: 1, rel: 0 } }}
                onReady={(e) => { ytPlayerRef.current = e.target }}
                className="absolute inset-0 w-full h-full"
                iframeClassName="w-full h-full"
              />
            </div>
          ) : (
            <div className="w-full aspect-video min-h-0 flex-shrink flex items-center justify-center gap-2 bg-white/[0.02] border-b border-white/[0.06] text-xs text-slate-500">
              📹 {t('tracking.noVideoBound')}
            </div>
          )}

          {/* Pull phase UI (shown in left area when in pull phase) */}
          {gameMode === 'DEFENSE' && isPullPhase && (
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {!pullingPlayerId ? (
                <div>
                  <p className="text-sm font-semibold text-slate-300 mb-3">{t('tracking.pull.selectPuller')}</p>
                  <div className="grid grid-cols-3 gap-2">
                    {selectedLineup.map((player) => (
                      <button
                        key={player.id}
                        type="button"
                        onClick={() => handleSelectPuller(player.id)}
                        className="flex items-center gap-2 p-2.5 rounded-xl border border-white/[0.08] bg-white/[0.02] hover:bg-red-500/10 hover:border-red-500/30 transition-all"
                      >
                        <JerseyBadge number={player.jerseyNumber} />
                        <span className="text-xs font-medium text-slate-200 truncate">{player.firstName} {player.lastName}</span>
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <JerseyBadge number={pullingPlayer?.jerseyNumber ?? 0} />
                    <p className="text-sm font-bold text-white">{pullingPlayer?.firstName} {pullingPlayer?.lastName}</p>
                  </div>
                  <div className="bg-black/30 rounded-xl p-3 text-center">
                    <p className="text-xs text-slate-500 mb-1">{t('tracking.pull.hangTime')}</p>
                    <p className="text-3xl font-mono font-black text-white tabular-nums">{pullTimerDisplay}</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setPullTimerRunning((r) => !r)}
                    className={[
                      'w-full py-2.5 rounded-xl text-sm font-bold transition-all',
                      pullTimerRunning
                        ? 'bg-amber-500/20 text-amber-400 border border-amber-500/40'
                        : 'bg-green-500/20 text-green-400 border border-green-500/40',
                    ].join(' ')}
                  >
                    {pullTimerRunning ? t('tracking.pull.stopTimer') : t('tracking.pull.startTimer')}
                  </button>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => handleEndPull(true)}
                      className="py-2.5 rounded-xl text-sm font-bold bg-green-500/15 text-green-400 border border-green-500/30 hover:bg-green-500/25 transition-all"
                    >
                      {t('tracking.pull.inBounds')} ✓
                    </button>
                    <button
                      type="button"
                      onClick={() => handleEndPull(false)}
                      className="py-2.5 rounded-xl text-sm font-bold bg-red-500/15 text-red-400 border border-red-500/30 hover:bg-red-500/25 transition-all"
                    >
                      {t('tracking.pull.outOfBounds')} ✗
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Right: live event history */}
        <div className="flex flex-col border-l border-white/[0.06]" style={{ flex: '0 0 32%', minWidth: '180px', maxWidth: '280px' }}>
          <div className="px-3 py-2 border-b border-white/[0.06] flex-shrink-0">
            <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">{t('tracking.liveEvents')}</p>
          </div>
          <div className="flex-1 overflow-y-auto p-2 space-y-1">
            {liveEvents.length === 0 && (
              <p className="text-xs text-slate-600 text-center py-4">{t('tracking.noEventsYet')}</p>
            )}
            {liveEvents.map((evt, i) => (
              <div key={i} className="px-2 py-1.5 rounded-lg bg-white/[0.03] border border-white/[0.04]">
                <p className="text-xs text-slate-300 leading-snug">{evt}</p>
              </div>
            ))}
          </div>
          <div className="p-2 border-t border-white/[0.06] flex-shrink-0 space-y-1">
            <div className="text-xs text-slate-600 text-center">
              {t('tracking.point', { number: pointCount + 1 })} · {gameMode === 'OFFENSE' ? '⚡' : '🛡️'}
            </div>
            <button
              type="button"
              onClick={handleUndo}
              disabled={historyStack.length === 0}
              className="w-full py-1.5 rounded-xl text-xs font-bold bg-white/[0.05] text-slate-400 border border-white/[0.08] hover:bg-white/[0.08] transition-all disabled:opacity-40 disabled:cursor-not-allowed"
            >
              ↩ {t('tracking.actions.undo')}
            </button>
          </div>
        </div>
      </div>

      {/* ── Bottom: horizontal player cards ── */}
      {!isPullPhase && (
        <div className="flex-shrink-0 h-[160px] border-t border-white/[0.08] bg-[#090c10] overflow-x-auto">
          <div
            className="grid gap-2 p-2.5 h-full"
            style={{
              gridTemplateColumns: `repeat(${selectedLineup.length + (gameMode === 'DEFENSE' ? 1 : 0)}, minmax(0, 1fr))`,
            }}
          >
            {selectedLineup.map((player) => {
                const isDiskHolder = player.id === activePasserId
                return (
                  <div
                    key={player.id}
                    className={[
                      'flex flex-col items-center gap-1 p-2.5 rounded-2xl border transition-all min-w-0 h-full',
                      isDiskHolder
                        ? 'bg-blue-500/10 border-blue-500/40'
                        : 'bg-[#0f1117] border-white/[0.08]',
                    ].join(' ')}
                  >
                    <span className="font-mono text-[11px] font-bold text-slate-500">#{player.jerseyNumber}</span>
                    <p className="text-[11px] font-semibold text-slate-200 text-center leading-tight w-full truncate">
                      {player.firstName} {player.lastName}
                    </p>

                    {/* OFFENSE: diski_al — no disk holder yet */}
                    {gameMode === 'OFFENSE' && !activePasserId && (
                      <button
                        type="button"
                        onClick={() => setActivePasserId(player.id)}
                        className="w-full py-1.5 mt-0.5 rounded-lg text-[11px] font-bold bg-amber-500/20 text-amber-400 border border-amber-500/40 hover:bg-amber-500/30 transition-all"
                      >
                        {t('tracking.diskiAl')}
                      </button>
                    )}

                    {/* OFFENSE: this player has the disk */}
                    {gameMode === 'OFFENSE' && activePasserId && isDiskHolder && (
                      <button
                        type="button"
                        onClick={handleThrowaway}
                        className="w-full py-1.5 mt-0.5 rounded-lg text-[11px] font-bold bg-orange-500/20 text-orange-400 border border-orange-500/40 hover:bg-orange-500/30 transition-all"
                      >
                        {t('tracking.actions.throwaway')}
                      </button>
                    )}

                    {/* OFFENSE: other players (receive candidates) */}
                    {gameMode === 'OFFENSE' && activePasserId && !isDiskHolder && (
                      <div className="flex flex-col gap-0.5 w-full mt-auto">
                        <div className="grid grid-cols-2 gap-0.5 w-full">
                          <button
                            type="button"
                            onClick={() => handleDrop(player.id)}
                            className="py-1 rounded-lg text-[11px] font-bold bg-red-500/20 text-red-400 border border-red-500/40 hover:bg-red-500/30 transition-all"
                          >
                            {t('tracking.actions.drop')}
                          </button>
                          <button
                            type="button"
                            onClick={() => handleGoalToPlayer(player.id)}
                            className="py-1 rounded-lg text-[11px] font-bold bg-purple-500/20 text-purple-400 border border-purple-500/40 hover:bg-purple-500/30 transition-all"
                          >
                            {t('tracking.actions.goal')}
                          </button>
                        </div>
                        <button
                          type="button"
                          onClick={() => handleCatch(player.id)}
                          className="w-full py-1 rounded-lg text-[11px] font-bold bg-green-500/20 text-green-400 border border-green-500/40 hover:bg-green-500/30 transition-all"
                        >
                          {t('tracking.actions.passReceived')}
                        </button>
                      </div>
                    )}

                    {/* DEFENSE: blok + callahan per player */}
                    {gameMode === 'DEFENSE' && (
                      <div className="flex flex-col gap-0.5 w-full mt-0.5">
                        <button
                          type="button"
                          onClick={() => handleBlock(player.id)}
                          className="w-full py-1.5 rounded-lg text-[11px] font-bold bg-blue-500/20 text-blue-400 border border-blue-500/40 hover:bg-blue-500/30 transition-all"
                        >
                          {t('tracking.actions.block')}
                        </button>
                        <button
                          type="button"
                          onClick={() => handleCallahan(player.id)}
                          className="w-full py-1.5 rounded-lg text-[11px] font-bold bg-indigo-500/20 text-indigo-400 border border-indigo-500/40 hover:bg-indigo-500/30 transition-all"
                        >
                          {t('tracking.actions.callahan')}
                        </button>
                      </div>
                    )}
                  </div>
                )
              })}

            {/* Opponent card (defense only) */}
            {gameMode === 'DEFENSE' && (
              <div className="flex flex-col items-center gap-1 p-2.5 rounded-2xl border border-white/[0.06] bg-white/[0.02] min-w-0">
                <span className="text-[11px] font-bold text-slate-500 uppercase">Rakip</span>
                <div className="flex flex-col gap-0.5 w-full mt-0.5">
                  <button
                    type="button"
                    onClick={handleOpponentScore}
                    className="w-full py-1.5 rounded-lg text-[11px] font-bold bg-red-500/20 text-red-400 border border-red-500/40 hover:bg-red-500/30 transition-all"
                  >
                    {t('tracking.actions.opponentScore')}
                  </button>
                  <button
                    type="button"
                    onClick={handleOpponentTurnover}
                    className="w-full py-1.5 rounded-lg text-[11px] font-bold bg-orange-500/20 text-orange-400 border border-orange-500/40 hover:bg-orange-500/30 transition-all"
                  >
                    {t('tracking.actions.opponentError')}
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* ── Player Picker Overlay ──────────────────────────────────────────── */}
      {playerPickerFor && (
        <div
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-end sm:items-center justify-center p-4"
          onClick={() => setPlayerPickerFor(null)}
          role="dialog"
          aria-modal="true"
          aria-label={pickerTitle}
        >
          <div
            className="w-full max-w-md bg-[#0f1117] border border-white/[0.08] rounded-2xl shadow-2xl p-5"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-base font-bold text-white">{pickerTitle}</h2>
              <button
                type="button"
                onClick={() => setPlayerPickerFor(null)}
                className="w-7 h-7 rounded-lg bg-white/[0.06] hover:bg-white/[0.10] text-slate-400 text-sm transition-colors"
                aria-label={t('common.close')}
              >
                ✕
              </button>
            </div>
            <div className="grid grid-cols-2 gap-2">
              {selectedLineup.map((player) => (
                <button
                  key={player.id}
                  type="button"
                  onClick={() => pickerHandler(player.id)}
                  className="flex items-center gap-2.5 p-3 rounded-xl border border-white/[0.08] bg-white/[0.02] hover:bg-green-500/10 hover:border-green-500/30 transition-all"
                >
                  <JerseyBadge number={player.jerseyNumber} />
                  <span className="text-sm font-medium text-slate-200 truncate">
                    {player.firstName} {player.lastName}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ── Injury Substitution Modal ──────────────────────────────────────── */}
      {showInjuryModal && (
        <div
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-end sm:items-center justify-center p-4"
          onClick={() => { setShowInjuryModal(false); setInjuryOutPlayer(null); setInjuryStep('out') }}
          role="dialog"
          aria-modal="true"
          aria-label={t('tracking.injury.title')}
        >
          <div
            className="w-full max-w-md bg-[#0f1117] border border-white/[0.08] rounded-2xl shadow-2xl p-5"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-base font-bold text-white">{t('tracking.injury.title')}</h2>
              <button
                type="button"
                onClick={() => { setShowInjuryModal(false); setInjuryOutPlayer(null); setInjuryStep('out') }}
                className="w-7 h-7 rounded-lg bg-white/[0.06] hover:bg-white/[0.10] text-slate-400 text-sm transition-colors"
                aria-label={t('common.close')}
              >
                ✕
              </button>
            </div>

            {injuryStep === 'out' ? (
              <>
                <p className="text-sm text-slate-400 mb-3">{t('tracking.injury.whoOut')}</p>
                <div className="grid grid-cols-2 gap-2">
                  {selectedLineup.map((player) => (
                    <button
                      key={player.id}
                      type="button"
                      onClick={() => handleInjuryOut(player)}
                      className="flex items-center gap-2.5 p-3 rounded-xl border border-white/[0.08] bg-white/[0.02] hover:bg-red-500/10 hover:border-red-500/30 transition-all"
                    >
                      <JerseyBadge number={player.jerseyNumber} />
                      <span className="text-sm font-medium text-slate-200 truncate">
                        {player.firstName} {player.lastName}
                      </span>
                    </button>
                  ))}
                </div>
              </>
            ) : (
              <>
                <div className="flex items-center gap-2 mb-3 p-2 bg-red-500/10 border border-red-500/20 rounded-lg">
                  <span className="text-xs text-red-400">
                    ← {injuryOutPlayer?.firstName} {injuryOutPlayer?.lastName}
                  </span>
                </div>
                <p className="text-sm text-slate-400 mb-3">{t('tracking.injury.whoIn')}</p>
                <div className="grid grid-cols-2 gap-2 max-h-64 overflow-y-auto pr-1">
                  {sortPlayers(benchPlayers).map((player) => (
                    <button
                      key={player.id}
                      type="button"
                      onClick={() => handleInjuryIn(player)}
                      className="flex items-center gap-2.5 p-3 rounded-xl border border-white/[0.08] bg-white/[0.02] hover:bg-green-500/10 hover:border-green-500/30 transition-all"
                    >
                      <JerseyBadge number={player.jerseyNumber} />
                      <span className="text-sm font-medium text-slate-200 truncate">
                        {player.firstName} {player.lastName}
                      </span>
                    </button>
                  ))}
                  {benchPlayers.length === 0 && (
                    <p className="col-span-2 text-center text-slate-500 text-sm py-4">
                      {t('common.noResults')}
                    </p>
                  )}
                </div>
              </>
            )}
          </div>
        </div>
      )}

      {/* ── Back to roster warning modal ─────────────────────────────────── */}
      {showBackWarning && (
        <div
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
        >
          <div className="w-full max-w-sm bg-[#0f1117] border border-white/[0.08] rounded-2xl shadow-2xl p-6 space-y-4">
            <h2 className="text-base font-bold text-white">{t('tracking.roster.title')}</h2>
            <p className="text-sm text-slate-400">{t('tracking.backWarning')}</p>
            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => setShowBackWarning(false)}
                className="flex-1 py-2.5 rounded-xl text-sm font-semibold bg-white/[0.06] text-slate-300 hover:bg-white/[0.09] transition-colors"
              >
                {t('common.cancel')}
              </button>
              <button
                type="button"
                onClick={confirmBackToRoster}
                className="flex-1 py-2.5 rounded-xl text-sm font-bold bg-amber-500/20 text-amber-400 border border-amber-500/30 hover:bg-amber-500/30 transition-all"
              >
                {t('common.confirm')}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ── Finish Match Modal ────────────────────────────────────────────── */}
      {showFinishModal && (
        <div
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setShowFinishModal(false)}
          role="dialog"
          aria-modal="true"
          aria-label={t('tracking.finish.title')}
        >
          <div
            className="w-full max-w-sm bg-[#0f1117] border border-white/[0.08] rounded-2xl shadow-2xl p-6 space-y-5"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="text-center space-y-2">
              <span className="text-3xl" role="img" aria-hidden="true">🏁</span>
              <h2 className="text-lg font-bold text-white">{t('tracking.finish.title')}</h2>
              <p className="text-sm text-slate-400">{t('tracking.finish.confirm')}</p>
            </div>

            <div className="flex items-center justify-center gap-4 py-3 bg-white/[0.03] rounded-xl border border-white/[0.06]">
              <span className="text-3xl font-mono font-black text-white tabular-nums">{homeScore}</span>
              <span className="text-xl text-slate-600">–</span>
              <span className="text-3xl font-mono font-black text-white tabular-nums">{awayScore}</span>
            </div>

            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => setShowFinishModal(false)}
                className="flex-1 py-2.5 rounded-xl text-sm font-semibold bg-white/[0.06] text-slate-300 hover:bg-white/[0.09] transition-colors"
              >
                {t('tracking.finish.cancel')}
              </button>
              <button
                type="button"
                onClick={handleFinishMatch}
                disabled={actionLoading}
                className="flex-1 py-2.5 rounded-xl text-sm font-bold bg-red-500 hover:bg-red-400 disabled:opacity-60 text-white transition-all shadow-lg shadow-red-500/20"
              >
                {t('tracking.finish.button')}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
