import { useCallback, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import apiClient from '../lib/apiClient'
import { useAppStore } from '../store/appStore'
import type { Match, Player, Tournament } from '../types'

interface Stats {
  players: number
  matches: number
  tournaments: number
  nextMatch: Match | null
}

export default function Dashboard() {
  const { t, i18n } = useTranslation()
  const selectedTeam = useAppStore((s) => s.selectedTeam)
  const teamId = selectedTeam?.id

  const [stats, setStats] = useState<Stats>({ players: 0, matches: 0, tournaments: 0, nextMatch: null })
  const [loading, setLoading] = useState(true)

  const load = useCallback(async () => {
    if (!teamId) return
    setLoading(true)
    try {
      const [playersRes, matchesRes, tournamentsRes] = await Promise.all([
        apiClient.get<{ status: string; data: Player[] }>(`/api/teams/${teamId}/players`),
        apiClient.get<{ status: string; data: Match[] }>(`/api/teams/${teamId}/matches`),
        apiClient.get<{ status: string; data: Tournament[] }>(`/api/teams/${teamId}/tournaments`),
      ])
      const matches: Match[] = matchesRes.data.data
      const upcoming = matches
        .filter((m) => m.status === 'SCHEDULED')
        .sort((a, b) => new Date(a.matchDate).getTime() - new Date(b.matchDate).getTime())
      setStats({
        players: playersRes.data.data.length,
        matches: matches.length,
        tournaments: tournamentsRes.data.data.length,
        nextMatch: upcoming[0] ?? null,
      })
    } catch {
      // silently fail — dashboard is non-critical
    } finally {
      setLoading(false)
    }
  }, [teamId])

  useEffect(() => { load() }, [load])

  const fmtDate = (iso: string) =>
    new Date(iso).toLocaleDateString(i18n.language === 'tr' ? 'tr-TR' : 'en-US', {
      weekday: 'short', day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit',
    })

  const teamInitial = selectedTeam?.name?.[0]?.toUpperCase() ?? '?'

  return (
    <div className="max-w-5xl space-y-8">
      {/* Team Header */}
      <div className="flex items-center gap-5">
        <div className="w-16 h-16 rounded-2xl bg-green-500/10 border border-green-500/20 flex items-center justify-center text-2xl font-bold text-green-400 flex-shrink-0 overflow-hidden">
          {selectedTeam?.logoUrl
            ? <img src={selectedTeam.logoUrl} alt="" className="w-full h-full object-cover" />
            : teamInitial}
        </div>
        <div>
          <h1 className="text-2xl font-bold text-white tracking-tight">{selectedTeam?.name}</h1>
          <p className="text-slate-400 text-sm mt-0.5">{t('dashboard.title')}</p>
        </div>
      </div>

      {/* Stat Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          icon="👥"
          label={t('dashboard.stats.players')}
          value={loading ? null : String(stats.players)}
          to="/roster"
          accent="green"
        />
        <StatCard
          icon="🥏"
          label={t('dashboard.stats.matches')}
          value={loading ? null : String(stats.matches)}
          to="/matches"
          accent="blue"
        />
        <StatCard
          icon="🏆"
          label={t('dashboard.stats.tournaments')}
          value={loading ? null : String(stats.tournaments)}
          to="/tournaments"
          accent="amber"
        />
        <StatCard
          icon="📅"
          label={t('dashboard.stats.nextMatch')}
          value={loading ? null : (stats.nextMatch ? fmtDate(stats.nextMatch.matchDate) : t('dashboard.stats.noUpcoming'))}
          small
          accent="slate"
        />
      </div>

      {/* Next Match Banner */}
      {!loading && stats.nextMatch && (
        <div className="relative overflow-hidden bg-[#0f1117] border border-green-500/20 rounded-2xl p-6">
          {/* Subtle gradient accent */}
          <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-transparent to-transparent pointer-events-none" />

          <div className="relative">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" aria-hidden="true" />
              <span className="text-xs uppercase tracking-widest text-green-400 font-bold">
                {t('dashboard.nextMatch')}
              </span>
            </div>

            <div className="flex items-center justify-between gap-4">
              <div className="flex-1 min-w-0">
                <div className="text-base font-bold text-white truncate">
                  {stats.nextMatch.homeTeam?.name ?? selectedTeam?.name}
                </div>
                <div className="text-xs text-slate-500 mt-0.5">{t('matches.list.columns.home')}</div>
              </div>

              <div className="flex flex-col items-center flex-shrink-0 px-4">
                <div className="text-xs font-mono text-slate-400 bg-white/[0.05] px-3 py-1.5 rounded-lg">
                  {fmtDate(stats.nextMatch.matchDate)}
                </div>
                <div className="text-slate-600 text-lg font-bold mt-1">VS</div>
              </div>

              <div className="flex-1 min-w-0 text-right">
                <div className="text-base font-bold text-white truncate">
                  {stats.nextMatch.awayTeam?.name ?? stats.nextMatch.opponentName ?? t('dashboard.unknownOpponent')}
                </div>
                <div className="text-xs text-slate-500 mt-0.5">{t('matches.list.columns.away')}</div>
              </div>
            </div>

            {stats.nextMatch.tournament && (
              <div className="mt-4 inline-flex items-center gap-1.5 text-xs text-amber-400 bg-amber-500/10 border border-amber-500/20 px-3 py-1 rounded-full">
                🏆 {stats.nextMatch.tournament.name}
              </div>
            )}

            <div className="mt-4">
              <Link
                to={`/matches/${stats.nextMatch.id}`}
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-green-400 hover:text-green-300 transition-colors"
              >
                {t('dashboard.viewMatch')}
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Getting Started empty state */}
      {!loading && stats.players === 0 && stats.matches === 0 && (
        <div className="bg-[#0f1117] border border-white/[0.08] rounded-2xl p-10 text-center">
          <div className="text-4xl mb-3">🚀</div>
          <p className="text-slate-400 text-sm mb-5">{t('dashboard.gettingStarted')}</p>
          <div className="flex gap-3 justify-center flex-wrap">
            <Link
              to="/roster"
              className="px-4 py-2 bg-green-500 hover:bg-green-400 rounded-xl text-sm font-semibold text-white transition-colors shadow-lg shadow-green-500/20"
            >
              {t('dashboard.addFirstPlayer')}
            </Link>
            <Link
              to="/matches"
              className="px-4 py-2 bg-white/[0.06] hover:bg-white/[0.09] rounded-xl text-sm font-semibold text-slate-300 transition-colors"
            >
              {t('dashboard.createFirstMatch')}
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}

const ACCENT_MAP = {
  green: { card: 'border-green-500/15 hover:border-green-500/30', value: 'text-green-400', icon: 'bg-green-500/10' },
  blue:  { card: 'border-blue-500/15 hover:border-blue-500/30',  value: 'text-blue-400',  icon: 'bg-blue-500/10'  },
  amber: { card: 'border-amber-500/15 hover:border-amber-500/30', value: 'text-amber-400', icon: 'bg-amber-500/10' },
  slate: { card: 'border-white/[0.06] hover:border-white/[0.12]', value: 'text-slate-300', icon: 'bg-white/[0.04]' },
}

function StatCard({
  icon,
  label,
  value,
  to,
  small,
  accent = 'slate',
}: {
  icon: string
  label: string
  value: string | null
  to?: string
  small?: boolean
  accent?: keyof typeof ACCENT_MAP
}) {
  const a = ACCENT_MAP[accent]

  const inner = (
    <div className={`bg-[#0f1117] border ${a.card} rounded-2xl p-5 transition-all duration-200 h-full`}>
      <div className={`inline-flex items-center justify-center w-10 h-10 rounded-xl ${a.icon} text-xl mb-4`}>
        {icon}
      </div>
      <div className="text-xs uppercase tracking-wider text-slate-500 mb-1.5 font-semibold">{label}</div>
      {value === null ? (
        <div className="h-7 w-16 rounded-lg bg-white/[0.06] animate-pulse" aria-label="loading" />
      ) : (
        <div className={`font-bold ${a.value} ${small ? 'text-sm leading-snug' : 'text-3xl tabular-nums'}`}>
          {value}
        </div>
      )}
    </div>
  )

  if (to) return <Link to={to} className="block">{inner}</Link>
  return inner
}
