import { type FormEvent, type ReactNode, useCallback, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import type { AxiosError } from 'axios'
import apiClient from '../lib/apiClient'
import { useAppStore } from '../store/appStore'
import type { Tournament } from '../types'

interface ErrorResponse { status: 'error'; message: string }

interface CreateForm { name: string; startDate: string; endDate: string; location: string }
const emptyForm: CreateForm = { name: '', startDate: '', endDate: '', location: '' }

export default function TournamentList() {
  const { t, i18n } = useTranslation()
  const selectedTeam = useAppStore((s) => s.selectedTeam)
  const teamId = selectedTeam?.id

  const [items, setItems] = useState<Tournament[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [modalOpen, setModalOpen] = useState(false)
  const [form, setForm] = useState<CreateForm>(emptyForm)
  const [submitting, setSubmitting] = useState(false)
  const [formError, setFormError] = useState<string | null>(null)
  const [deletingId, setDeletingId] = useState<string | null>(null)

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

  const openModal = () => { setForm(emptyForm); setFormError(null); setModalOpen(true) }
  const closeModal = () => { setModalOpen(false); setForm(emptyForm); setFormError(null) }

  const handleCreate = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!teamId) return
    setSubmitting(true); setFormError(null)
    try {
      await apiClient.post(`/api/teams/${teamId}/tournaments`, {
        name: form.name.trim(),
        startDate: form.startDate,
        endDate: form.endDate || null,
        location: form.location.trim() || null,
      })
      closeModal(); await load()
    } catch (err) {
      const ax = err as AxiosError<ErrorResponse>
      setFormError(ax.response?.data?.message ?? t('tournaments.errors.createFailed'))
    } finally { setSubmitting(false) }
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
            <h2 className="text-lg font-bold text-white mb-5">{t('tournaments.modal.create.title')}</h2>
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
                  {submitting ? t('common.creating') : t('tournaments.modal.create.submit')}
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
