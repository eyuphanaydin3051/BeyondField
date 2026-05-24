import { useRef, useState } from 'react'
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
  const fileInputRef = useRef<HTMLInputElement>(null)

  const changeLanguage = (lang: 'tr' | 'en') => {
    i18n.changeLanguage(lang)
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
      <div>
        <h1 className="text-2xl font-bold">{t('settings.title')}</h1>
      </div>

      {/* General Section */}
      <section className="bg-gray-900 border border-gray-800 rounded-2xl p-6 space-y-5">
        <h2 className="text-sm font-semibold uppercase tracking-widest text-gray-500">
          {t('settings.sections.general')}
        </h2>

        {/* Language */}
        <div className="flex items-center justify-between">
          <div>
            <div className="font-medium text-white">{t('settings.language.label')}</div>
            <div className="text-sm text-gray-500 mt-0.5">
              {i18n.language === 'tr' ? t('settings.language.tr') : t('settings.language.en')}
            </div>
          </div>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => changeLanguage('tr')}
              className={[
                'px-4 py-2 rounded-lg text-sm font-medium border transition-colors',
                i18n.language === 'tr'
                  ? 'bg-violet-600/20 border-violet-500/50 text-violet-300'
                  : 'bg-gray-800 border-gray-700 text-gray-400 hover:border-gray-600',
              ].join(' ')}
            >
              {t('settings.language.tr')}
            </button>
            <button
              type="button"
              onClick={() => changeLanguage('en')}
              className={[
                'px-4 py-2 rounded-lg text-sm font-medium border transition-colors',
                i18n.language === 'en'
                  ? 'bg-violet-600/20 border-violet-500/50 text-violet-300'
                  : 'bg-gray-800 border-gray-700 text-gray-400 hover:border-gray-600',
              ].join(' ')}
            >
              {t('settings.language.en')}
            </button>
          </div>
        </div>
      </section>

      {/* Data Management Section */}
      <section className="bg-gray-900 border border-gray-800 rounded-2xl p-6 space-y-5">
        <h2 className="text-sm font-semibold uppercase tracking-widest text-gray-500">
          {t('settings.sections.dataManagement')}
        </h2>

        <div className="space-y-4">
          <div>
            <div className="font-medium text-white mb-1">{t('settings.import.title')}</div>
            <p className="text-sm text-gray-500">{t('settings.import.description')}</p>
          </div>

          <div className="flex items-center gap-3 flex-wrap">
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className="px-4 py-2 bg-gray-800 hover:bg-gray-700 border border-gray-700 hover:border-gray-600 text-white rounded-lg text-sm font-medium transition-colors"
            >
              {t('settings.import.selectFile')}
            </button>
            <span className="text-sm text-gray-500">
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
              className="px-5 py-2.5 bg-violet-600 hover:bg-violet-500 disabled:bg-violet-800 text-white rounded-lg font-semibold text-sm transition-colors disabled:opacity-60"
            >
              {importing ? t('settings.import.importing') : t('settings.import.submit')}
            </button>
          )}

          {importResult && (
            <div className="flex items-start gap-3 px-4 py-3 bg-green-900/30 border border-green-700/40 rounded-lg">
              <span className="text-green-400 text-lg">✓</span>
              <p className="text-sm text-green-300">
                {t('settings.import.success', {
                  imported: importResult.imported,
                  skipped: importResult.skipped,
                })}
              </p>
            </div>
          )}

          {importError && (
            <div className="px-4 py-3 bg-red-900/40 border border-red-700/60 rounded-lg text-red-400 text-sm">
              {importError}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
