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
    <div className="min-h-screen bg-gray-950 px-4 py-12">
      <div className="max-w-5xl mx-auto">
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-bold text-white mb-2">{t('sportSelection.title')}</h1>
          <p className="text-gray-400">{t('sportSelection.subtitle')}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {SPORTS.map((sport) => {
            const disabled = !sport.available
            return (
              <button
                key={sport.id}
                type="button"
                onClick={() => handleSelect(sport)}
                disabled={disabled}
                className={[
                  'relative group rounded-2xl border p-6 text-left transition-all',
                  disabled
                    ? 'bg-gray-900/40 border-gray-800 opacity-60 cursor-not-allowed'
                    : 'bg-gray-900 border-gray-800 hover:border-violet-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-violet-900/30 cursor-pointer',
                ].join(' ')}
              >
                {disabled && (
                  <span className="absolute top-3 right-3 text-[10px] uppercase tracking-wider px-2 py-1 rounded-full bg-gray-800 text-gray-400">
                    {t('sportSelection.comingSoon')}
                  </span>
                )}
                <div className="text-5xl mb-4" aria-hidden="true">{sport.icon}</div>
                <div className="text-lg font-semibold text-white">
                  {t(`sportSelection.sports.${sport.id}`)}
                </div>
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}
