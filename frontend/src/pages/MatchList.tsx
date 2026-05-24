import { type FormEvent, type ReactNode, useCallback, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import type { AxiosError } from 'axios'
import apiClient from '../lib/apiClient'
import { useAppStore } from '../store/appStore'
import type { Match, Tournament } from '../types'

interface ErrorResponse {
  status: 'error'
  message: string
}

interface TeamLite {
  id: string
  name: string
  logoUrl: string | null
}

interface CreateForm {
  awayTeamId: string
  tournamentId: string
  matchDate: string
}

const emptyForm: CreateForm = { awayTeamId: '', tournamentId: '', matchDate: '' }

export default function MatchList() {
  const { t, i18n } = useTranslation()
  const selectedTeam = useAppStore((s) => s.selectedTeam)
  const teamId = selectedTeam?.id

  const [matches, setMatches] = useState<Match[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const [allTeams, setAllTeams] = useState<TeamLite[]>([])
  const [tournaments, setTournaments] = useState<Tournament[]>([])

  const [modalOpen, setModalOpen] = useState(false)
  const [form, setForm] = useState<CreateForm>(emptyForm)
  const [submitting, setSubmitting] = useState(false)
  const [formError, setFormError] = useState<string | null>(null)

  const load = useCallback(async () => {
    if (!teamId) return
    setLoading(true)
    setError(null)
    try {
      const res = await apiClient.get<{ status: 'success'; data: Match[] }>(
        `/api/teams/${teamId}/matches`,
      )
      setMatches(res.data.data)
    } catch (err) {
      const ax = err as AxiosError<ErrorResponse>
      setError(ax.response?.data?.message ?? t('matches.errors.loadFailed'))
    } finally {
      setLoading(false)
    }
  }, [teamId, t])

  const loadFormDeps = useCallback(async () => {
    if (!teamId) return
    try {
      const [teamsRes, tournamentsRes] = await Promise.all([
        apiClient.get<{ status: 'success'; data: TeamLite[] }>(`/api/teams`),
        apiClient.get<{ status: 'success'; data: Tournament[] }>(
          `/api/teams/${teamId}/tournaments`,
        ),
      ])
      setAllTeams(teamsRes.data.data)
      setTournaments(tournamentsRes.data.data)
    } catch {
      // Keep silent — form will simply have empty options.
    }
  }, [teamId])

  useEffect(() => {
    load()
  }, [load])

  const openModal = () => {
    setForm(emptyForm)
    setFormError(null)
    setModalOpen(true)
    loadFormDeps()
  }
  const closeModal = () => {
    setModalOpen(false)
    setFormError(null)
  }

  const handleCreate = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!teamId) return
    if (!form.awayTeamId) {
      setFormError(t('matches.errors.createFailed'))
      return
    }
    setSubmitting(true)
    setFormError(null)
    try {
      await apiClient.post(`/api/teams/${teamId}/matches`, {
        homeTeamId: teamId,
        awayTeamId: form.awayTeamId,
        tournamentId: form.tournamentId || null,
        matchDate: new Date(form.matchDate).toISOString(),
      })
      closeModal()
      await load()
    } catch (err) {
      const ax = err as AxiosError<ErrorResponse>
      setFormError(ax.response?.data?.message ?? t('matches.errors.createFailed'))
    } finally {
      setSubmitting(false)
    }
  }

  const fmtDate = (iso: string) =>
    new Date(iso).toLocaleString(i18n.language === 'tr' ? 'tr-TR' : 'en-US')

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">{t('matches.list.title')}</h1>
        <button
          type="button"
          onClick={openModal}
          className="px-4 py-2 bg-violet-600 hover:bg-violet-500 text-white rounded-lg font-semibold"
        >
          {t('matches.list.createButton')}
        </button>
      </div>

      {loading && (
        <p className="text-gray-400 text-center py-8">{t('common.loading')}</p>
      )}
      {error && !loading && (
        <div className="px-4 py-3 bg-red-900/40 border border-red-700/60 rounded-lg text-red-400 text-center">
          {error}
        </div>
      )}
      {!loading && !error && matches.length === 0 && (
        <p className="text-gray-500 text-center py-12">{t('matches.list.empty')}</p>
      )}

      {!loading && matches.length > 0 && (
        <div className="overflow-x-auto rounded-xl border border-gray-800">
          <table className="w-full text-left">
            <thead className="bg-gray-900 text-gray-400 text-sm">
              <tr>
                <th className="px-4 py-3">{t('matches.list.columns.date')}</th>
                <th className="px-4 py-3">{t('matches.list.columns.home')}</th>
                <th className="px-4 py-3">{t('matches.list.columns.away')}</th>
                <th className="px-4 py-3 text-center">{t('matches.list.columns.score')}</th>
                <th className="px-4 py-3">{t('matches.list.columns.tournament')}</th>
                <th className="px-4 py-3">{t('matches.list.columns.status')}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800">
              {matches.map((m) => (
                <tr key={m.id} className="hover:bg-gray-900">
                  <td className="px-4 py-3 text-sm">{fmtDate(m.matchDate)}</td>
                  <td className="px-4 py-3">
                    <Link to={`/matches/${m.id}`} className="text-violet-300 hover:text-white">
                      {m.homeTeam?.name ?? m.homeTeamId}
                    </Link>
                  </td>
                  <td className="px-4 py-3">{m.awayTeam?.name ?? m.awayTeamId}</td>
                  <td className="px-4 py-3 text-center font-mono">
                    {m.homeScore} – {m.awayScore}
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-400">
                    {m.tournament?.name ?? '—'}
                  </td>
                  <td className="px-4 py-3 text-sm">
                    {t(`matches.status.${m.status}`)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {modalOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center px-4"
          onClick={closeModal}
        >
          <div
            className="bg-gray-900 border border-gray-800 rounded-2xl shadow-2xl w-full max-w-md p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-xl font-bold mb-3">{t('matches.modal.create.title')}</h2>
            <p className="text-sm text-gray-500 mb-4">{t('matches.modal.create.opponentHint')}</p>
            {formError && (
              <div className="mb-4 px-4 py-2.5 bg-red-900/40 border border-red-700/60 rounded-lg text-red-400 text-sm text-center">
                {formError}
              </div>
            )}
            <form onSubmit={handleCreate} className="space-y-3">
              <Field label={t('matches.modal.create.homeTeam')}>
                <input value={selectedTeam?.name ?? ''} disabled className="input opacity-70" />
              </Field>
              <Field label={t('matches.modal.create.awayTeam')}>
                <select
                  required
                  value={form.awayTeamId}
                  onChange={(e) => setForm((f) => ({ ...f, awayTeamId: e.target.value }))}
                  className="input"
                >
                  <option value="">—</option>
                  {allTeams
                    .filter((tm) => tm.id !== teamId)
                    .map((tm) => (
                      <option key={tm.id} value={tm.id}>
                        {tm.name}
                      </option>
                    ))}
                </select>
              </Field>
              <Field label={t('matches.modal.create.tournament')}>
                <select
                  value={form.tournamentId}
                  onChange={(e) => setForm((f) => ({ ...f, tournamentId: e.target.value }))}
                  className="input"
                >
                  <option value="">{t('matches.modal.create.tournamentNone')}</option>
                  {tournaments.map((tr) => (
                    <option key={tr.id} value={tr.id}>
                      {tr.name}
                    </option>
                  ))}
                </select>
              </Field>
              <Field label={t('matches.modal.create.matchDate')}>
                <input
                  required
                  type="datetime-local"
                  value={form.matchDate}
                  onChange={(e) => setForm((f) => ({ ...f, matchDate: e.target.value }))}
                  className="input"
                />
              </Field>
              <div className="flex gap-3 pt-2">
                <button
                  type="button"
                  onClick={closeModal}
                  disabled={submitting}
                  className="flex-1 py-2.5 bg-gray-800 hover:bg-gray-700 rounded-lg disabled:opacity-50"
                >
                  {t('common.cancel')}
                </button>
                <button
                  type="submit"
                  disabled={submitting}
                  className="flex-1 py-2.5 bg-violet-600 hover:bg-violet-500 disabled:bg-violet-800 rounded-lg font-semibold"
                >
                  {submitting ? t('common.creating') : t('matches.modal.create.submit')}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <style>{`
        .input {
          width: 100%;
          padding: 0.5rem 0.75rem;
          background: rgb(31, 41, 55);
          border: 1px solid rgb(55, 65, 81);
          border-radius: 0.5rem;
          color: white;
        }
        .input:focus { outline: 2px solid rgb(139, 92, 246); }
      `}</style>
    </div>
  )
}

function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <label className="block">
      <span className="block text-sm text-gray-400 mb-1">{label}</span>
      {children}
    </label>
  )
}
