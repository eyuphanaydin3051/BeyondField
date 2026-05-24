import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import type { AxiosError } from 'axios'
import apiClient from '../lib/apiClient'

interface ErrorResponse { status: 'error'; message: string }

interface CareerTotalStats {
  goals: number
  assists: number
  blocks: number
  callahans: number
  throwaways: number
  drops: number
  completions: number
  plusMinus: number
}

interface CareerPerMatch {
  goals: number
  assists: number
  blocks: number
}

interface TeamAverages {
  goals: number
  assists: number
  blocks: number
}

interface PassNetworkEntry {
  toPlayerId: string
  toPlayerName: string
  jerseyNumber: number
  count: number
}

interface CareerData {
  player: {
    id: string
    firstName: string
    lastName: string
    jerseyNumber: number
    position: string
    photoUrl?: string | null
  }
  totalStats: CareerTotalStats
  perMatch: CareerPerMatch
  teamAverages?: TeamAverages
}

export default function PlayerDetail() {
  const { t } = useTranslation()
  const { id } = useParams<{ id: string }>()
  const [career, setCareer] = useState<CareerData | null>(null)
  const [passNetwork, setPassNetwork] = useState<PassNetworkEntry[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!id) return
    let cancelled = false
    const load = async () => {
      setLoading(true)
      setError(null)
      try {
        const [careerRes, networkRes] = await Promise.all([
          apiClient.get<{ status: 'success'; data: CareerData }>(`/api/players/${id}/career`),
          apiClient.get<{ status: 'success'; data: PassNetworkEntry[] }>(`/api/players/${id}/pass-network`),
        ])
        if (!cancelled) {
          setCareer(careerRes.data.data)
          setPassNetwork(networkRes.data.data ?? [])
        }
      } catch (err) {
        const ax = err as AxiosError<ErrorResponse>
        if (!cancelled) setError(ax.response?.data?.message ?? t('player.error'))
      } finally {
        if (!cancelled) setLoading(false)
      }
    }
    load()
    return () => { cancelled = true }
  }, [id, t])

  if (loading) {
    return (
      <div className="flex items-center justify-center py-16">
        <div className="w-6 h-6 border-2 border-green-500 border-t-transparent rounded-full animate-spin" />
      </div>
    )
  }

  if (error) {
    return (
      <div className="px-4 py-3 bg-red-500/10 border border-red-500/30 rounded-xl text-red-400 text-center">
        {error}
      </div>
    )
  }

  if (!career) {
    return (
      <p className="text-slate-500 text-center py-12">{t('common.noResults')}</p>
    )
  }

  const { player, totalStats, perMatch, teamAverages } = career

  const initials = `${player.firstName.charAt(0)}${player.lastName.charAt(0)}`.toUpperCase()

  const maxPassCount = passNetwork.length > 0
    ? Math.max(...passNetwork.map((p) => p.count))
    : 1

  const plusMinusColor =
    totalStats.plusMinus > 0
      ? 'text-green-400'
      : totalStats.plusMinus < 0
        ? 'text-red-400'
        : 'text-slate-400'

  const kpiCards = [
    { label: t('player.stats.goals'),        value: totalStats.goals,        color: 'text-white' },
    { label: t('player.stats.assists'),      value: totalStats.assists,      color: 'text-white' },
    { label: t('player.stats.blocks'),       value: totalStats.blocks,       color: 'text-white' },
    { label: t('player.stats.callahans'),    value: totalStats.callahans,    color: 'text-white' },
    { label: t('player.stats.throwaways'),   value: totalStats.throwaways,   color: 'text-red-400' },
    { label: t('player.stats.drops'),        value: totalStats.drops,        color: 'text-red-400' },
    { label: t('player.stats.completions'),  value: totalStats.completions,  color: 'text-white' },
    { label: t('player.stats.plusMinus'),    value: totalStats.plusMinus,    color: plusMinusColor },
  ] as const

  const perMatchCards = [
    { label: `${t('player.stats.goals')} / ${t('player.stats.perMatch')}`,   value: perMatch.goals },
    { label: `${t('player.stats.assists')} / ${t('player.stats.perMatch')}`, value: perMatch.assists },
    { label: `${t('player.stats.blocks')} / ${t('player.stats.perMatch')}`,  value: perMatch.blocks },
  ] as const

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <Link
          to="/roster"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-400 hover:text-slate-100 transition-colors mb-4"
        >
          {t('player.back')}
        </Link>

        <div className="bg-[#0f1117] border border-white/[0.08] rounded-2xl p-6">
          <div className="flex items-center gap-5">
            {player.photoUrl ? (
              <img
                src={player.photoUrl}
                alt={`${player.firstName} ${player.lastName}`}
                className="w-20 h-20 rounded-2xl object-cover border border-white/[0.08] flex-shrink-0"
              />
            ) : (
              <div className="w-20 h-20 rounded-2xl bg-green-500/10 border border-green-500/20 flex items-center justify-center flex-shrink-0">
                <span className="text-2xl font-bold text-green-400 select-none">{initials}</span>
              </div>
            )}
            <div className="min-w-0">
              <h1 className="text-2xl font-bold text-white tracking-tight">
                {player.firstName} {player.lastName}
              </h1>
              <div className="flex items-center gap-2 mt-2 flex-wrap">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-green-500/10 border border-green-500/20 font-mono text-sm font-bold text-green-400">
                  {player.jerseyNumber}
                </span>
                <span className="px-2.5 py-1 bg-white/[0.06] border border-white/[0.08] rounded-full text-xs font-semibold text-slate-300">
                  {player.position}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* KPI grid */}
      <section>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {kpiCards.map((card) => (
            <div
              key={card.label}
              className="bg-[#0f1117] border border-white/[0.08] rounded-2xl p-4 flex flex-col gap-1"
            >
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                {card.label}
              </span>
              <span className={`text-2xl font-mono font-black tabular-nums ${card.color}`}>
                {card.value}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Per-match stats */}
      <section>
        <h2 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-3">
          {t('player.stats.perMatch')}
        </h2>
        <div className="grid grid-cols-3 gap-3">
          {perMatchCards.map((card) => (
            <div
              key={card.label}
              className="bg-[#0f1117] border border-white/[0.08] rounded-2xl p-4 flex flex-col gap-1"
            >
              <span className="text-xs font-semibold text-slate-500 leading-tight">
                {card.label}
              </span>
              <span className="text-xl font-mono font-bold text-white tabular-nums">
                {Number.isInteger(card.value) ? card.value : card.value.toFixed(2)}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Pass network */}
      <section>
        <div className="bg-[#0f1117] border border-white/[0.08] rounded-2xl p-5">
          <h2 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-4">
            {t('player.passNetwork.title')}
          </h2>
          {passNetwork.length === 0 ? (
            <p className="text-slate-500 text-sm text-center py-4">
              {t('player.passNetwork.noData')}
            </p>
          ) : (
            <div className="space-y-3">
              {passNetwork.map((entry) => {
                const barPct = Math.round((entry.count / maxPassCount) * 100)
                return (
                  <div key={entry.toPlayerId} className="flex items-center gap-3">
                    <span className="inline-flex items-center justify-center w-7 h-7 rounded-lg bg-green-500/10 border border-green-500/20 font-mono text-xs font-bold text-green-400 flex-shrink-0">
                      {entry.jerseyNumber}
                    </span>
                    <span className="text-sm font-medium text-slate-200 w-28 truncate flex-shrink-0">
                      {entry.toPlayerName}
                    </span>
                    <div className="flex-1 bg-white/[0.05] rounded-full h-2 overflow-hidden">
                      <div
                        className="h-full bg-green-500/70 rounded-full transition-all duration-300"
                        style={{ width: `${barPct}%` }}
                      />
                    </div>
                    <span className="text-xs font-mono text-slate-400 w-16 text-right flex-shrink-0">
                      {entry.count} {t('player.passNetwork.passes')}
                    </span>
                  </div>
                )
              })}
            </div>
          )}
        </div>
      </section>

      {/* Team averages comparison */}
      {teamAverages && (
        <section>
          <div className="bg-[#0f1117] border border-white/[0.08] rounded-2xl overflow-hidden">
            <div className="px-5 py-4 border-b border-white/[0.06]">
              <h2 className="text-xs font-bold uppercase tracking-widest text-slate-500">
                {t('player.stats.teamAvg')}
              </h2>
            </div>
            <table className="w-full text-left">
              <thead className="text-xs font-semibold text-slate-500 uppercase tracking-wider border-b border-white/[0.06]">
                <tr>
                  <th className="px-5 py-3"></th>
                  <th className="px-5 py-3 text-right">{t('player.detail')}</th>
                  <th className="px-5 py-3 text-right">{t('player.stats.teamAvg')}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/[0.04]">
                {([
                  ['goals',   t('player.stats.goals'),   totalStats.goals,   teamAverages.goals],
                  ['assists', t('player.stats.assists'), totalStats.assists, teamAverages.assists],
                  ['blocks',  t('player.stats.blocks'),  totalStats.blocks,  teamAverages.blocks],
                ] as [string, string, number, number][]).map(([key, label, playerVal, teamVal]) => (
                  <tr key={key} className="hover:bg-white/[0.02] transition-colors">
                    <td className="px-5 py-3 text-sm font-medium text-slate-300">{label}</td>
                    <td className="px-5 py-3 text-right font-mono font-bold text-green-400">{playerVal}</td>
                    <td className="px-5 py-3 text-right font-mono text-slate-500">
                      {Number.isInteger(teamVal) ? teamVal : teamVal.toFixed(2)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      )}
    </div>
  )
}
