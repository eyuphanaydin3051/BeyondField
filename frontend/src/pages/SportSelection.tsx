import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useAppStore, type SportId } from '../store/appStore'

interface SportCard {
  id: SportId
  available: boolean
  icon: string
}

const SPORTS: SportCard[] = [
  { id: 'ultimate', available: true, icon: '🥏' },
  { id: 'football', available: false, icon: '⚽' },
  { id: 'basketball', available: false, icon: '🏀' },
  { id: 'volleyball', available: false, icon: '🏐' },
]

export default function SportSelection() {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const setSelectedSport = useAppStore((s) => s.setSelectedSport)

  const handleSelect = (sport: SportCard) => {
    if (!sport.available) return
    setSelectedSport(sport.id)
    navigate('/select-team')
  }

  return (
    <div className="min-h-screen bg-[#090c10] px-4 py-12 flex flex-col items-center justify-center">
      <div className="w-full max-w-4xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-green-500 mb-5 shadow-lg shadow-green-500/25">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M12 2L2 7l10 5 10-5-10-5z" />
              <path d="M2 17l10 5 10-5" />
              <path d="M2 12l10 5 10-5" />
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-white mb-2 tracking-tight">{t('sportSelection.title')}</h1>
          <p className="text-slate-400 text-base">{t('sportSelection.subtitle')}</p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {SPORTS.map((sport) => {
            const disabled = !sport.available
            return (
              <button
                key={sport.id}
                type="button"
                onClick={() => handleSelect(sport)}
                disabled={disabled}
                className={[
                  'relative group rounded-2xl border p-6 text-left transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500',
                  disabled
                    ? 'bg-[#0f1117]/50 border-white/[0.05] opacity-50 cursor-not-allowed'
                    : 'bg-[#0f1117] border-white/[0.08] hover:border-green-500/40 hover:-translate-y-1 hover:shadow-xl hover:shadow-green-900/20 cursor-pointer',
                ].join(' ')}
              >
                {disabled && (
                  <span className="absolute top-3 right-3 text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full bg-white/[0.06] text-slate-500 font-semibold">
                    {t('sportSelection.comingSoon')}
                  </span>
                )}
                <div className="text-4xl mb-4 leading-none" aria-hidden="true">{sport.icon}</div>
                <div className={`text-base font-semibold ${disabled ? 'text-slate-500' : 'text-slate-100'}`}>
                  {t(`sportSelection.sports.${sport.id}`)}
                </div>
                {!disabled && (
                  <div className="mt-1.5 text-xs text-green-500 font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    {t('sportSelection.select')} →
                  </div>
                )}
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}
