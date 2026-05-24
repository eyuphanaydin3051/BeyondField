import { useCallback, useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import type { AxiosError } from 'axios'
import apiClient from '../lib/apiClient'
import { useAppStore } from '../store/appStore'
import type { Match, MatchPlayerStat, Player, PlayerPosition, Tournament } from '../types'

interface ErrorResponse { status: 'error'; message: string }

interface TournamentDetailData {
  tournament: Tournament
  matches: Match[]
  roster: Player[]
  playerStats: MatchPlayerStat[]
}

type ActiveTab = 'matches' | 'stats' | 'roster'
type SortDir = 'asc' | 'desc'
type StatColumn = 'jerseyNumber' | 'name' | 'pointsPlayed' | 'goals' | 'assists' | 'blocks' | 'throwaways' | 'drops' | 'callahans'

interface AggregatedStat {
  playerId: string
  jerseyNumber: number
  firstName: string
  lastName: string
  position: PlayerPosition
  pointsPlayed: number
  goals: number
  assists: number
  blocks: number
  throwaways: number
  drops: number
  callahans: number
}

const STATUS_STYLES: Record<string, string> = {
  SCHEDULED:   'bg-blue-500/15 text-blue-300 border-blue-500/25',
  IN_PROGRESS: 'bg-green-500/15 text-green-300 border-green-500/25 animate-pulse',
  FINISHED:    'bg-white/[0.04] text-slate-500 border-white/[0.08]',
}

const POSITION_COLORS: Record<PlayerPosition, string> = {
  HANDLER: 'bg-blue-500/15 text-blue-300 border-blue-500/25',
  CUTTER:  'bg-green-500/15 text-green-300 border-green-500/25',
  HYBRID:  'bg-amber-500/15 text-amber-300 border-amber-500/25',
}

function matchResultStrip(m: Match): string {
  if (m.status !== 'FINISHED') return 'bg-slate-700/60'
  if (m.homeScore > m.awayScore) return 'bg-green-500'
  if (m.homeScore < m.awayScore) return 'bg-red-500'
  return 'bg-slate-500'
}

export default function TournamentDetail() {
  const { t, i18n } = useTranslation()
  const { id: tournamentId } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const teamId = useAppStore((s) => s.selectedTeam?.id)

  const [data, setData] = useState<TournamentDetailData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [activeTab, setActiveTab] = useState<ActiveTab>('matches')

  // New match modal
  const [showMatchModal, setShowMatchModal] = useState(false)
  const [opponentName, setOpponentName] = useState('')
  const [creating, setCreating] = useState(false)
  const [createError, setCreateError] = useState<string | null>(null)

  // Stats table sort
  const [sortCol, setSortCol] = useState<StatColumn>('goals')
  const [sortDir, setSortDir] = useState<SortDir>('desc')

  const load = useCallback(async () => {
    if (!tournamentId) return
    setLoading(true); setError(null)
    try {
      const res = await apiClient.get<{ status: 'success'; data: TournamentDetailData }>(
        `/api/tournaments/${tournamentId}`
      )
      setData(res.data.data)
    } catch (err) {
      const ax = err as AxiosError<ErrorResponse>
      setError(ax.response?.data?.message ?? t('tournaments.errors.loadFailed'))
    } finally { setLoading(false) }
  }, [tournamentId, t])

  useEffect(() => { load() }, [load])

  const fmtDate = (iso: string) =>
    new Date(iso).toLocaleDateString(i18n.language === 'tr' ? 'tr-TR' : 'en-US', {
      day: 'numeric', month: 'short', year: 'numeric',
    })

  const getStatus = (tr: Tournament) => {
    const now = Date.now()
    const start = new Date(tr.startDate).getTime()
    const end = tr.endDate ? new Date(tr.endDate).getTime() : null
    if (now < start) return 'upcoming'
    if (end && now > end) return 'past'
    return 'active'
  }

  const statusStyle: Record<string, string> = {
    upcoming: 'bg-blue-500/15 text-blue-300 border-blue-500/25',
    active:   'bg-green-500/15 text-green-300 border-green-500/25',
    past:     'bg-white/[0.04] text-slate-500 border-white/[0.08]',
  }
  const statusLabel: Record<string, string> = {
    upcoming: t('tournaments.status.upcoming'),
    active:   t('tournaments.status.active'),
    past:     t('tournaments.status.past'),
  }

  const handleCreateMatch = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!teamId || !tournamentId || !opponentName.trim()) return
    setCreating(true); setCreateError(null)
    try {
      const res = await apiClient.post<{ status: 'success'; data: { id: string } }>(
        `/api/teams/${teamId}/matches`,
        {
          homeTeamId: teamId,
          opponentName: opponentName.trim(),
          tournamentId,
          matchDate: new Date().toISOString(),
        }
      )
      navigate(`/matches/${res.data.data.id}/track`)
    } catch (err) {
      const ax = err as AxiosError<ErrorResponse>
      setCreateError(ax.response?.data?.message ?? t('matches.errors.createFailed'))
    } finally { setCreating(false) }
  }

  const openMatchModal = () => {
    setOpponentName(''); setCreateError(null); setShowMatchModal(true)
  }
  const closeMatchModal = () => { setShowMatchModal(false); setCreateError(null) }

  const handleSortCol = (col: StatColumn) => {
    if (sortCol === col) {
      setSortDir((d) => (d === 'asc' ? 'desc' : 'asc'))
    } else {
      setSortCol(col)
      setSortDir('desc')
    }
  }

  // Aggregate playerStats by player across all matches in this tournament
  const aggregatedStats: AggregatedStat[] = (() => {
    if (!data?.playerStats) return []
    const map = new Map<string, AggregatedStat>()
    for (const s of data.playerStats) {
      if (!s.player) continue
      const existing = map.get(s.playerId)
      if (existing) {
        existing.pointsPlayed += s.pointsPlayed
        existing.goals += s.goals
        existing.assists += s.assists
        existing.blocks += s.blocks
        existing.throwaways += s.throwaways
        existing.drops += s.drops
        existing.callahans += s.callahans
      } else {
        map.set(s.playerId, {
          playerId: s.playerId,
          jerseyNumber: s.player.jerseyNumber,
          firstName: s.player.firstName,
          lastName: s.player.lastName,
          position: 'HANDLER', // position comes from roster, not stats — fallback
          pointsPlayed: s.pointsPlayed,
          goals: s.goals,
          assists: s.assists,
          blocks: s.blocks,
          throwaways: s.throwaways,
          drops: s.drops,
          callahans: s.callahans,
        })
      }
    }
    // Enrich with position from roster data
    if (data.roster) {
      for (const p of data.roster) {
        const row = map.get(p.id)
        if (row) row.position = p.position
      }
    }
    const rows = Array.from(map.values())

    // Sort
    rows.sort((a, b) => {
      let av: number | string = 0
      let bv: number | string = 0
      if (sortCol === 'name') {
        av = `${a.firstName} ${a.lastName}`
        bv = `${b.firstName} ${b.lastName}`
      } else if (sortCol === 'jerseyNumber') {
        av = a.jerseyNumber; bv = b.jerseyNumber
      } else {
        av = a[sortCol] as number
        bv = b[sortCol] as number
      }
      if (av < bv) return sortDir === 'asc' ? -1 : 1
      if (av > bv) return sortDir === 'asc' ? 1 : -1
      return 0
    })
    return rows
  })()

  // Summary counts (display only — data comes from API)
  const wins   = data?.matches.filter((m) => m.status === 'FINISHED' && m.homeScore > m.awayScore).length ?? 0
  const losses = data?.matches.filter((m) => m.status === 'FINISHED' && m.homeScore < m.awayScore).length ?? 0
  const pointDiff = data?.matches.reduce((acc, m) => acc + (m.homeScore - m.awayScore), 0) ?? 0

  // ── Loading / Error / Empty states ──────────────────────────────────────────
  if (loading) return (
    <div className="flex items-center justify-center py-16">
      <div className="w-6 h-6 border-2 border-green-500 border-t-transparent rounded-full animate-spin" />
    </div>
  )
  if (error) return (
    <div className="px-4 py-3 bg-red-500/10 border border-red-500/30 rounded-xl text-red-400 text-center">{error}</div>
  )
  if (!data?.tournament) return (
    <p className="text-slate-500 text-center py-12">{t('common.noResults')}</p>
  )

  const { tournament, matches, roster } = data
  const status = getStatus(tournament)

  const SortIcon = ({ col }: { col: StatColumn }) => {
    if (sortCol !== col) return <span className="text-slate-700 ml-0.5">↕</span>
    return <span className="text-green-400 ml-0.5">{sortDir === 'asc' ? '↑' : '↓'}</span>
  }

  return (
    <div className="space-y-6 max-w-5xl">

      {/* Back link */}
      <div>
        <Link
          to="/tournaments"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-400 hover:text-slate-100 transition-colors"
        >
          ← {t('tournaments.list.title')}
        </Link>
      </div>

      {/* Header card */}
      <div className="relative overflow-hidden bg-[#0f1117] border border-white/[0.08] rounded-2xl">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 via-transparent to-transparent pointer-events-none" />
        <div className="relative px-6 py-5">
          <div className="flex items-start justify-between gap-4 flex-wrap">
            <div className="flex items-center gap-3 min-w-0">
              <span className="text-2xl flex-shrink-0" aria-hidden="true">🏆</span>
              <h1 className="text-xl font-bold text-white leading-tight truncate">{tournament.name}</h1>
            </div>
            <button
              type="button"
              onClick={openMatchModal}
              className="flex items-center gap-2 px-4 py-2 bg-green-500 hover:bg-green-400 text-white rounded-xl font-semibold text-sm transition-all shadow-lg shadow-green-500/20 flex-shrink-0"
            >
              <span aria-hidden="true">+</span>
              {t('tournamentDetail.newMatch.button')}
            </button>
          </div>

          <div className="mt-4 space-y-1.5 text-sm text-slate-400">
            <div className="flex items-center gap-2">
              <span className="text-slate-600 text-base" aria-hidden="true">📅</span>
              <span>
                {fmtDate(tournament.startDate)}
                {tournament.endDate && ` — ${fmtDate(tournament.endDate)}`}
              </span>
            </div>
            {tournament.location && (
              <div className="flex items-center gap-2">
                <span className="text-slate-600 text-base" aria-hidden="true">📍</span>
                <span>{tournament.location}</span>
              </div>
            )}
          </div>

          <div className="mt-4">
            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold border ${statusStyle[status]}`}>
              {statusLabel[status]}
            </span>
          </div>
        </div>
      </div>

      {/* Tab nav */}
      <div className="flex gap-2" role="tablist" aria-label={tournament.name}>
        {(['matches', 'stats', 'roster'] as ActiveTab[]).map((tab) => (
          <button
            key={tab}
            type="button"
            role="tab"
            aria-selected={activeTab === tab}
            onClick={() => setActiveTab(tab)}
            className={[
              'px-4 py-2 rounded-xl text-sm font-semibold border transition-all duration-150',
              activeTab === tab
                ? 'bg-green-500/20 text-green-400 border-green-500/40'
                : 'bg-white/[0.04] text-slate-400 border-white/[0.06] hover:border-white/[0.12] hover:text-slate-300',
            ].join(' ')}
          >
            {t(`tournamentDetail.tabs.${tab}`)}
          </button>
        ))}
      </div>

      {/* ── Tab: Matches ──────────────────────────────────────────────────────── */}
      {activeTab === 'matches' && (
        <div role="tabpanel">
          {matches.length === 0 ? (
            <div className="py-16 text-center bg-[#0f1117] border border-white/[0.08] rounded-2xl">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-white/[0.04] border border-white/[0.08] text-2xl mb-4" aria-hidden="true">🥏</div>
              <p className="text-slate-500 text-sm mb-4">{t('tournamentDetail.matches.empty')}</p>
              <button
                type="button"
                onClick={openMatchModal}
                className="px-4 py-2 bg-green-500 hover:bg-green-400 text-white rounded-xl font-semibold text-sm transition-colors shadow-lg shadow-green-500/20"
              >
                {t('tournamentDetail.newMatch.button')}
              </button>
            </div>
          ) : (
            <div className="space-y-2">
              {matches.map((m) => {
                const opponent = m.awayTeam?.name ?? m.opponentName ?? '—'
                return (
                  <div
                    key={m.id}
                    onClick={() => navigate(`/matches/${m.id}`)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => e.key === 'Enter' && navigate(`/matches/${m.id}`)}
                    className="relative overflow-hidden bg-[#0f1117] border border-white/[0.08] hover:border-white/[0.16] rounded-2xl flex items-center gap-0 cursor-pointer transition-all duration-200 group"
                    aria-label={`${opponent} maçı`}
                  >
                    {/* Win/loss strip */}
                    <div className={`w-1.5 self-stretch flex-shrink-0 rounded-l-2xl ${matchResultStrip(m)}`} aria-hidden="true" />

                    <div className="flex items-center justify-between gap-4 flex-1 px-5 py-4">
                      <div className="flex items-center gap-4 min-w-0">
                        <div className="min-w-0">
                          <div className="font-semibold text-white text-sm leading-snug">
                            {t('matches.list.columns.away')}: <span className="text-slate-200">{opponent}</span>
                          </div>
                          <div className="text-xs text-slate-500 tabular-nums mt-0.5">
                            {new Date(m.matchDate).toLocaleDateString(i18n.language === 'tr' ? 'tr-TR' : 'en-US', {
                              day: 'numeric', month: 'short', year: 'numeric',
                            })}
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-4 flex-shrink-0">
                        <span className="font-mono font-black text-xl text-white tabular-nums">
                          {m.homeScore}
                          <span className="text-slate-700 font-light mx-1">–</span>
                          {m.awayScore}
                        </span>
                        <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold border ${STATUS_STYLES[m.status] ?? ''}`}>
                          {t(`matches.status.${m.status}`)}
                        </span>
                        <span className="text-slate-600 group-hover:text-slate-400 transition-colors text-sm" aria-hidden="true">→</span>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          )}
        </div>
      )}

      {/* ── Tab: Stats ────────────────────────────────────────────────────────── */}
      {activeTab === 'stats' && (
        <div role="tabpanel" className="space-y-4">
          {/* Summary cards */}
          <div className="grid grid-cols-3 gap-3">
            {[
              { label: t('tournamentDetail.stats.wins'),      value: wins,      color: 'text-green-400' },
              { label: t('tournamentDetail.stats.losses'),    value: losses,    color: 'text-red-400' },
              { label: t('tournamentDetail.stats.pointDiff'), value: pointDiff > 0 ? `+${pointDiff}` : pointDiff, color: pointDiff > 0 ? 'text-green-400' : pointDiff < 0 ? 'text-red-400' : 'text-slate-400' },
            ].map((card) => (
              <div key={card.label} className="bg-[#0f1117] border border-white/[0.08] rounded-2xl p-4 text-center">
                <div className={`text-3xl font-black font-mono tabular-nums ${card.color}`}>{card.value}</div>
                <div className="text-xs text-slate-500 font-semibold uppercase tracking-wider mt-1">{card.label}</div>
              </div>
            ))}
          </div>

          {aggregatedStats.length === 0 ? (
            <div className="py-12 text-center bg-[#0f1117] border border-white/[0.08] rounded-2xl">
              <p className="text-slate-500 text-sm">{t('tournamentDetail.stats.noStats')}</p>
            </div>
          ) : (
            <div className="bg-[#0f1117] border border-white/[0.08] rounded-2xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-sm" aria-label={t('tournamentDetail.tabs.stats')}>
                  <thead className="text-slate-500 text-xs uppercase tracking-wider border-b border-white/[0.06] bg-white/[0.02]">
                    <tr>
                      {([
                        ['jerseyNumber', '#'],
                        ['name', t('tournamentDetail.stats.columns.player')],
                        ['pointsPlayed', t('tournamentDetail.stats.columns.points')],
                        ['goals',        t('tournamentDetail.stats.columns.goals')],
                        ['assists',      t('tournamentDetail.stats.columns.assists')],
                        ['blocks',       t('tournamentDetail.stats.columns.blocks')],
                        ['throwaways',   t('tournamentDetail.stats.columns.throwaways')],
                        ['drops',        t('tournamentDetail.stats.columns.drops')],
                        ['callahans',    t('tournamentDetail.stats.columns.callahans')],
                      ] as [StatColumn, string][]).map(([col, label]) => (
                        <th
                          key={col}
                          className={[
                            'px-3 py-3 font-semibold cursor-pointer hover:text-slate-300 transition-colors select-none whitespace-nowrap',
                            col === 'jerseyNumber' ? 'text-center w-10' : col === 'name' ? 'text-left' : 'text-right',
                          ].join(' ')}
                          onClick={() => handleSortCol(col)}
                          aria-sort={sortCol === col ? (sortDir === 'asc' ? 'ascending' : 'descending') : 'none'}
                        >
                          {label}<SortIcon col={col} />
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/[0.04]">
                    {aggregatedStats.map((s) => (
                      <tr key={s.playerId} className="hover:bg-white/[0.02] transition-colors">
                        <td className="px-3 py-2.5 text-center">
                          <span className="inline-flex items-center justify-center w-7 h-7 rounded-lg bg-green-500/10 border border-green-500/20 font-mono text-xs font-bold text-green-400">
                            {s.jerseyNumber}
                          </span>
                        </td>
                        <td className="px-3 py-2.5 font-medium text-slate-100 whitespace-nowrap">
                          {s.firstName} {s.lastName}
                        </td>
                        <td className="px-3 py-2.5 text-right font-mono tabular-nums text-slate-400">{s.pointsPlayed || '—'}</td>
                        <td className="px-3 py-2.5 text-right font-mono tabular-nums text-green-400 font-semibold">{s.goals || '—'}</td>
                        <td className="px-3 py-2.5 text-right font-mono tabular-nums text-blue-400">{s.assists || '—'}</td>
                        <td className="px-3 py-2.5 text-right font-mono tabular-nums text-amber-400">{s.blocks || '—'}</td>
                        <td className="px-3 py-2.5 text-right font-mono tabular-nums text-red-400">{s.throwaways || '—'}</td>
                        <td className="px-3 py-2.5 text-right font-mono tabular-nums text-slate-500">{s.drops || '—'}</td>
                        <td className="px-3 py-2.5 text-right font-mono tabular-nums text-purple-400">{s.callahans || '—'}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      )}

      {/* ── Tab: Roster ───────────────────────────────────────────────────────── */}
      {activeTab === 'roster' && (
        <div role="tabpanel">
          {roster.length === 0 ? (
            <div className="py-12 text-center bg-[#0f1117] border border-white/[0.08] rounded-2xl">
              <p className="text-slate-500 text-sm">{t('tournamentDetail.roster.empty')}</p>
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {roster.map((p) => (
                <div
                  key={p.id}
                  className="bg-[#0f1117] border border-white/[0.08] hover:border-white/[0.14] rounded-2xl p-4 flex flex-col items-center gap-3 transition-all duration-200"
                >
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-green-500/10 border border-green-500/20 font-mono text-base font-black text-green-400">
                    {p.jerseyNumber}
                  </span>
                  <div className="text-center min-w-0 w-full">
                    <div className="font-semibold text-sm text-white leading-snug truncate">
                      {p.firstName} {p.lastName}
                    </div>
                  </div>
                  <span className={`px-2 py-0.5 rounded-full text-xs font-semibold border ${POSITION_COLORS[p.position]}`}>
                    {t(`roster.positions.${p.position}`)}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* ── New Match Modal ───────────────────────────────────────────────────── */}
      {showMatchModal && (
        <div
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center px-4"
          onClick={closeMatchModal}
        >
          <div
            className="bg-[#0f1117] border border-white/[0.08] rounded-2xl shadow-2xl w-full max-w-sm p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-lg font-bold text-white mb-5">{t('tournamentDetail.newMatch.title')}</h2>

            {createError && (
              <div className="mb-4 px-4 py-3 bg-red-500/10 border border-red-500/30 rounded-xl text-red-400 text-sm text-center">
                {createError}
              </div>
            )}

            <form onSubmit={handleCreateMatch} className="space-y-4">
              <label className="block">
                <span className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                  {t('tournamentDetail.newMatch.opponentLabel')}
                </span>
                <input
                  required
                  value={opponentName}
                  onChange={(e) => setOpponentName(e.target.value)}
                  placeholder={t('tournamentDetail.newMatch.opponentPlaceholder')}
                  className="field-input"
                  autoFocus
                />
              </label>

              <div className="flex gap-3 pt-1">
                <button
                  type="button"
                  onClick={closeMatchModal}
                  disabled={creating}
                  className="flex-1 py-2.5 bg-white/[0.06] hover:bg-white/[0.09] text-slate-300 font-medium rounded-xl disabled:opacity-50 transition-colors"
                >
                  {t('common.cancel')}
                </button>
                <button
                  type="submit"
                  disabled={creating || !opponentName.trim()}
                  className="flex-1 py-2.5 bg-green-500 hover:bg-green-400 disabled:bg-green-900 disabled:text-green-600 text-white rounded-xl font-semibold transition-all shadow-lg shadow-green-500/20"
                >
                  {creating ? t('tournamentDetail.newMatch.creating') : t('tournamentDetail.newMatch.create')}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
