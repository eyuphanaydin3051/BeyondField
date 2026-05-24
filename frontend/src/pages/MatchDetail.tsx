import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import type { AxiosError } from 'axios'
import apiClient from '../lib/apiClient'
import type { MatchDetailResponse } from '../types'

interface ErrorResponse { status: 'error'; message: string }

const ACTION_ICONS: Record<string, string> = {
  GOAL: '🎯', ASSIST: '🤝', BLOCK: '🛡️', THROWAWAY: '❌',
  DROP: '⬇️', CALLAHAN: '⚡', DEFENSE: '🛡️', COMPLETION: '✅',
  OPPONENT_GOAL: '⚠️', SUBSTITUTION: '🔄', PULL_SUCCESS: '🏹',
  PULL_FAIL: '🏹', TIMEOUT_START: '⏸️', POINT_START: '🏁', POINT_END: '🏁',
}

const STATUS_STYLES: Record<string, string> = {
  SCHEDULED:   'bg-blue-500/15 text-blue-300 border-blue-500/25',
  IN_PROGRESS: 'bg-green-500/15 text-green-300 border-green-500/25 animate-pulse',
  FINISHED:    'bg-white/[0.04] text-slate-500 border-white/[0.08]',
}

export default function MatchDetail() {
  const { t, i18n } = useTranslation()
  const { id } = useParams<{ id: string }>()
  const [data, setData] = useState<MatchDetailResponse | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let cancelled = false
    const load = async () => {
      if (!id) return
      setLoading(true); setError(null)
      try {
        const res = await apiClient.get<{ status: 'success'; data: MatchDetailResponse }>(`/api/matches/${id}`)
        if (!cancelled) setData(res.data.data)
      } catch (err) {
        const ax = err as AxiosError<ErrorResponse>
        if (!cancelled) setError(ax.response?.data?.message ?? t('matches.errors.detailFailed'))
      } finally { if (!cancelled) setLoading(false) }
    }
    load()
    return () => { cancelled = true }
  }, [id, t])

  if (loading) return (
    <div className="flex items-center justify-center py-16">
      <div className="w-6 h-6 border-2 border-green-500 border-t-transparent rounded-full animate-spin" />
    </div>
  )
  if (error) return (
    <div className="px-4 py-3 bg-red-500/10 border border-red-500/30 rounded-xl text-red-400 text-center">{error}</div>
  )
  if (!data?.match) return <p className="text-slate-500 text-center py-12">{t('common.noResults')}</p>

  const { match, events, playerStats } = data
  const fmt = (iso: string) =>
    new Date(iso).toLocaleString(i18n.language === 'tr' ? 'tr-TR' : 'en-US', {
      weekday: 'long', day: 'numeric', month: 'long', year: 'numeric', hour: '2-digit', minute: '2-digit',
    })

  const awayName = match.awayTeam?.name ?? match.opponentName ?? '—'

  return (
    <div className="space-y-6 max-w-4xl">
      <div>
        <Link to="/matches" className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-400 hover:text-slate-100 transition-colors">
          ← {t('common.back')}
        </Link>
      </div>

      {/* Score Header */}
      <div className="relative overflow-hidden bg-[#0f1117] border border-white/[0.08] rounded-2xl">
        <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-transparent to-transparent pointer-events-none" />
        <div className="relative px-6 pt-5 pb-2 text-sm text-slate-500 tabular-nums">{fmt(match.matchDate)}</div>
        <div className="relative px-6 pb-6">
          <div className="flex items-center justify-between gap-4">
            <div className="flex-1 min-w-0">
              <div className="text-lg font-bold text-white truncate">{match.homeTeam?.name ?? match.homeTeamId}</div>
              <div className="text-xs text-slate-500 mt-0.5">{t('matches.list.columns.home')}</div>
            </div>
            <div className="text-center flex-shrink-0 px-4">
              <div className="text-5xl font-mono font-black text-white tabular-nums">
                {match.homeScore} <span className="text-slate-700 font-light">–</span> {match.awayScore}
              </div>
            </div>
            <div className="flex-1 min-w-0 text-right">
              <div className="text-lg font-bold text-white truncate">{awayName}</div>
              <div className="text-xs text-slate-500 mt-0.5">{t('matches.list.columns.away')}</div>
            </div>
          </div>

          <div className="mt-5 flex items-center gap-3 flex-wrap">
            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold border ${STATUS_STYLES[match.status] ?? ''}`}>
              {t(`matches.status.${match.status}`)}
            </span>
            {match.tournament && (
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-amber-500/10 border border-amber-500/20 rounded-full text-xs text-amber-300 font-medium">
                🏆 {match.tournament.name}
              </span>
            )}
          </div>

          {!match.finished && (
            <div className="mt-4">
              <Link to={`/matches/${match.id}/track`}
                className="inline-flex items-center gap-2 px-4 py-2 bg-green-500 hover:bg-green-400 text-white rounded-xl font-semibold text-sm transition-all shadow-lg shadow-green-500/20">
                <span className="w-2 h-2 rounded-full bg-white animate-pulse" aria-hidden="true" />
                {t('matches.detail.trackLive')}
              </Link>
            </div>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Events Timeline */}
        <section className="bg-[#0f1117] border border-white/[0.08] rounded-2xl p-5">
          <h2 className="text-base font-bold text-white mb-4 flex items-center gap-2">
            {t('matches.detail.eventsTitle')}
            {events.length > 0 && (
              <span className="px-2 py-0.5 bg-white/[0.06] border border-white/[0.08] rounded-full text-xs text-slate-400 font-mono">{events.length}</span>
            )}
          </h2>
          {events.length === 0 ? (
            <p className="text-slate-500 text-sm">{t('matches.detail.noEvents')}</p>
          ) : (
            <ul className="space-y-1 max-h-80 overflow-y-auto pr-1">
              {events.map((e) => (
                <li key={e.id} className="flex items-center gap-3 py-2 border-b border-white/[0.04] last:border-0">
                  <span className="flex-shrink-0 w-10 h-6 bg-white/[0.06] rounded-md flex items-center justify-center text-xs font-mono text-slate-400 tabular-nums">
                    {e.minute}'
                  </span>
                  <span className="text-base leading-none" aria-hidden="true">{ACTION_ICONS[e.actionType] ?? '•'}</span>
                  <span className="text-sm text-slate-300 font-medium">{e.actionType}</span>
                  {(e.scoreUsAtEvent !== null || e.scoreThemAtEvent !== null) && (
                    <span className="ml-auto text-xs font-mono text-slate-500 tabular-nums">
                      {e.scoreUsAtEvent ?? '-'} – {e.scoreThemAtEvent ?? '-'}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          )}
        </section>

        {/* Player Stats */}
        <section className="bg-[#0f1117] border border-white/[0.08] rounded-2xl p-5">
          <h2 className="text-base font-bold text-white mb-4 flex items-center gap-2">
            {t('matches.detail.statsTitle')}
            {playerStats.length > 0 && (
              <span className="px-2 py-0.5 bg-white/[0.06] border border-white/[0.08] rounded-full text-xs text-slate-400 font-mono">{playerStats.length}</span>
            )}
          </h2>
          {playerStats.length === 0 ? (
            <p className="text-slate-500 text-sm">{t('matches.detail.noStats')}</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="text-slate-500 text-xs uppercase tracking-wider border-b border-white/[0.06]">
                  <tr>
                    <th className="text-left pb-2 pr-3 font-semibold">#</th>
                    <th className="text-left pb-2 font-semibold">{t('matches.detail.player')}</th>
                    <th className="text-right pb-2 px-1 font-semibold text-green-500/70" title={t('matches.detail.goals')}>G</th>
                    <th className="text-right pb-2 px-1 font-semibold text-blue-500/70" title={t('matches.detail.assists')}>A</th>
                    <th className="text-right pb-2 px-1 font-semibold text-amber-500/70" title={t('matches.detail.blocks')}>B</th>
                    <th className="text-right pb-2 px-1 font-semibold text-slate-400" title="+/-">+/-</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/[0.04]">
                  {playerStats.map((s) => (
                    <tr key={s.id} className="hover:bg-white/[0.02] transition-colors">
                      <td className="py-2 pr-3">
                        <span className="inline-flex items-center justify-center w-6 h-6 rounded-md bg-green-500/10 border border-green-500/20 font-mono text-xs font-bold text-green-400">
                          {s.player?.jerseyNumber ?? '—'}
                        </span>
                      </td>
                      <td className="py-2 font-medium text-slate-100">
                        {s.player ? `${s.player.firstName} ${s.player.lastName}` : s.playerId.slice(0, 8)}
                      </td>
                      <td className="py-2 text-right font-mono px-1 text-green-400 tabular-nums">{s.goals || '—'}</td>
                      <td className="py-2 text-right font-mono px-1 text-blue-400 tabular-nums">{s.assists || '—'}</td>
                      <td className="py-2 text-right font-mono px-1 text-amber-400 tabular-nums">{s.blocks || '—'}</td>
                      <td className={`py-2 text-right font-mono px-1 tabular-nums ${s.plusMinus > 0 ? 'text-green-400' : s.plusMinus < 0 ? 'text-red-400' : 'text-slate-500'}`}>
                        {s.plusMinus > 0 ? `+${s.plusMinus}` : s.plusMinus}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>
      </div>
    </div>
  )
}
