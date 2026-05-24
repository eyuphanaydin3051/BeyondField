import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import type { AxiosError } from 'axios'
import apiClient from '../lib/apiClient'
import type { MatchDetailResponse } from '../types'

interface ErrorResponse {
  status: 'error'
  message: string
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
      setLoading(true)
      setError(null)
      try {
        const res = await apiClient.get<{
          status: 'success'
          data: MatchDetailResponse
        }>(`/api/matches/${id}`)
        if (!cancelled) setData(res.data.data)
      } catch (err) {
        const ax = err as AxiosError<ErrorResponse>
        if (!cancelled)
          setError(ax.response?.data?.message ?? t('matches.errors.detailFailed'))
      } finally {
        if (!cancelled) setLoading(false)
      }
    }
    load()
    return () => {
      cancelled = true
    }
  }, [id, t])

  if (loading) return <p className="text-gray-400 text-center py-12">{t('common.loading')}</p>
  if (error)
    return (
      <div className="px-4 py-3 bg-red-900/40 border border-red-700/60 rounded-lg text-red-400 text-center">
        {error}
      </div>
    )
  if (!data || !data.match) return <p className="text-gray-500 text-center py-12">{t('common.noResults')}</p>

  const { match, events, playerStats } = data
  const fmt = (iso: string) =>
    new Date(iso).toLocaleString(i18n.language === 'tr' ? 'tr-TR' : 'en-US')

  return (
    <div className="space-y-6">
      <div>
        <Link to="/matches" className="text-sm text-violet-300 hover:text-white">
          {'< '}
          {t('common.back')}
        </Link>
      </div>

      <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
        <div className="text-sm text-gray-400 mb-2">{fmt(match.matchDate)}</div>
        <div className="flex items-center justify-between gap-4">
          <div className="text-xl font-semibold truncate">
            {match.homeTeam?.name ?? match.homeTeamId}
          </div>
          <div className="text-3xl font-mono font-bold">
            {match.homeScore} – {match.awayScore}
          </div>
          <div className="text-xl font-semibold truncate text-right">
            {match.awayTeam?.name ?? match.awayTeamId}
          </div>
        </div>
        <div className="mt-3 flex items-center gap-3 text-sm text-gray-500">
          <span>{t(`matches.status.${match.status}`)}</span>
          {match.tournament && <span>· {match.tournament.name}</span>}
        </div>
        {!match.finished && (
          <div className="mt-4">
            <Link
              to={`/matches/${match.id}/track`}
              className="inline-block px-4 py-2 bg-violet-600 hover:bg-violet-500 text-white rounded-lg font-semibold"
            >
              {t('matches.detail.trackLive')}
            </Link>
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <section className="bg-gray-900 border border-gray-800 rounded-2xl p-5">
          <h2 className="font-bold mb-3">{t('matches.detail.eventsTitle')}</h2>
          {events.length === 0 ? (
            <p className="text-gray-500 text-sm">{t('matches.detail.noEvents')}</p>
          ) : (
            <ul className="space-y-2 text-sm">
              {events.map((e) => (
                <li key={e.id} className="flex justify-between border-b border-gray-800 pb-1">
                  <span>
                    {e.minute}' · {e.actionType}
                  </span>
                  <span className="text-gray-500">{e.playerId.slice(0, 6)}</span>
                </li>
              ))}
            </ul>
          )}
        </section>

        <section className="bg-gray-900 border border-gray-800 rounded-2xl p-5">
          <h2 className="font-bold mb-3">{t('matches.detail.statsTitle')}</h2>
          {playerStats.length === 0 ? (
            <p className="text-gray-500 text-sm">{t('matches.detail.noStats')}</p>
          ) : (
            <table className="w-full text-sm">
              <thead className="text-gray-400">
                <tr>
                  <th className="text-left py-1">#</th>
                  <th className="text-left py-1">Player</th>
                  <th className="text-right py-1">G</th>
                  <th className="text-right py-1">A</th>
                  <th className="text-right py-1">B</th>
                </tr>
              </thead>
              <tbody>
                {playerStats.map((s) => (
                  <tr key={s.id} className="border-t border-gray-800">
                    <td className="py-1 font-mono">{s.player?.jerseyNumber ?? '-'}</td>
                    <td className="py-1">
                      {s.player ? `${s.player.firstName} ${s.player.lastName}` : s.playerId}
                    </td>
                    <td className="py-1 text-right font-mono">{s.goals}</td>
                    <td className="py-1 text-right font-mono">{s.assists}</td>
                    <td className="py-1 text-right font-mono">{s.blocks}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </section>
      </div>
    </div>
  )
}
