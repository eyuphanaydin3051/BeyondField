import { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import type { AxiosError } from 'axios'
import apiClient from '../lib/apiClient'
import { useAppStore } from '../store/appStore'

interface ErrorResponse { status: 'error'; message: string }
interface ImportResult { imported: number; skipped: number }

export default function Settings() {
  const { t, i18n } = useTranslation()
  const selectedTeam = useAppStore((s) => s.selectedTeam)
  const teamId = selectedTeam?.id

  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [importing, setImporting] = useState(false)
  const [importResult, setImportResult] = useState<ImportResult | null>(null)
  const [importError, setImportError] = useState<string | null>(null)
  const [csvExporting, setCsvExporting] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  // Load persisted settings on mount
  useEffect(() => {
    const load = async () => {
      try {
        const res = await apiClient.get<{ status: 'success'; data: { language?: string; theme?: string } }>('/api/me/settings')
        const saved = res.data.data
        if (saved?.language && saved.language !== i18n.language) {
          i18n.changeLanguage(saved.language)
        }
      } catch {
        // Settings endpoint may not exist yet — fail silently
      }
    }
    load()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const changeLanguage = async (lang: 'tr' | 'en') => {
    i18n.changeLanguage(lang)
    try {
      await apiClient.put('/api/me/settings', { language: lang })
    } catch {
      // Persist failure is non-critical — language already changed in UI
    }
  }

  const handleCsvExport = async () => {
    if (!teamId) return
    setCsvExporting(true)
    try {
      const response = await apiClient.get(`/api/teams/${teamId}/export/players.csv`, {
        responseType: 'blob',
      })
      const url = URL.createObjectURL(response.data as Blob)
      const a = document.createElement('a')
      a.href = url
      a.download = 'players.csv'
      a.click()
      URL.revokeObjectURL(url)
    } catch {
      // Export failed — no UI feedback needed for now
    } finally {
      setCsvExporting(false)
    }
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] ?? null
    setSelectedFile(file)
    setImportResult(null)
    setImportError(null)
  }

  const handleImport = async () => {
    if (!selectedFile || !teamId) return
    setImporting(true)
    setImportResult(null)
    setImportError(null)
    try {
      const formData = new FormData()
      formData.append('file', selectedFile)
      const res = await apiClient.post<{ status: 'success'; data: ImportResult }>(
        `/api/teams/${teamId}/import/discbase`,
        formData,
        { headers: { 'Content-Type': 'multipart/form-data' } },
      )
      setImportResult(res.data.data)
      setSelectedFile(null)
      if (fileInputRef.current) fileInputRef.current.value = ''
    } catch (err) {
      const ax = err as AxiosError<ErrorResponse>
      setImportError(ax.response?.data?.message ?? t('settings.import.error'))
    } finally {
      setImporting(false)
    }
  }

  return (
    <div className="max-w-2xl space-y-8">
      <h1 className="text-2xl font-bold text-white tracking-tight">{t('settings.title')}</h1>

      {/* General Section */}
      <section className="bg-[#0f1117] border border-white/[0.08] rounded-2xl p-6 space-y-5">
        <h2 className="text-xs font-bold uppercase tracking-widest text-slate-500">
          {t('settings.sections.general')}
        </h2>

        {/* Language */}
        <div className="flex items-center justify-between gap-4">
          <div>
            <div className="font-semibold text-white text-sm">{t('settings.language.label')}</div>
            <div className="text-sm text-slate-500 mt-0.5">
              {i18n.language === 'tr' ? t('settings.language.tr') : t('settings.language.en')}
            </div>
          </div>
          <div className="flex gap-2 flex-shrink-0">
            <button
              type="button"
              onClick={() => changeLanguage('tr')}
              className={[
                'px-4 py-2 rounded-xl text-sm font-semibold border transition-all duration-150',
                i18n.language === 'tr'
                  ? 'bg-green-500/10 border-green-500/30 text-green-300'
                  : 'bg-white/[0.04] border-white/[0.08] text-slate-400 hover:border-white/[0.14]',
              ].join(' ')}
            >
              {t('settings.language.tr')}
            </button>
            <button
              type="button"
              onClick={() => changeLanguage('en')}
              className={[
                'px-4 py-2 rounded-xl text-sm font-semibold border transition-all duration-150',
                i18n.language === 'en'
                  ? 'bg-green-500/10 border-green-500/30 text-green-300'
                  : 'bg-white/[0.04] border-white/[0.08] text-slate-400 hover:border-white/[0.14]',
              ].join(' ')}
            >
              {t('settings.language.en')}
            </button>
          </div>
        </div>
      </section>

      {/* Data Management Section */}
      <section className="bg-[#0f1117] border border-white/[0.08] rounded-2xl p-6 space-y-5">
        <h2 className="text-xs font-bold uppercase tracking-widest text-slate-500">
          {t('settings.sections.dataManagement')}
        </h2>

        {/* CSV Export */}
        <div className="flex items-center justify-between gap-4 pb-5 border-b border-white/[0.06]">
          <div>
            <div className="font-semibold text-white text-sm mb-1">{t('settings.export.title')}</div>
            <p className="text-sm text-slate-500">{t('settings.export.description')}</p>
          </div>
          <button
            type="button"
            onClick={handleCsvExport}
            disabled={csvExporting || !teamId}
            className="flex items-center gap-2 px-4 py-2 bg-white/[0.06] hover:bg-white/[0.09] border border-white/[0.08] hover:border-white/[0.14] text-slate-200 rounded-xl text-sm font-semibold transition-all disabled:opacity-50 disabled:cursor-not-allowed flex-shrink-0"
          >
            {csvExporting ? t('common.loading') : t('settings.export.button')}
          </button>
        </div>

        <div className="space-y-4">
          <div>
            <div className="font-semibold text-white text-sm mb-1">{t('settings.import.title')}</div>
            <p className="text-sm text-slate-500">{t('settings.import.description')}</p>
          </div>

          <div className="flex items-center gap-3 flex-wrap">
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className="px-4 py-2 bg-white/[0.06] hover:bg-white/[0.09] border border-white/[0.08] hover:border-white/[0.14] text-slate-200 rounded-xl text-sm font-semibold transition-all"
            >
              {t('settings.import.selectFile')}
            </button>
            <span className="text-sm text-slate-500 font-mono truncate max-w-xs">
              {selectedFile ? selectedFile.name : t('settings.import.noFile')}
            </span>
            <input
              ref={fileInputRef}
              type="file"
              accept=".json,application/json"
              className="hidden"
              onChange={handleFileChange}
            />
          </div>

          {selectedFile && (
            <button
              type="button"
              onClick={handleImport}
              disabled={importing}
              className="flex items-center gap-2 px-5 py-2.5 bg-green-500 hover:bg-green-400 disabled:bg-green-900 disabled:text-green-600 text-white rounded-xl font-semibold text-sm transition-all shadow-lg shadow-green-500/20 disabled:opacity-60"
            >
              {importing && (
                <svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                </svg>
              )}
              {importing ? t('settings.import.importing') : t('settings.import.submit')}
            </button>
          )}

          {importResult && (
            <div className="flex items-start gap-3 px-4 py-3 bg-green-500/10 border border-green-500/25 rounded-xl">
              <span className="text-green-400 font-bold text-lg leading-none mt-0.5" aria-hidden="true">✓</span>
              <p className="text-sm text-green-300">
                {t('settings.import.success', {
                  imported: importResult.imported,
                  skipped: importResult.skipped,
                })}
              </p>
            </div>
          )}

          {importError && (
            <div className="px-4 py-3 bg-red-500/10 border border-red-500/30 rounded-xl text-red-400 text-sm">
              {importError}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
