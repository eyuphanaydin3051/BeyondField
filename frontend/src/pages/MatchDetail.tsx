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
  SCHEDULED: 'bg-blue-500/20 text-blue-300 border-blue-500/30',
  IN_PROGRESS: 'bg-green-500/20 text-green-300 border-green-500/30 animate-pulse',
  FINISHED: 'bg-gray-700/40 text-gray-400 border-gray-600/30',
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

  if (loading) return <p className="text-gray-400 text-center py-12">{t('common.loading')}</p>
  if (error) return (
    <div className="px-4 py-3 bg-red-900/40 border border-red-700/60 rounded-lg text-red-400 text-center">{error}</div>
  )
  if (!data?.match) return <p className="text-gray-500 text-center py-12">{t('common.noResults')}</p>

  const { match, events, playerStats } = data
  const fmt = (iso: string) =>
    new Date(iso).toLocaleString(i18n.language === 'tr' ? 'tr-TR' : 'en-US', {
      weekday: 'long', day: 'numeric', month: 'long', year: 'numeric', hour: '2-digit', minute: '2-digit',
    })

  const awayName = match.awayTeam?.name ?? match.opponentName ?? '—'

  return (
    <div className="space-y-6 max-w-4xl">
      <div>
        <Link to="/matches" className="inline-flex items-center gap-1 text-sm text-violet-400 hover:text-white transition-colors">
          ← {t('common.back')}
        </Link>
      </div>

      {/* Score Header */}
      <div className="bg-gradient-to-br from-gray-900 to-gray-950 border border-gray-800 rounded-2xl overflow-hidden">
        <div className="px-6 pt-6 pb-2 text-sm text-gray-500">{fmt(match.matchDate)}</div>
        <div className="px-6 pb-6">
          <div className="flex items-center justify-between gap-4">
            <div className="flex-1">
              <div className="text-lg font-bold text-white truncate">{match.homeTeam?.name ?? match.homeTeamId}</div>
              <div className="text-xs text-gray-500 mt-0.5">{t('matches.list.columns.home')}</div>
            </div>
            <div className="text-center flex-shrink-0">
              <div className="text-5xl font-mono font-black text-white">
                {match.homeScore} <span className="text-gray-600 font-light">–</span> {match.awayScore}
              </div>
            </div>
            <div className="flex-1 text-right">
              <div className="text-lg font-bold text-white truncate">{awayName}</div>
              <div className="text-xs text-gray-500 mt-0.5">{t('matches.list.columns.away')}</div>
            </div>
          </div>

          <div className="mt-4 flex items-center gap-3 flex-wrap">
            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${STATUS_STYLES[match.status] ?? ''}`}>
              {t(`matches.status.${match.status}`)}
            </span>
            {match.tournament && (
              <span className="px-2.5 py-0.5 bg-violet-900/30 border border-violet-700/30 rounded-full text-xs text-violet-300">
                🏆 {match.tournament.name}
              </span>
            )}
          </div>

          {!match.finished && (
            <div className="mt-4">
              <Link to={`/matches/${match.id}/track`}
                className="inline-flex items-center gap-2 px-4 py-2 bg-violet-600 hover:bg-violet-500 text-white rounded-lg font-semibold text-sm transition-colors">
                🔴 {t('matches.detail.trackLive')}
              </Link>
            </div>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Events Timeline */}
        <section className="bg-gray-900 border border-gray-800 rounded-2xl p-5">
          <h2 className="font-bold mb-4 flex items-center gap-2">
            {t('matches.detail.eventsTitle')}
            {events.length > 0 && (
              <span className="px-2 py-0.5 bg-gray-800 rounded-full text-xs text-gray-400 font-mono">{events.length}</span>
            )}
          </h2>
          {events.length === 0 ? (
            <p className="text-gray-500 text-sm">{t('matches.detail.noEvents')}</p>
          ) : (
            <ul className="space-y-2 max-h-80 overflow-y-auto pr-1">
              {events.map((e) => (
                <li key={e.id} className="flex items-center gap-3 py-2 border-b border-gray-800/60 last:border-0">
                  <span className="flex-shrink-0 w-10 h-6 bg-gray-800 rounded-md flex items-center justify-center text-xs font-mono text-gray-400">
                    {e.minute}'
                  </span>
                  <span className="text-base">{ACTION_ICONS[e.actionType] ?? '•'}</span>
                  <span className="text-sm text-gray-300">{e.actionType}</span>
                  {(e.scoreUsAtEvent !== null || e.scoreThemAtEvent !== null) && (
                    <span className="ml-auto text-xs font-mono text-gray-500">
                      {e.scoreUsAtEvent ?? '-'} – {e.scoreThemAtEvent ?? '-'}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          )}
        </section>

        {/* Player Stats */}
        <section className="bg-gray-900 border border-gray-800 rounded-2xl p-5">
          <h2 className="font-bold mb-4 flex items-center gap-2">
            {t('matches.detail.statsTitle')}
            {playerStats.length > 0 && (
              <span className="px-2 py-0.5 bg-gray-800 rounded-full text-xs text-gray-400 font-mono">{playerStats.length}</span>
            )}
          </h2>
          {playerStats.length === 0 ? (
            <p className="text-gray-500 text-sm">{t('matches.detail.noStats')}</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="text-gray-500 text-xs uppercase tracking-wider">
                  <tr>
                    <th className="text-left py-1.5 pr-3">#</th>
                    <th className="text-left py-1.5">Player</th>
                    <th className="text-right py-1.5 px-1">G</th>
                    <th className="text-right py-1.5 px-1">A</th>
                    <th className="text-right py-1.5 px-1">B</th>
                    <th className="text-right py-1.5 px-1">+/-</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-800">
                  {playerStats.map((s) => (
                    <tr key={s.id} className="hover:bg-gray-800/30 transition-colors">
                      <td className="py-2 pr-3">
                        <span className="inline-flex items-center justify-center w-6 h-6 rounded-md bg-gray-800 font-mono text-xs text-gray-400">
                          {s.player?.jerseyNumber ?? '—'}
                        </span>
                      </td>
                      <td className="py-2 font-medium">
                        {s.player ? `${s.player.firstName} ${s.player.lastName}` : s.playerId.slice(0, 8)}
                      </td>
                      <td className="py-2 text-right font-mono px-1 text-green-400">{s.goals || '—'}</td>
                      <td className="py-2 text-right font-mono px-1 text-blue-400">{s.assists || '—'}</td>
                      <td className="py-2 text-right font-mono px-1 text-violet-400">{s.blocks || '—'}</td>
                      <td className={`py-2 text-right font-mono px-1 ${s.plusMinus > 0 ? 'text-green-400' : s.plusMinus < 0 ? 'text-red-400' : 'text-gray-500'}`}>
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
