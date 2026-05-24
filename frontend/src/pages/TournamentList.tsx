import { type FormEvent, type ReactNode, useCallback, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import type { AxiosError } from 'axios'
import apiClient from '../lib/apiClient'
import { useAppStore } from '../store/appStore'
import type { Player, PlayerPosition, Tournament } from '../types'

interface ErrorResponse { status: 'error'; message: string }

interface CreateForm { name: string; startDate: string; endDate: string; location: string }
const emptyForm: CreateForm = { name: '', startDate: '', endDate: '', location: '' }

const POSITION_COLORS: Record<PlayerPosition, string> = {
  HANDLER: 'bg-blue-500/15 text-blue-300 border-blue-500/25',
  CUTTER:  'bg-green-500/15 text-green-300 border-green-500/25',
  HYBRID:  'bg-amber-500/15 text-amber-300 border-amber-500/25',
}

export default function TournamentList() {
  const { t, i18n } = useTranslation()
  const selectedTeam = useAppStore((s) => s.selectedTeam)
  const teamId = selectedTeam?.id

  const [items, setItems] = useState<Tournament[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [modalOpen, setModalOpen] = useState(false)
  const [modalStep, setModalStep] = useState<1 | 2>(1)
  const [createdTournamentId, setCreatedTournamentId] = useState<string | null>(null)
  const [form, setForm] = useState<CreateForm>(emptyForm)
  const [submitting, setSubmitting] = useState(false)
  const [formError, setFormError] = useState<string | null>(null)
  const [deletingId, setDeletingId] = useState<string | null>(null)
  // Step 2 — roster
  const [teamPlayers, setTeamPlayers] = useState<Player[]>([])
  const [playersLoading, setPlayersLoading] = useState(false)
  const [selectedPlayerIds, setSelectedPlayerIds] = useState<Set<string>>(new Set())
  const [savingRoster, setSavingRoster] = useState(false)

  const load = useCallback(async () => {
    if (!teamId) return
    setLoading(true); setError(null)
    try {
      const res = await apiClient.get<{ status: 'success'; data: Tournament[] }>(`/api/teams/${teamId}/tournaments`)
      setItems(res.data.data)
    } catch (err) {
      const ax = err as AxiosError<ErrorResponse>
      setError(ax.response?.data?.message ?? t('tournaments.errors.loadFailed'))
    } finally { setLoading(false) }
  }, [teamId, t])

  useEffect(() => { load() }, [load])

  const openModal = () => {
    setForm(emptyForm); setFormError(null)
    setModalStep(1); setCreatedTournamentId(null)
    setSelectedPlayerIds(new Set()); setTeamPlayers([])
    setModalOpen(true)
  }
  const closeModal = () => {
    setModalOpen(false); setForm(emptyForm); setFormError(null)
    setModalStep(1); setCreatedTournamentId(null)
    setSelectedPlayerIds(new Set()); setTeamPlayers([])
  }

  const loadTeamPlayers = useCallback(async () => {
    if (!teamId) return
    setPlayersLoading(true)
    try {
      const res = await apiClient.get<{ status: 'success'; data: Player[] }>(
        `/api/teams/${teamId}/players`
      )
      setTeamPlayers(res.data.data)
    } catch {
      // non-critical: player list for roster selection — show empty gracefully
      setTeamPlayers([])
    } finally { setPlayersLoading(false) }
  }, [teamId])

  const handleCreate = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!teamId) return
    setSubmitting(true); setFormError(null)
    try {
      const res = await apiClient.post<{ status: 'success'; data: Tournament }>(
        `/api/teams/${teamId}/tournaments`,
        {
          name: form.name.trim(),
          startDate: form.startDate,
          endDate: form.endDate || null,
          location: form.location.trim() || null,
        }
      )
      setCreatedTournamentId(res.data.data.id)
      await loadTeamPlayers()
      setModalStep(2)
    } catch (err) {
      const ax = err as AxiosError<ErrorResponse>
      setFormError(ax.response?.data?.message ?? t('tournaments.errors.createFailed'))
    } finally { setSubmitting(false) }
  }

  const togglePlayer = (id: string) => {
    setSelectedPlayerIds((prev) => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }

  const handleFinishRoster = async () => {
    if (!createdTournamentId) { closeModal(); await load(); return }
    if (selectedPlayerIds.size === 0) { closeModal(); await load(); return }
    setSavingRoster(true)
    try {
      await Promise.all(
        [...selectedPlayerIds].map((playerId) =>
          apiClient.post(`/api/tournaments/${createdTournamentId}/roster`, { playerId })
        )
      )
    } catch {
      // partial failures are acceptable — tournament already created
    } finally {
      setSavingRoster(false)
    }
    closeModal(); await load()
  }

  const handleDelete = async (id: string) => {
    if (!window.confirm(t('tournaments.modal.delete.message'))) return
    setDeletingId(id)
    try { await apiClient.delete(`/api/tournaments/${id}`); await load() }
    catch (err) {
      const ax = err as AxiosError<ErrorResponse>
      alert(ax.response?.data?.message ?? t('tournaments.errors.deleteFailed'))
    } finally { setDeletingId(null) }
  }

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
    active: t('tournaments.status.active'),
    past: t('tournaments.status.past'),
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <h1 className="text-2xl font-bold text-white tracking-tight">{t('tournaments.list.title')}</h1>
          {!loading && (
            <span className="px-2.5 py-0.5 bg-white/[0.06] border border-white/[0.08] rounded-full text-xs text-slate-400 font-mono">{items.length}</span>
          )}
        </div>
        <button type="button" onClick={openModal}
          className="flex items-center gap-2 px-4 py-2 bg-green-500 hover:bg-green-400 text-white rounded-xl font-semibold text-sm transition-all shadow-lg shadow-green-500/20">
          <span aria-hidden="true">+</span>
          {t('tournaments.list.createButton')}
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
      {!loading && !error && items.length === 0 && (
        <div className="py-16 text-center">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-white/[0.04] border border-white/[0.08] text-2xl mb-4">🏆</div>
          <p className="text-slate-500 text-sm mb-4">{t('tournaments.list.empty')}</p>
          <button type="button" onClick={openModal}
            className="px-4 py-2 bg-green-500 hover:bg-green-400 text-white rounded-xl font-semibold text-sm transition-colors shadow-lg shadow-green-500/20">
            {t('tournaments.list.createButton')}
          </button>
        </div>
      )}
      {!loading && items.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((tr) => {
            const status = getStatus(tr)
            return (
              <div key={tr.id} className="bg-[#0f1117] border border-white/[0.08] hover:border-white/[0.14] rounded-2xl p-5 transition-all duration-200 flex flex-col gap-4">
                <div className="flex justify-between items-start gap-2">
                  <div>
                    <h3 className="font-bold text-base text-white leading-snug">{tr.name}</h3>
                    <span className={`inline-flex items-center mt-2 px-2.5 py-0.5 rounded-full text-xs font-semibold border ${statusStyle[status]}`}>
                      {statusLabel[status]}
                    </span>
                  </div>
                  <button type="button" onClick={() => handleDelete(tr.id)} disabled={deletingId === tr.id}
                    className="text-red-400 hover:text-red-300 text-xs font-medium disabled:opacity-50 transition-colors flex-shrink-0 mt-0.5">
                    {deletingId === tr.id ? t('common.deleting') : t('common.delete')}
                  </button>
                </div>

                <div className="space-y-1.5 text-sm text-slate-400">
                  <div className="flex items-center gap-2">
                    <span className="text-slate-600 text-base" aria-hidden="true">📅</span>
                    <span>{fmtDate(tr.startDate)}{tr.endDate && ` — ${fmtDate(tr.endDate)}`}</span>
                  </div>
                  {tr.location && (
                    <div className="flex items-center gap-2">
                      <span className="text-slate-600 text-base" aria-hidden="true">📍</span>
                      <span>{tr.location}</span>
                    </div>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      )}

      {modalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center px-4" onClick={closeModal}>
          <div className="bg-[#0f1117] border border-white/[0.08] rounded-2xl shadow-2xl w-full max-w-md p-6" onClick={(e) => e.stopPropagation()}>

            {/* Step indicator */}
            <div className="flex items-center gap-2 mb-5">
              <div className={`w-2 h-2 rounded-full ${modalStep === 1 ? 'bg-green-500' : 'bg-green-500/40'}`} />
              <div className={`flex-1 h-px ${modalStep === 2 ? 'bg-green-500/40' : 'bg-white/[0.06]'}`} />
              <div className={`w-2 h-2 rounded-full ${modalStep === 2 ? 'bg-green-500' : 'bg-white/[0.12]'}`} />
              <span className="text-xs text-slate-500 font-mono ml-1">
                {t('tournaments.modal.create.stepOf', { current: modalStep, total: 2 })}
              </span>
            </div>

            <h2 className="text-lg font-bold text-white mb-5">
              {modalStep === 1
                ? t('tournaments.modal.create.step1Title')
                : t('tournaments.modal.create.step2Title')}
            </h2>

            {/* Step 1 — tournament info */}
            {modalStep === 1 && (
              <>
                {formError && (
                  <div className="mb-4 px-4 py-3 bg-red-500/10 border border-red-500/30 rounded-xl text-red-400 text-sm text-center">{formError}</div>
                )}
                <form onSubmit={handleCreate} className="space-y-3">
                  <Field label={t('tournaments.fields.name')}>
                    <input required value={form.name} onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))} className="field-input" />
                  </Field>
                  <div className="grid grid-cols-2 gap-3">
                    <Field label={t('tournaments.fields.startDate')}>
                      <input required type="date" value={form.startDate} onChange={(e) => setForm((f) => ({ ...f, startDate: e.target.value }))} className="field-input" />
                    </Field>
                    <Field label={t('tournaments.fields.endDate')}>
                      <input type="date" value={form.endDate} onChange={(e) => setForm((f) => ({ ...f, endDate: e.target.value }))} className="field-input" />
                    </Field>
                  </div>
                  <Field label={t('tournaments.fields.location')}>
                    <input value={form.location} onChange={(e) => setForm((f) => ({ ...f, location: e.target.value }))} className="field-input" />
                  </Field>
                  <div className="flex gap-3 pt-2">
                    <button type="button" onClick={closeModal} disabled={submitting}
                      className="flex-1 py-2.5 bg-white/[0.06] hover:bg-white/[0.09] text-slate-300 font-medium rounded-xl disabled:opacity-50 transition-colors">
                      {t('common.cancel')}
                    </button>
                    <button type="submit" disabled={submitting}
                      className="flex-1 py-2.5 bg-green-500 hover:bg-green-400 disabled:bg-green-900 disabled:text-green-600 text-white rounded-xl font-semibold transition-all shadow-lg shadow-green-500/20">
                      {submitting ? t('common.creating') : t('tournaments.modal.create.next')}
                    </button>
                  </div>
                </form>
              </>
            )}

            {/* Step 2 — roster selection */}
            {modalStep === 2 && (
              <div className="space-y-4">
                <p className="text-sm text-slate-400">{t('tournaments.modal.create.step2Subtitle')}</p>

                {playersLoading && (
                  <div className="flex items-center justify-center py-8">
                    <div className="w-5 h-5 border-2 border-green-500 border-t-transparent rounded-full animate-spin" />
                  </div>
                )}

                {!playersLoading && teamPlayers.length === 0 && (
                  <p className="text-center text-slate-500 text-sm py-6">{t('common.noResults')}</p>
                )}

                {!playersLoading && teamPlayers.length > 0 && (
                  <div className="max-h-64 overflow-y-auto space-y-1.5 pr-1">
                    {teamPlayers.map((p) => {
                      const checked = selectedPlayerIds.has(p.id)
                      return (
                        <button
                          key={p.id}
                          type="button"
                          onClick={() => togglePlayer(p.id)}
                          className={[
                            'w-full flex items-center gap-3 px-3 py-2.5 rounded-xl border text-left transition-all',
                            checked
                              ? 'border-green-500/40 bg-green-500/10'
                              : 'border-white/[0.06] bg-white/[0.02] hover:border-white/[0.12]',
                          ].join(' ')}
                        >
                          <div className={[
                            'w-4 h-4 rounded border flex items-center justify-center flex-shrink-0 transition-colors',
                            checked ? 'bg-green-500 border-green-500' : 'border-white/[0.20]',
                          ].join(' ')}>
                            {checked && (
                              <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 10 8">
                                <path d="M1 4l3 3 5-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                              </svg>
                            )}
                          </div>
                          <span className="inline-flex items-center justify-center w-6 h-6 rounded-md bg-green-500/10 border border-green-500/20 font-mono text-xs font-bold text-green-400 flex-shrink-0">
                            {p.jerseyNumber}
                          </span>
                          <span className="flex-1 font-medium text-slate-200 text-sm">{p.firstName} {p.lastName}</span>
                          <span className={`px-1.5 py-0.5 rounded-full text-xs font-semibold border ${POSITION_COLORS[p.position]}`}>
                            {t(`roster.positions.${p.position}`)}
                          </span>
                        </button>
                      )
                    })}
                  </div>
                )}

                <div className="flex gap-3 pt-1">
                  <button type="button" onClick={() => { closeModal(); void load() }} disabled={savingRoster}
                    className="flex-1 py-2.5 bg-white/[0.06] hover:bg-white/[0.09] text-slate-300 font-medium rounded-xl disabled:opacity-50 transition-colors text-sm">
                    {t('tournaments.modal.create.skip')}
                  </button>
                  <button type="button" onClick={() => void handleFinishRoster()} disabled={savingRoster}
                    className="flex-1 py-2.5 bg-green-500 hover:bg-green-400 disabled:bg-green-900 disabled:text-green-600 text-white rounded-xl font-semibold transition-all shadow-lg shadow-green-500/20 text-sm">
                    {savingRoster ? t('tournaments.modal.create.savingRoster') : t('tournaments.modal.create.finish')}
                  </button>
                </div>
              </div>
            )}

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
