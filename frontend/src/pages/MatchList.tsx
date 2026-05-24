import { type FormEvent, type ReactNode, useCallback, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import type { AxiosError } from 'axios'
import apiClient from '../lib/apiClient'
import { useAppStore } from '../store/appStore'
import type { Match, Tournament } from '../types'

interface ErrorResponse { status: 'error'; message: string }

interface TeamLite { id: string; name: string; logoUrl: string | null }

type OpponentType = 'registered' | 'external'

interface CreateForm {
  opponentType: OpponentType
  awayTeamId: string
  opponentName: string
  tournamentId: string
  matchDate: string
}
const emptyForm: CreateForm = { opponentType: 'registered', awayTeamId: '', opponentName: '', tournamentId: '', matchDate: '' }

const STATUS_STYLES: Record<string, string> = {
  SCHEDULED: 'bg-blue-500/20 text-blue-300 border-blue-500/30',
  IN_PROGRESS: 'bg-green-500/20 text-green-300 border-green-500/30',
  FINISHED: 'bg-gray-700/40 text-gray-400 border-gray-600/30',
}

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
    setLoading(true); setError(null)
    try {
      const res = await apiClient.get<{ status: 'success'; data: Match[] }>(`/api/teams/${teamId}/matches`)
      setMatches(res.data.data)
    } catch (err) {
      const ax = err as AxiosError<ErrorResponse>
      setError(ax.response?.data?.message ?? t('matches.errors.loadFailed'))
    } finally { setLoading(false) }
  }, [teamId, t])

  const loadFormDeps = useCallback(async () => {
    if (!teamId) return
    try {
      const [teamsRes, tournamentsRes] = await Promise.all([
        apiClient.get<{ status: 'success'; data: TeamLite[] }>('/api/teams'),
        apiClient.get<{ status: 'success'; data: Tournament[] }>(`/api/teams/${teamId}/tournaments`),
      ])
      setAllTeams(teamsRes.data.data)
      setTournaments(tournamentsRes.data.data)
    } catch { /* silent */ }
  }, [teamId])

  useEffect(() => { load() }, [load])

  const openModal = () => { setForm(emptyForm); setFormError(null); setModalOpen(true); loadFormDeps() }
  const closeModal = () => { setModalOpen(false); setFormError(null) }

  const handleCreate = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!teamId) return
    if (form.opponentType === 'registered' && !form.awayTeamId) {
      setFormError(t('matches.errors.createFailed')); return
    }
    if (form.opponentType === 'external' && !form.opponentName.trim()) {
      setFormError(t('matches.errors.createFailed')); return
    }
    setSubmitting(true); setFormError(null)
    try {
      await apiClient.post(`/api/teams/${teamId}/matches`, {
        homeTeamId: teamId,
        awayTeamId: form.opponentType === 'registered' ? form.awayTeamId : null,
        opponentName: form.opponentType === 'external' ? form.opponentName.trim() : null,
        tournamentId: form.tournamentId || null,
        matchDate: new Date(form.matchDate).toISOString(),
      })
      closeModal(); await load()
    } catch (err) {
      const ax = err as AxiosError<ErrorResponse>
      setFormError(ax.response?.data?.message ?? t('matches.errors.createFailed'))
    } finally { setSubmitting(false) }
  }

  const fmtDate = (iso: string) =>
    new Date(iso).toLocaleString(i18n.language === 'tr' ? 'tr-TR' : 'en-US', {
      day: 'numeric', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit',
    })

  const opponentName = (m: Match) => m.awayTeam?.name ?? m.opponentName ?? '—'

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <h1 className="text-2xl font-bold">{t('matches.list.title')}</h1>
          {!loading && (
            <span className="px-2.5 py-0.5 bg-gray-800 rounded-full text-xs text-gray-400 font-mono">{matches.length}</span>
          )}
        </div>
        <button type="button" onClick={openModal}
          className="px-4 py-2 bg-violet-600 hover:bg-violet-500 text-white rounded-lg font-semibold text-sm transition-colors">
          + {t('matches.list.createButton')}
        </button>
      </div>

      {loading && <p className="text-gray-400 text-center py-8">{t('common.loading')}</p>}
      {error && !loading && (
        <div className="px-4 py-3 bg-red-900/40 border border-red-700/60 rounded-lg text-red-400 text-center">{error}</div>
      )}
      {!loading && !error && matches.length === 0 && (
        <div className="py-16 text-center">
          <div className="text-4xl mb-3">⚽</div>
          <p className="text-gray-500 mb-4">{t('matches.list.empty')}</p>
          <button type="button" onClick={openModal}
            className="px-4 py-2 bg-violet-600 hover:bg-violet-500 text-white rounded-lg font-semibold text-sm transition-colors">
            {t('matches.list.createButton')}
          </button>
        </div>
      )}

      {!loading && matches.length > 0 && (
        <div className="overflow-x-auto rounded-xl border border-gray-800">
          <table className="w-full text-left">
            <thead className="bg-gray-900 text-gray-500 text-xs uppercase tracking-wider">
              <tr>
                <th className="px-4 py-3">{t('matches.list.columns.date')}</th>
                <th className="px-4 py-3">{t('matches.list.columns.home')}</th>
                <th className="px-4 py-3 text-center">{t('matches.list.columns.score')}</th>
                <th className="px-4 py-3">{t('matches.list.columns.away')}</th>
                <th className="px-4 py-3 hidden md:table-cell">{t('matches.list.columns.tournament')}</th>
                <th className="px-4 py-3">{t('matches.list.columns.status')}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800">
              {matches.map((m) => (
                <tr key={m.id} className="hover:bg-gray-900/50 transition-colors">
                  <td className="px-4 py-3 text-sm text-gray-400 whitespace-nowrap">{fmtDate(m.matchDate)}</td>
                  <td className="px-4 py-3">
                    <Link to={`/matches/${m.id}`} className="text-violet-300 hover:text-white font-medium transition-colors">
                      {m.homeTeam?.name ?? m.homeTeamId}
                    </Link>
                  </td>
                  <td className="px-4 py-3 text-center">
                    <span className="font-mono font-bold text-lg text-white">
                      {m.homeScore} <span className="text-gray-600">–</span> {m.awayScore}
                    </span>
                  </td>
                  <td className="px-4 py-3 font-medium">{opponentName(m)}</td>
                  <td className="px-4 py-3 text-sm text-gray-500 hidden md:table-cell">
                    {m.tournament?.name
                      ? <span className="px-2 py-0.5 bg-gray-800 rounded-md text-xs">{m.tournament.name}</span>
                      : '—'}
                  </td>
                  <td className="px-4 py-3">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${STATUS_STYLES[m.status] ?? ''}`}>
                      {t(`matches.status.${m.status}`)}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {modalOpen && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center px-4" onClick={closeModal}>
          <div className="bg-gray-900 border border-gray-800 rounded-2xl shadow-2xl w-full max-w-md p-6" onClick={(e) => e.stopPropagation()}>
            <h2 className="text-xl font-bold mb-1">{t('matches.modal.create.title')}</h2>
            <p className="text-sm text-gray-500 mb-4">{t('matches.modal.create.opponentHint')}</p>
            {formError && (
              <div className="mb-4 px-4 py-2.5 bg-red-900/40 border border-red-700/60 rounded-lg text-red-400 text-sm text-center">{formError}</div>
            )}
            <form onSubmit={handleCreate} className="space-y-3">
              <Field label={t('matches.modal.create.homeTeam')}>
                <input value={selectedTeam?.name ?? ''} disabled className="input opacity-70" />
              </Field>

              {/* Opponent Type Toggle */}
              <div>
                <span className="block text-sm text-gray-400 mb-2">{t('matches.modal.create.opponentType.label')}</span>
                <div className="flex gap-2">
                  {(['registered', 'external'] as OpponentType[]).map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setForm((f) => ({ ...f, opponentType: type, awayTeamId: '', opponentName: '' }))}
                      className={[
                        'flex-1 py-2 px-3 rounded-lg text-sm font-medium border transition-colors',
                        form.opponentType === type
                          ? 'bg-violet-600/20 border-violet-500/50 text-violet-300'
                          : 'bg-gray-800 border-gray-700 text-gray-400 hover:border-gray-600',
                      ].join(' ')}
                    >
                      {t(`matches.modal.create.opponentType.${type}`)}
                    </button>
                  ))}
                </div>
              </div>

              {form.opponentType === 'registered' ? (
                <Field label={t('matches.modal.create.awayTeam')}>
                  <select required value={form.awayTeamId}
                    onChange={(e) => setForm((f) => ({ ...f, awayTeamId: e.target.value }))} className="input">
                    <option value="">—</option>
                    {allTeams.filter((tm) => tm.id !== teamId).map((tm) => (
                      <option key={tm.id} value={tm.id}>{tm.name}</option>
                    ))}
                  </select>
                </Field>
              ) : (
                <Field label={t('matches.modal.create.opponentName')}>
                  <input
                    required
                    value={form.opponentName}
                    placeholder={t('matches.modal.create.opponentNamePlaceholder')}
                    onChange={(e) => setForm((f) => ({ ...f, opponentName: e.target.value }))}
                    className="input"
                  />
                </Field>
              )}

              <Field label={t('matches.modal.create.tournament')}>
                <select value={form.tournamentId} onChange={(e) => setForm((f) => ({ ...f, tournamentId: e.target.value }))} className="input">
                  <option value="">{t('matches.modal.create.tournamentNone')}</option>
                  {tournaments.map((tr) => <option key={tr.id} value={tr.id}>{tr.name}</option>)}
                </select>
              </Field>
              <Field label={t('matches.modal.create.matchDate')}>
                <input required type="datetime-local" value={form.matchDate}
                  onChange={(e) => setForm((f) => ({ ...f, matchDate: e.target.value }))} className="input" />
              </Field>
              <div className="flex gap-3 pt-2">
                <button type="button" onClick={closeModal} disabled={submitting}
                  className="flex-1 py-2.5 bg-gray-800 hover:bg-gray-700 rounded-lg disabled:opacity-50 transition-colors">
                  {t('common.cancel')}
                </button>
                <button type="submit" disabled={submitting}
                  className="flex-1 py-2.5 bg-violet-600 hover:bg-violet-500 disabled:bg-violet-800 rounded-lg font-semibold transition-colors">
                  {submitting ? t('common.creating') : t('matches.modal.create.submit')}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <style>{`
        .input { width:100%; padding:0.5rem 0.75rem; background:rgb(31,41,55); border:1px solid rgb(55,65,81); border-radius:0.5rem; color:white; }
        .input:focus { outline:2px solid rgb(139,92,246); }
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
