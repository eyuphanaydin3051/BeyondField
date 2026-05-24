import { type FormEvent, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import type { AxiosError } from 'axios'
import apiClient from '../lib/apiClient'
import { useAppStore, type Team } from '../store/appStore'

interface ListResponse { status: 'success'; data: Team[] }
interface CreateResponse { status: 'success'; data: Team }
interface ErrorResponse { status: 'error'; message: string }

export default function TeamSelection() {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const setSelectedTeam = useAppStore((s) => s.setSelectedTeam)

  const [teams, setTeams] = useState<Team[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [modalOpen, setModalOpen] = useState(false)
  const [name, setName] = useState('')
  const [logoUrl, setLogoUrl] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [createError, setCreateError] = useState<string | null>(null)

  useEffect(() => {
    let cancelled = false
    const load = async () => {
      try {
        const res = await apiClient.get<ListResponse>('/api/teams')
        if (!cancelled) setTeams(res.data.data)
      } catch (err) {
        const axErr = err as AxiosError<ErrorResponse>
        if (!cancelled) setError(axErr.response?.data?.message ?? t('teamSelection.errors.loadFailed'))
      } finally {
        if (!cancelled) setLoading(false)
      }
    }
    load()
    return () => { cancelled = true }
  }, [t])

  const handleSelect = (team: Team) => {
    setSelectedTeam(team)
    navigate('/')
  }

  const closeModal = () => {
    setModalOpen(false)
    setName('')
    setLogoUrl('')
    setCreateError(null)
  }

  const handleCreate = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!name.trim()) { setCreateError(t('teamSelection.errors.nameRequired')); return }
    setSubmitting(true); setCreateError(null)
    try {
      const res = await apiClient.post<CreateResponse>('/api/teams', {
        name: name.trim(),
        logoUrl: logoUrl.trim() || null,
      })
      const team = res.data.data
      setTeams((prev) => [team, ...prev])
      closeModal()
      setSelectedTeam(team)
      navigate('/')
    } catch (err) {
      const axErr = err as AxiosError<ErrorResponse>
      setCreateError(axErr.response?.data?.message ?? t('teamSelection.errors.createFailed'))
    } finally { setSubmitting(false) }
  }

  return (
    <div className="min-h-screen bg-[#090c10] px-4 py-12">
      <div className="max-w-4xl mx-auto">
        {/* Header row */}
        <div className="flex items-end justify-between mb-8 gap-4">
          <div>
            <h1 className="text-2xl font-bold text-white tracking-tight">{t('teamSelection.title')}</h1>
            <p className="text-slate-400 text-sm mt-1">{t('teamSelection.subtitle')}</p>
          </div>
          <button
            type="button"
            onClick={() => setModalOpen(true)}
            className="flex items-center gap-2 px-4 py-2 bg-green-500 hover:bg-green-400 text-white font-semibold rounded-xl text-sm transition-all duration-200 shadow-lg shadow-green-500/20 flex-shrink-0"
          >
            <span aria-hidden="true">+</span>
            {t('teamSelection.createButton')}
          </button>
        </div>

        {loading && (
          <div className="flex items-center justify-center py-16">
            <div className="w-6 h-6 border-2 border-green-500 border-t-transparent rounded-full animate-spin" aria-label={t('common.loading')} />
          </div>
        )}

        {error && !loading && (
          <div className="px-4 py-3 bg-red-500/10 border border-red-500/30 rounded-xl text-red-400 text-center mb-6">
            {error}
          </div>
        )}

        {!loading && !error && teams.length === 0 && (
          <div className="flex flex-col items-center py-20 text-center">
            <div className="w-14 h-14 rounded-2xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-2xl mb-4">
              🏟️
            </div>
            <p className="text-slate-400 text-sm mb-4">{t('teamSelection.empty')}</p>
            <button
              type="button"
              onClick={() => setModalOpen(true)}
              className="px-4 py-2 bg-green-500 hover:bg-green-400 text-white font-semibold rounded-xl text-sm transition-colors shadow-lg shadow-green-500/20"
            >
              {t('teamSelection.createButton')}
            </button>
          </div>
        )}

        {!loading && teams.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {teams.map((team) => (
              <button
                key={team.id}
                type="button"
                onClick={() => handleSelect(team)}
                className="group bg-[#0f1117] border border-white/[0.08] hover:border-green-500/40 hover:-translate-y-1 hover:shadow-xl hover:shadow-green-900/20 transition-all duration-200 rounded-2xl p-5 text-left cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-green-500/10 border border-green-500/20 flex items-center justify-center overflow-hidden flex-shrink-0">
                    {team.logoUrl ? (
                      <img src={team.logoUrl} alt="" className="w-full h-full object-cover" />
                    ) : (
                      <span className="text-lg font-bold text-green-400">{team.name.charAt(0).toUpperCase()}</span>
                    )}
                  </div>
                  <div className="min-w-0">
                    <div className="text-base font-semibold text-slate-100 truncate">{team.name}</div>
                    <div className="text-xs text-slate-500 mt-0.5 group-hover:text-green-500 transition-colors">
                      {t('teamSelection.selectHint')} →
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Create Team Modal */}
      {modalOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center px-4"
          onClick={closeModal}
        >
          <div
            className="bg-[#0f1117] border border-white/[0.08] rounded-2xl shadow-2xl w-full max-w-md p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-lg font-bold text-white mb-5">{t('teamSelection.modal.title')}</h2>

            {createError && (
              <div className="mb-4 px-4 py-3 bg-red-500/10 border border-red-500/30 rounded-xl text-red-400 text-sm text-center">
                {createError}
              </div>
            )}

            <form onSubmit={handleCreate} className="space-y-4">
              <div>
                <label htmlFor="team-name" className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                  {t('teamSelection.modal.nameLabel')}
                </label>
                <input
                  id="team-name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder={t('teamSelection.modal.namePlaceholder')}
                  disabled={submitting}
                  className="field-input"
                />
              </div>
              <div>
                <label htmlFor="team-logo" className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                  {t('teamSelection.modal.logoLabel')}
                </label>
                <input
                  id="team-logo"
                  type="url"
                  value={logoUrl}
                  onChange={(e) => setLogoUrl(e.target.value)}
                  placeholder={t('teamSelection.modal.logoPlaceholder')}
                  disabled={submitting}
                  className="field-input"
                />
              </div>

              <div className="flex gap-3 pt-2">
                <button
                  type="button"
                  onClick={closeModal}
                  disabled={submitting}
                  className="flex-1 py-2.5 px-4 bg-white/[0.06] hover:bg-white/[0.09] text-slate-300 font-medium rounded-xl transition-colors disabled:opacity-50"
                >
                  {t('teamSelection.modal.cancel')}
                </button>
                <button
                  type="submit"
                  disabled={submitting}
                  className="flex-1 py-2.5 px-4 bg-green-500 hover:bg-green-400 disabled:bg-green-900 disabled:text-green-600 text-white font-semibold rounded-xl transition-all"
                >
                  {submitting ? t('teamSelection.modal.submitting') : t('teamSelection.modal.submit')}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
