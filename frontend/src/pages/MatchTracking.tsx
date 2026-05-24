import { useCallback, useEffect, useRef, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import type { AxiosError } from 'axios'
import apiClient from '../lib/apiClient'
import { useAppStore } from '../store/appStore'
import type { Player } from '../types'

// ─── Local types ────────────────────────────────────────────────────────────

type TrackingStep = 'roster' | 'start_mode' | 'tracking'
type GameMode = 'OFFENSE' | 'DEFENSE'
type PositionFilter = 'ALL' | 'HANDLER' | 'CUTTER' | 'HYBRID'

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

// ─── API stubs (Agent 3 fills these) ────────────────────────────────────────

async function recordEventApi(
  matchId: string,
  actionType: string,
  playerId: string,
  secondaryPlayerId?: string,
  opts?: { scoreUs?: number; scoreThem?: number },
): Promise<void> {
  await apiClient.post(`/api/matches/${matchId}/events`, {
    playerId,
    secondaryPlayerId: secondaryPlayerId ?? undefined,
    actionType,
    scoreUsAtEvent: opts?.scoreUs,
    scoreThemAtEvent: opts?.scoreThem,
  })
}

async function undoEventApi(matchId: string): Promise<void> {
  await apiClient.delete(`/api/matches/${matchId}/events/last`)
}

async function archivePointApi(
  matchId: string,
  lineup: string[],
  whoScored: 'US' | 'THEM',
  startMode: 'OFFENSE' | 'DEFENSE',
): Promise<void> {
  await apiClient.post(`/api/matches/${matchId}/points/archive`, {
    lineup,
    whoScored,
    startMode,
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

  // ── Modal state ─────────────────────────────────────────────────────────
  const [showFinishModal, setShowFinishModal] = useState(false)
  const [showBackWarning, setShowBackWarning] = useState(false)
  const [showInjuryModal, setShowInjuryModal] = useState(false)
  const [injuryStep, setInjuryStep] = useState<'out' | 'in'>('out')
  const [injuryOutPlayer, setInjuryOutPlayer] = useState<Player | null>(null)
  const [playerPickerFor, setPlayerPickerFor] = useState<'block' | 'callahan' | 'pickup' | null>(null)

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

  const pushHistory = useCallback(() => {
    setHistoryStack((prev) => [
      ...prev,
      { gameMode, activePasserId, isPullPhase, homeScore, awayScore },
    ])
  }, [gameMode, activePasserId, isPullPhase, homeScore, awayScore])

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
  ) => {
    if (!matchId) return
    await archivePointApi(
      matchId,
      selectedLineup.map((p) => p.id),
      who,
      gameMode,
    )
    setLastLineup(selectedLineup)
    setHomeScore(newHome)
    setAwayScore(newAway)
    setPointCount((n) => n + 1)
    setHistoryStack([])
    setTrackingStep('roster')
    setSelectedLineup([])
    setActivePasserId(null)
    setIsPullPhase(false)
    setPullingPlayerId(null)
    setPullTimerMs(0)
    setPullTimerRunning(false)
  }, [matchId, selectedLineup, gameMode])

  const handleCatch = useCallback(async (receiverId: string) => {
    if (!matchId || !activePasserId) return
    setActionLoading(true)
    try {
      pushHistory()
      await recordEventApi(matchId, 'COMPLETION', activePasserId, receiverId)
      setActivePasserId(receiverId)
    } finally {
      setActionLoading(false)
    }
  }, [matchId, activePasserId, pushHistory])

  const handlePickup = useCallback((playerId: string) => {
    setActivePasserId(playerId)
    setPlayerPickerFor(null)
  }, [])

  const handleThrowaway = useCallback(async () => {
    if (!matchId || !activePasserId) return
    setActionLoading(true)
    try {
      pushHistory()
      await recordEventApi(matchId, 'THROWAWAY', activePasserId)
      setGameMode('DEFENSE')
      setIsPullPhase(false)
      setActivePasserId(null)
    } finally {
      setActionLoading(false)
    }
  }, [matchId, activePasserId, pushHistory])

  const handleBlock = useCallback(async (playerId: string) => {
    if (!matchId) return
    setActionLoading(true)
    try {
      pushHistory()
      await recordEventApi(matchId, 'BLOCK', playerId)
      setGameMode('OFFENSE')
      setActivePasserId(null)
      setPlayerPickerFor(null)
    } finally {
      setActionLoading(false)
    }
  }, [matchId, pushHistory])

  const handleCallahan = useCallback(async (playerId: string) => {
    if (!matchId) return
    setActionLoading(true)
    try {
      pushHistory()
      const newHomeScore = homeScore + 1
      await recordEventApi(matchId, 'CALLAHAN', playerId, undefined, {
        scoreUs: newHomeScore,
        scoreThem: awayScore,
      })
      setPlayerPickerFor(null)
      await finishPoint('US', newHomeScore, awayScore)
    } finally {
      setActionLoading(false)
    }
  }, [matchId, homeScore, awayScore, pushHistory, finishPoint])

  const handleOpponentTurnover = useCallback(() => {
    pushHistory()
    setGameMode('OFFENSE')
    setIsPullPhase(false)
    setActivePasserId(null)
  }, [pushHistory])

  const handleScore = useCallback(async (who: 'US' | 'THEM') => {
    if (!matchId || !activePasserId) return
    setActionLoading(true)
    try {
      pushHistory()
      let newHome = homeScore
      let newAway = awayScore
      if (who === 'US') {
        newHome = homeScore + 1
        await recordEventApi(matchId, 'GOAL', activePasserId, undefined, {
          scoreUs: newHome,
          scoreThem: awayScore,
        })
      } else {
        newAway = awayScore + 1
        await recordEventApi(matchId, 'OPPONENT_GOAL', 'opponent', undefined, {
          scoreUs: homeScore,
          scoreThem: newAway,
        })
      }
      await finishPoint(who, newHome, newAway)
    } finally {
      setActionLoading(false)
    }
  }, [matchId, activePasserId, homeScore, awayScore, pushHistory, finishPoint])

  const handleOpponentScore = useCallback(async () => {
    if (!matchId) return
    setActionLoading(true)
    try {
      pushHistory()
      const newAway = awayScore + 1
      await recordEventApi(matchId, 'OPPONENT_GOAL', 'opponent', undefined, {
        scoreUs: homeScore,
        scoreThem: newAway,
      })
      await finishPoint('THEM', homeScore, newAway)
    } finally {
      setActionLoading(false)
    }
  }, [matchId, homeScore, awayScore, pushHistory, finishPoint])

  const handleUndo = useCallback(async () => {
    if (!matchId || historyStack.length === 0) return
    setActionLoading(true)
    try {
      await undoEventApi(matchId)
      const prev = historyStack[historyStack.length - 1]
      setGameMode(prev.gameMode)
      setActivePasserId(prev.activePasserId)
      setIsPullPhase(prev.isPullPhase)
      setHomeScore(prev.homeScore)
      setAwayScore(prev.awayScore)
      setHistoryStack((s) => s.slice(0, -1))
    } finally {
      setActionLoading(false)
    }
  }, [matchId, historyStack])

  // ── Pull handlers ─────────────────────────────────────────────────────────

  const handleSelectPuller = useCallback((playerId: string) => {
    setPullingPlayerId(playerId)
    setPullTimerMs(0)
    setPullTimerRunning(false)
  }, [])

  const handleEndPull = useCallback(async (inBounds: boolean) => {
    if (!matchId || !pullingPlayerId) return
    setActionLoading(true)
    setPullTimerRunning(false)
    try {
      pushHistory()
      await recordEventApi(
        matchId,
        inBounds ? 'PULL_SUCCESS' : 'PULL_FAIL',
        pullingPlayerId,
      )
      setIsPullPhase(false)
      setPullingPlayerId(null)
    } finally {
      setActionLoading(false)
    }
  }, [matchId, pullingPlayerId, pushHistory])

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
    <div className="min-h-screen bg-[#090c10] pb-4">
      {actionLoading && <ActionLoadingOverlay message={t('tracking.processing')} />}

      {/* ── Sticky top bar ───────────────────────────────────────────────── */}
      <div className="sticky top-0 z-20 bg-[#090c10]/95 backdrop-blur-sm border-b border-white/[0.06] px-4 py-3">
        <div className="max-w-2xl mx-auto flex items-center justify-between gap-2">
          <button
            type="button"
            onClick={() => setShowBackWarning(true)}
            className="text-sm font-medium text-slate-400 hover:text-slate-100 transition-colors whitespace-nowrap"
          >
            ← {t('tracking.roster.title')}
          </button>

          <ScoreBar />

          <button
            type="button"
            onClick={() => setShowFinishModal(true)}
            className="px-3 py-1.5 rounded-xl text-xs font-bold bg-red-500/15 text-red-400 border border-red-500/30 hover:bg-red-500/25 transition-all whitespace-nowrap"
          >
            {t('tracking.actions.finishMatch')}
          </button>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-4 pt-4 space-y-4">

        {/* ── Point + injury row ───────────────────────────────────────── */}
        <div className="flex items-center justify-between">
          <span className="text-sm font-bold text-slate-400">
            {t('tracking.point', { number: pointCount + 1 })}
          </span>
          <button
            type="button"
            onClick={() => { setInjuryStep('out'); setShowInjuryModal(true) }}
            className="px-3 py-1.5 text-xs font-semibold rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20 hover:bg-amber-500/20 transition-all"
          >
            {t('tracking.actions.injurySub')} ⚕️
          </button>
        </div>

        {/* ── DEFENSE: Pull phase ───────────────────────────────────────── */}
        {gameMode === 'DEFENSE' && isPullPhase && (
          <div className="space-y-4">
            {!pullingPlayerId ? (
              <>
                <div className="bg-[#0f1117] border border-white/[0.08] rounded-2xl p-4">
                  <h2 className="text-base font-bold text-slate-100 mb-3">
                    {t('tracking.pull.selectPuller')}
                  </h2>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                    {selectedLineup.map((player) => (
                      <button
                        key={player.id}
                        type="button"
                        onClick={() => handleSelectPuller(player.id)}
                        className="flex items-center gap-2.5 p-3 rounded-xl border border-white/[0.08] bg-white/[0.02] hover:bg-red-500/10 hover:border-red-500/30 transition-all"
                      >
                        <JerseyBadge number={player.jerseyNumber} />
                        <span className="text-sm font-medium text-slate-200 truncate">
                          {player.firstName} {player.lastName}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              </>
            ) : (
              <div className="bg-[#0f1117] border border-red-500/20 rounded-2xl p-5 space-y-4">
                <div className="flex items-center gap-3">
                  <JerseyBadge number={pullingPlayer?.jerseyNumber ?? 0} />
                  <div>
                    <p className="text-sm text-slate-400">{t('tracking.pull.selectPuller')}</p>
                    <p className="text-base font-bold text-white">
                      {pullingPlayer?.firstName} {pullingPlayer?.lastName}
                    </p>
                  </div>
                </div>

                {/* Timer */}
                <div className="bg-black/30 rounded-xl p-4 text-center">
                  <p className="text-xs text-slate-500 mb-1">{t('tracking.pull.hangTime')}</p>
                  <p className="text-4xl font-mono font-black text-white tabular-nums">
                    {pullTimerDisplay}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => setPullTimerRunning((r) => !r)}
                  className={[
                    'w-full py-3 rounded-xl text-sm font-bold transition-all',
                    pullTimerRunning
                      ? 'bg-amber-500/20 text-amber-400 border border-amber-500/40 hover:bg-amber-500/30'
                      : 'bg-green-500/20 text-green-400 border border-green-500/40 hover:bg-green-500/30',
                  ].join(' ')}
                >
                  {pullTimerRunning ? t('tracking.pull.stopTimer') : t('tracking.pull.startTimer')}
                </button>

                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => handleEndPull(true)}
                    className="py-3 rounded-xl text-sm font-bold bg-green-500/15 text-green-400 border border-green-500/30 hover:bg-green-500/25 transition-all"
                  >
                    {t('tracking.pull.inBounds')} ✓
                  </button>
                  <button
                    type="button"
                    onClick={() => handleEndPull(false)}
                    className="py-3 rounded-xl text-sm font-bold bg-red-500/15 text-red-400 border border-red-500/30 hover:bg-red-500/25 transition-all"
                  >
                    {t('tracking.pull.outOfBounds')} ✗
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        {/* ── DEFENSE: Live defense (not pull phase) ────────────────────── */}
        {gameMode === 'DEFENSE' && !isPullPhase && (
          <div className="space-y-3">
            <div className="bg-[#0f1117] border border-red-500/20 rounded-2xl p-4">
              <p className="text-sm font-semibold text-red-400 mb-4">
                {t('tracking.defense.title')} 🛡️
              </p>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setPlayerPickerFor('block')}
                  className="flex flex-col items-center gap-2 py-4 px-3 rounded-xl border border-teal-500/30 bg-teal-500/10 hover:bg-teal-500/20 text-teal-300 font-semibold text-sm transition-all"
                >
                  <span className="text-2xl">🛡️</span>
                  {t('tracking.actions.block')}
                </button>
                <button
                  type="button"
                  onClick={() => setPlayerPickerFor('callahan')}
                  className="flex flex-col items-center gap-2 py-4 px-3 rounded-xl border border-yellow-500/30 bg-yellow-500/10 hover:bg-yellow-500/20 text-yellow-300 font-semibold text-sm transition-all"
                >
                  <span className="text-2xl">⚡</span>
                  {t('tracking.actions.callahan')}
                </button>
                <button
                  type="button"
                  onClick={handleOpponentTurnover}
                  className="flex flex-col items-center gap-2 py-4 px-3 rounded-xl border border-orange-500/30 bg-orange-500/10 hover:bg-orange-500/20 text-orange-300 font-semibold text-sm transition-all"
                >
                  <span className="text-2xl">🔄</span>
                  {t('tracking.actions.opponentTurnover')}
                </button>
                <button
                  type="button"
                  onClick={handleUndo}
                  disabled={historyStack.length === 0}
                  className="flex flex-col items-center gap-2 py-4 px-3 rounded-xl border border-white/[0.08] bg-white/[0.03] hover:bg-white/[0.07] text-slate-400 font-semibold text-sm transition-all disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  <span className="text-2xl">↩</span>
                  {t('tracking.actions.undo')}
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ── OFFENSE: No passer (need pickup) ─────────────────────────── */}
        {gameMode === 'OFFENSE' && !activePasserId && (
          <div className="bg-[#0f1117] border border-white/[0.08] rounded-2xl p-4 space-y-3">
            <h2 className="text-base font-bold text-slate-100">
              {t('tracking.offense.whoPickedUp')}
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              {selectedLineup.map((player) => (
                <button
                  key={player.id}
                  type="button"
                  onClick={() => setActivePasserId(player.id)}
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
        )}

        {/* ── OFFENSE: Active passer ────────────────────────────────────── */}
        {gameMode === 'OFFENSE' && activePasserId && (
          <div className="space-y-3">
            {/* Active passer banner */}
            <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-3 flex items-center gap-3">
              <span className="text-green-400 text-lg" aria-hidden="true">🥏</span>
              <div className="flex items-center gap-2.5 flex-1 min-w-0">
                <JerseyBadge number={activePlayer?.jerseyNumber ?? 0} />
                <div className="min-w-0">
                  <p className="text-xs text-slate-400">{t('tracking.offense.whoHasDisk')}</p>
                  <p className="text-sm font-bold text-green-300 truncate">
                    {activePlayer?.firstName} {activePlayer?.lastName}
                  </p>
                </div>
              </div>
            </div>

            {/* Who to throw to */}
            <div className="bg-[#0f1117] border border-white/[0.08] rounded-2xl p-4 space-y-3">
              <h2 className="text-base font-bold text-slate-100">
                {t('tracking.offense.threwTo')}
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                {selectedLineup
                  .filter((p) => p.id !== activePasserId)
                  .map((player) => (
                    <button
                      key={player.id}
                      type="button"
                      onClick={() => handleCatch(player.id)}
                      className="flex items-center gap-2.5 p-3 min-h-[64px] rounded-xl border border-white/[0.08] bg-white/[0.02] hover:bg-green-500/10 hover:border-green-500/30 transition-all"
                    >
                      <JerseyBadge number={player.jerseyNumber} />
                      <span className="text-sm font-medium text-slate-200 truncate">
                        {player.firstName} {player.lastName}
                      </span>
                    </button>
                  ))}
              </div>

              {/* GOAL — receiver already caught, click passer to mark as scorer */}
              <button
                type="button"
                onClick={() => handleScore('US')}
                className="w-full py-3 rounded-xl text-sm font-bold bg-green-500 hover:bg-green-400 text-white transition-all shadow-lg shadow-green-500/20"
              >
                🎯 {t('matches.detail.goals')}!
              </button>
            </div>

            {/* Action buttons */}
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={handleThrowaway}
                className="py-3 rounded-xl text-sm font-bold bg-red-500/15 text-red-400 border border-red-500/30 hover:bg-red-500/25 transition-all"
              >
                ❌ {t('tracking.actions.throwaway')}
              </button>
              <button
                type="button"
                onClick={handleUndo}
                disabled={historyStack.length === 0}
                className="py-3 rounded-xl text-sm font-bold bg-white/[0.05] text-slate-400 border border-white/[0.08] hover:bg-white/[0.08] transition-all disabled:opacity-40 disabled:cursor-not-allowed"
              >
                ↩ {t('tracking.actions.undo')}
              </button>
            </div>

            {/* Opponent score */}
            <button
              type="button"
              onClick={handleOpponentScore}
              className="w-full py-3 rounded-xl text-sm font-bold bg-amber-500/15 text-amber-400 border border-amber-500/30 hover:bg-amber-500/25 transition-all"
            >
              ⚠️ {t('tracking.actions.opponentScore')}
            </button>
          </div>
        )}
      </div>

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
