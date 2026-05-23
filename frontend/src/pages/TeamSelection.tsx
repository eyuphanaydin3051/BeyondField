import { type FormEvent, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import type { AxiosError } from 'axios'
import apiClient from '../lib/apiClient'
import { useAppStore, type Team } from '../store/appStore'

interface ListResponse {
  status: 'success'
  data: Team[]
}

interface CreateResponse {
  status: 'success'
  data: Team
}

interface ErrorResponse {
  status: 'error'
  message: string
}

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
    return () => {
      cancelled = true
    }
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
    if (!name.trim()) {
      setCreateError(t('teamSelection.errors.nameRequired'))
      return
    }
    setSubmitting(true)
    setCreateError(null)
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
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-950 px-4 py-12">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold text-white mb-2">{t('teamSelection.title')}</h1>
            <p className="text-gray-400">{t('teamSelection.subtitle')}</p>
          </div>
          <button
            type="button"
            onClick={() => setModalOpen(true)}
            className="px-4 py-2.5 bg-violet-600 hover:bg-violet-500 text-white font-semibold rounded-lg transition-colors"
          >
            {t('teamSelection.createButton')}
          </button>
        </div>

        {loading && (
          <p className="text-gray-400 text-center py-12">{t('teamSelection.loading')}</p>
        )}

        {error && !loading && (
          <div className="px-4 py-3 bg-red-900/40 border border-red-700/60 rounded-lg text-red-400 text-center mb-6">
            {error}
          </div>
        )}

        {!loading && !error && teams.length === 0 && (
          <p className="text-gray-500 text-center py-16">{t('teamSelection.empty')}</p>
        )}

        {!loading && teams.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {teams.map((team) => (
              <button
                key={team.id}
                type="button"
                onClick={() => handleSelect(team)}
                className="bg-gray-900 border border-gray-800 hover:border-violet-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-violet-900/30 transition-all rounded-2xl p-5 text-left cursor-pointer"
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl bg-gray-800 flex items-center justify-center overflow-hidden">
                    {team.logoUrl ? (
                      <img src={team.logoUrl} alt="" className="w-full h-full object-cover" />
                    ) : (
                      <span className="text-2xl text-gray-500">{team.name.charAt(0).toUpperCase()}</span>
                    )}
                  </div>
                  <div className="text-lg font-semibold text-white truncate">{team.name}</div>
                </div>
              </button>
            ))}
          </div>
        )}
      </div>

      {modalOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center px-4"
          onClick={closeModal}
        >
          <div
            className="bg-gray-900 border border-gray-800 rounded-2xl shadow-2xl w-full max-w-md p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-xl font-bold text-white mb-5">{t('teamSelection.modal.title')}</h2>

            {createError && (
              <div className="mb-4 px-4 py-2.5 bg-red-900/40 border border-red-700/60 rounded-lg text-red-400 text-sm text-center">
                {createError}
              </div>
            )}

            <form onSubmit={handleCreate} className="space-y-4">
              <div>
                <label htmlFor="team-name" className="block text-sm font-medium text-gray-300 mb-1.5">
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
                  className="w-full px-4 py-2.5 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-violet-500 transition disabled:opacity-50"
                />
              </div>
              <div>
                <label htmlFor="team-logo" className="block text-sm font-medium text-gray-300 mb-1.5">
                  {t('teamSelection.modal.logoLabel')}
                </label>
                <input
                  id="team-logo"
                  type="url"
                  value={logoUrl}
                  onChange={(e) => setLogoUrl(e.target.value)}
                  placeholder={t('teamSelection.modal.logoPlaceholder')}
                  disabled={submitting}
                  className="w-full px-4 py-2.5 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-violet-500 transition disabled:opacity-50"
                />
              </div>

              <div className="flex gap-3 pt-2">
                <button
                  type="button"
                  onClick={closeModal}
                  disabled={submitting}
                  className="flex-1 py-2.5 px-4 bg-gray-800 hover:bg-gray-700 text-white font-medium rounded-lg transition-colors disabled:opacity-50"
                >
                  {t('teamSelection.modal.cancel')}
                </button>
                <button
                  type="submit"
                  disabled={submitting}
                  className="flex-1 py-2.5 px-4 bg-violet-600 hover:bg-violet-500 disabled:bg-violet-800 text-white font-semibold rounded-lg transition-colors"
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
