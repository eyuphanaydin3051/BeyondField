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
      <div className="flex items-center gap-4">
        <div className="w-16 h-16 rounded-2xl bg-violet-600/20 border border-violet-700/40 flex items-center justify-center text-2xl font-bold text-violet-300 flex-shrink-0">
          {selectedTeam?.logoUrl
            ? <img src={selectedTeam.logoUrl} alt="" className="w-full h-full object-cover rounded-2xl" />
            : teamInitial}
        </div>
        <div>
          <h1 className="text-3xl font-bold text-white">{selectedTeam?.name}</h1>
          <p className="text-gray-400 text-sm mt-0.5">{t('dashboard.title')}</p>
        </div>
      </div>

      {/* Stat Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          icon="👥"
          label={t('dashboard.stats.players')}
          value={loading ? '—' : String(stats.players)}
          to="/roster"
        />
        <StatCard
          icon="⚽"
          label={t('dashboard.stats.matches')}
          value={loading ? '—' : String(stats.matches)}
          to="/matches"
        />
        <StatCard
          icon="🏆"
          label={t('dashboard.stats.tournaments')}
          value={loading ? '—' : String(stats.tournaments)}
          to="/tournaments"
        />
        <StatCard
          icon="📅"
          label={t('dashboard.stats.nextMatch')}
          value={loading ? '—' : (stats.nextMatch ? fmtDate(stats.nextMatch.matchDate) : t('dashboard.stats.noUpcoming'))}
          small
        />
      </div>

      {/* Next Match Banner */}
      {!loading && stats.nextMatch && (
        <div className="bg-gradient-to-r from-violet-900/30 to-gray-900 border border-violet-700/30 rounded-2xl p-6">
          <div className="text-xs uppercase tracking-widest text-violet-400 mb-3 font-semibold">
            {t('dashboard.nextMatch')}
          </div>
          <div className="flex items-center justify-between gap-4">
            <div className="text-lg font-semibold text-white truncate">
              {stats.nextMatch.homeTeam?.name ?? selectedTeam?.name}
            </div>
            <div className="px-4 py-2 bg-gray-800 rounded-xl text-sm text-gray-400 font-mono flex-shrink-0">
              {fmtDate(stats.nextMatch.matchDate)}
            </div>
            <div className="text-lg font-semibold text-white truncate text-right">
              {stats.nextMatch.awayTeam?.name ?? stats.nextMatch.opponentName ?? t('dashboard.unknownOpponent')}
            </div>
          </div>
          {stats.nextMatch.tournament && (
            <div className="mt-3 text-xs text-violet-400">
              🏆 {stats.nextMatch.tournament.name}
            </div>
          )}
          <div className="mt-4">
            <Link
              to={`/matches/${stats.nextMatch.id}`}
              className="inline-block text-sm text-violet-300 hover:text-white transition-colors"
            >
              {t('dashboard.viewMatch')} →
            </Link>
          </div>
        </div>
      )}

      {/* Quick Links */}
      {!loading && stats.players === 0 && stats.matches === 0 && (
        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8 text-center space-y-3">
          <p className="text-gray-400 text-sm">{t('dashboard.gettingStarted')}</p>
          <div className="flex gap-3 justify-center flex-wrap">
            <Link to="/roster" className="px-4 py-2 bg-violet-600 hover:bg-violet-500 rounded-lg text-sm font-semibold text-white transition-colors">
              {t('dashboard.addFirstPlayer')}
            </Link>
            <Link to="/matches" className="px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg text-sm font-semibold text-white transition-colors">
              {t('dashboard.createFirstMatch')}
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}

function StatCard({
  icon,
  label,
  value,
  to,
  small,
}: {
  icon: string
  label: string
  value: string
  to?: string
  small?: boolean
}) {
  const inner = (
    <div className="bg-gray-900 border border-gray-800 hover:border-gray-700 rounded-2xl p-5 transition-colors h-full">
      <div className="text-2xl mb-3">{icon}</div>
      <div className="text-xs uppercase tracking-wider text-gray-500 mb-1">{label}</div>
      <div className={`font-bold text-white ${small ? 'text-sm leading-snug' : 'text-3xl'}`}>{value}</div>
    </div>
  )
  if (to) return <Link to={to} className="block">{inner}</Link>
  return inner
}
