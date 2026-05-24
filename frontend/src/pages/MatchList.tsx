import { type FormEvent, type ReactNode, useCallback, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
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
  SCHEDULED:   'bg-blue-500/15 text-blue-300 border-blue-500/25',
  IN_PROGRESS: 'bg-green-500/15 text-green-300 border-green-500/25',
  FINISHED:    'bg-white/[0.04] text-slate-500 border-white/[0.08]',
}

export default function MatchList() {
  const { t, i18n } = useTranslation()
  const navigate = useNavigate()
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
  const [deletingId, setDeletingId] = useState<string | null>(null)

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

  const handleDelete = async (id: string) => {
    if (!window.confirm(t('matches.modal.delete.message'))) return
    setDeletingId(id)
    try {
      await apiClient.delete(`/api/matches/${id}`)
      await load()
    } catch (err) {
      const ax = err as AxiosError<ErrorResponse>
      alert(ax.response?.data?.message ?? t('matches.errors.deleteFailed'))
    } finally {
      setDeletingId(null)
    }
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
          <h1 className="text-2xl font-bold text-white tracking-tight">{t('matches.list.title')}</h1>
          {!loading && (
            <span className="px-2.5 py-0.5 bg-white/[0.06] border border-white/[0.08] rounded-full text-xs text-slate-400 font-mono">{matches.length}</span>
          )}
        </div>
        <button type="button" onClick={openModal}
          className="flex items-center gap-2 px-4 py-2 bg-green-500 hover:bg-green-400 text-white rounded-xl font-semibold text-sm transition-all shadow-lg shadow-green-500/20">
          <span aria-hidden="true">+</span>
          {t('matches.list.createButton')}
        </button>
      </div>

      {loading && (
        <div className="flex items-center justify-center py-12">
          <div className="w-5 h-5 border-2 border-green-500 border-t-transparent rounded-full animate-spin" />
        </div>
      )}
      {error && !loading && (
        <div className="px-4 py-3 bg-red-500/10 border border-red-500/30 rounded-xl text-red-400 text-center">{error}</div>
      )}
      {!loading && !error && matches.length === 0 && (
        <div className="py-16 text-center">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-white/[0.04] border border-white/[0.08] text-2xl mb-4">🥏</div>
          <p className="text-slate-500 text-sm mb-4">{t('matches.list.empty')}</p>
          <button type="button" onClick={openModal}
            className="px-4 py-2 bg-green-500 hover:bg-green-400 text-white rounded-xl font-semibold text-sm transition-colors shadow-lg shadow-green-500/20">
            {t('matches.list.createButton')}
          </button>
        </div>
      )}

      {!loading && matches.length > 0 && (
        <div className="overflow-x-auto rounded-xl border border-white/[0.08]">
          <table className="w-full text-left">
            <thead className="bg-[#0f1117] text-slate-500 text-xs uppercase tracking-wider border-b border-white/[0.06]">
              <tr>
                <th className="px-4 py-3 font-semibold">{t('matches.list.columns.date')}</th>
                <th className="px-4 py-3 font-semibold">{t('matches.list.columns.home')}</th>
                <th className="px-4 py-3 text-center font-semibold">{t('matches.list.columns.score')}</th>
                <th className="px-4 py-3 font-semibold">{t('matches.list.columns.away')}</th>
                <th className="px-4 py-3 hidden md:table-cell font-semibold">{t('matches.list.columns.tournament')}</th>
                <th className="px-4 py-3 font-semibold">{t('matches.list.columns.status')}</th>
                <th className="px-4 py-3 text-right font-semibold">{t('common.actions')}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/[0.04]">
              {matches.map((m) => (
                <tr key={m.id} onClick={() => navigate(`/matches/${m.id}`)} className="hover:bg-white/[0.02] transition-colors cursor-pointer">
                  <td className="px-4 py-3 text-sm text-slate-400 whitespace-nowrap tabular-nums">{fmtDate(m.matchDate)}</td>
                  <td className="px-4 py-3">
                    <Link to={`/matches/${m.id}`} className="text-green-400 hover:text-green-300 font-semibold transition-colors">
                      {m.homeTeam?.name ?? m.homeTeamId}
                    </Link>
                  </td>
                  <td className="px-4 py-3 text-center">
                    <span className="font-mono font-bold text-lg text-white tabular-nums">
                      {m.homeScore} <span className="text-slate-600 font-light">–</span> {m.awayScore}
                    </span>
                  </td>
                  <td className="px-4 py-3 font-medium text-slate-200">{opponentName(m)}</td>
                  <td className="px-4 py-3 text-sm hidden md:table-cell">
                    {m.tournament?.name
                      ? <span className="px-2.5 py-0.5 bg-amber-500/10 border border-amber-500/20 text-amber-300 rounded-lg text-xs font-medium">{m.tournament.name}</span>
                      : <span className="text-slate-600">—</span>}
                  </td>
                  <td className="px-4 py-3">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold border ${STATUS_STYLES[m.status] ?? ''}`}>
                      {t(`matches.status.${m.status}`)}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-right">
                    <button
                      type="button"
                      onClick={(e) => { e.stopPropagation(); handleDelete(m.id) }}
                      disabled={deletingId === m.id}
                      className="text-red-400 hover:text-red-300 text-sm font-medium disabled:opacity-50 transition-colors"
                    >
                      {deletingId === m.id ? t('common.deleting') : t('common.delete')}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {modalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center px-4" onClick={closeModal}>
          <div className="bg-[#0f1117] border border-white/[0.08] rounded-2xl shadow-2xl w-full max-w-md p-6" onClick={(e) => e.stopPropagation()}>
            <h2 className="text-lg font-bold text-white mb-0.5">{t('matches.modal.create.title')}</h2>
            <p className="text-sm text-slate-500 mb-5">{t('matches.modal.create.opponentHint')}</p>
            {formError && (
              <div className="mb-4 px-4 py-3 bg-red-500/10 border border-red-500/30 rounded-xl text-red-400 text-sm text-center">{formError}</div>
            )}
            <form onSubmit={handleCreate} className="space-y-3">
              <Field label={t('matches.modal.create.homeTeam')}>
                <input value={selectedTeam?.name ?? ''} disabled className="field-input opacity-60" />
              </Field>

              {/* Opponent Type Toggle */}
              <div>
                <span className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">{t('matches.modal.create.opponentType.label')}</span>
                <div className="flex gap-2">
                  {(['registered', 'external'] as OpponentType[]).map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setForm((f) => ({ ...f, opponentType: type, awayTeamId: '', opponentName: '' }))}
                      className={[
                        'flex-1 py-2 px-3 rounded-xl text-sm font-semibold border transition-all duration-150',
                        form.opponentType === type
                          ? 'bg-green-500/10 border-green-500/30 text-green-300'
                          : 'bg-white/[0.04] border-white/[0.08] text-slate-400 hover:border-white/[0.14]',
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
                    onChange={(e) => setForm((f) => ({ ...f, awayTeamId: e.target.value }))} className="field-input">
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
                    className="field-input"
                  />
                </Field>
              )}

              <Field label={t('matches.modal.create.tournament')}>
                <select value={form.tournamentId} onChange={(e) => setForm((f) => ({ ...f, tournamentId: e.target.value }))} className="field-input">
                  <option value="">{t('matches.modal.create.tournamentNone')}</option>
                  {tournaments.map((tr) => <option key={tr.id} value={tr.id}>{tr.name}</option>)}
                </select>
              </Field>
              <Field label={t('matches.modal.create.matchDate')}>
                <input required type="datetime-local" value={form.matchDate}
                  onChange={(e) => setForm((f) => ({ ...f, matchDate: e.target.value }))} className="field-input" />
              </Field>
              <div className="flex gap-3 pt-2">
                <button type="button" onClick={closeModal} disabled={submitting}
                  className="flex-1 py-2.5 bg-white/[0.06] hover:bg-white/[0.09] text-slate-300 font-medium rounded-xl disabled:opacity-50 transition-colors">
                  {t('common.cancel')}
                </button>
                <button type="submit" disabled={submitting}
                  className="flex-1 py-2.5 bg-green-500 hover:bg-green-400 disabled:bg-green-900 disabled:text-green-600 text-white rounded-xl font-semibold transition-all shadow-lg shadow-green-500/20">
                  {submitting ? t('common.creating') : t('matches.modal.create.submit')}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <label className="block">
      <span className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">{label}</span>
      {children}
    </label>
  )
}
