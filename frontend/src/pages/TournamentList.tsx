import { type FormEvent, type ReactNode, useCallback, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import type { AxiosError } from 'axios'
import apiClient from '../lib/apiClient'
import { useAppStore } from '../store/appStore'
import type { Tournament } from '../types'

interface ErrorResponse {
  status: 'error'
  message: string
}

interface CreateForm {
  name: string
  startDate: string
  endDate: string
  location: string
}

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
    setLoading(true)
    setError(null)
    try {
      const res = await apiClient.get<{ status: 'success'; data: Tournament[] }>(
        `/api/teams/${teamId}/tournaments`,
      )
      setItems(res.data.data)
    } catch (err) {
      const ax = err as AxiosError<ErrorResponse>
      setError(ax.response?.data?.message ?? t('tournaments.errors.loadFailed'))
    } finally {
      setLoading(false)
    }
  }, [teamId, t])

  useEffect(() => {
    load()
  }, [load])

  const openModal = () => {
    setForm(emptyForm)
    setFormError(null)
    setModalOpen(true)
  }
  const closeModal = () => {
    setModalOpen(false)
    setForm(emptyForm)
    setFormError(null)
  }

  const handleCreate = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!teamId) return
    setSubmitting(true)
    setFormError(null)
    try {
      await apiClient.post(`/api/teams/${teamId}/tournaments`, {
        name: form.name.trim(),
        startDate: form.startDate,
        endDate: form.endDate || null,
        location: form.location.trim() || null,
      })
      closeModal()
      await load()
    } catch (err) {
      const ax = err as AxiosError<ErrorResponse>
      setFormError(ax.response?.data?.message ?? t('tournaments.errors.createFailed'))
    } finally {
      setSubmitting(false)
    }
  }

  const handleDelete = async (id: string) => {
    if (!window.confirm(t('tournaments.modal.delete.message'))) return
    setDeletingId(id)
    try {
      await apiClient.delete(`/api/tournaments/${id}`)
      await load()
    } catch (err) {
      const ax = err as AxiosError<ErrorResponse>
      alert(ax.response?.data?.message ?? t('tournaments.errors.deleteFailed'))
    } finally {
      setDeletingId(null)
    }
  }

  const fmtDate = (iso: string) =>
    new Date(iso).toLocaleDateString(i18n.language === 'tr' ? 'tr-TR' : 'en-US')

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">{t('tournaments.list.title')}</h1>
        <button
          type="button"
          onClick={openModal}
          className="px-4 py-2 bg-violet-600 hover:bg-violet-500 text-white rounded-lg font-semibold"
        >
          {t('tournaments.list.createButton')}
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
      {!loading && !error && items.length === 0 && (
        <p className="text-gray-500 text-center py-12">{t('tournaments.list.empty')}</p>
      )}
      {!loading && items.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((tr) => (
            <div
              key={tr.id}
              className="bg-gray-900 border border-gray-800 rounded-2xl p-5 hover:border-violet-500 transition-colors"
            >
              <div className="flex justify-between items-start mb-3">
                <h3 className="font-bold text-lg">{tr.name}</h3>
                <button
                  type="button"
                  onClick={() => handleDelete(tr.id)}
                  disabled={deletingId === tr.id}
                  className="text-red-400 hover:text-red-200 text-sm disabled:opacity-50"
                >
                  {deletingId === tr.id ? t('common.deleting') : t('common.delete')}
                </button>
              </div>
              <div className="text-sm text-gray-400 space-y-1">
                <div>
                  {t('tournaments.fields.startDate')}: {fmtDate(tr.startDate)}
                </div>
                {tr.endDate && (
                  <div>
                    {t('tournaments.fields.endDate')}: {fmtDate(tr.endDate)}
                  </div>
                )}
                {tr.location && (
                  <div>
                    {t('tournaments.fields.location')}: {tr.location}
                  </div>
                )}
              </div>
            </div>
          ))}
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
            <h2 className="text-xl font-bold mb-5">{t('tournaments.modal.create.title')}</h2>
            {formError && (
              <div className="mb-4 px-4 py-2.5 bg-red-900/40 border border-red-700/60 rounded-lg text-red-400 text-sm text-center">
                {formError}
              </div>
            )}
            <form onSubmit={handleCreate} className="space-y-3">
              <Field label={t('tournaments.fields.name')}>
                <input
                  required
                  value={form.name}
                  onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                  className="input"
                />
              </Field>
              <Field label={t('tournaments.fields.startDate')}>
                <input
                  required
                  type="date"
                  value={form.startDate}
                  onChange={(e) => setForm((f) => ({ ...f, startDate: e.target.value }))}
                  className="input"
                />
              </Field>
              <Field label={t('tournaments.fields.endDate')}>
                <input
                  type="date"
                  value={form.endDate}
                  onChange={(e) => setForm((f) => ({ ...f, endDate: e.target.value }))}
                  className="input"
                />
              </Field>
              <Field label={t('tournaments.fields.location')}>
                <input
                  value={form.location}
                  onChange={(e) => setForm((f) => ({ ...f, location: e.target.value }))}
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
                  {submitting ? t('common.creating') : t('tournaments.modal.create.submit')}
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
