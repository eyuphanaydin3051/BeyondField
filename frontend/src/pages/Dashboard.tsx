import { useTranslation } from 'react-i18next'
import { useAppStore } from '../store/appStore'
import { useAuthStore } from '../store/authStore'

export default function Dashboard() {
  const { t } = useTranslation()
  const selectedTeam = useAppStore((s) => s.selectedTeam)
  const user = useAuthStore((s) => s.user)

  return (
    <div className="max-w-5xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-1">{t('dashboard.title')}</h1>
        <p className="text-gray-400">
          {t('dashboard.welcome')}
          {user?.email ? `, ${user.email}` : ''}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-6">
        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
          <div className="text-xs uppercase tracking-wider text-gray-500 mb-2">
            {t('dashboard.currentTeam')}
          </div>
          <div className="text-2xl font-bold text-white">{selectedTeam?.name}</div>
        </div>
      </div>

      <div className="bg-gray-900 border border-gray-800 rounded-2xl p-10 text-center text-gray-500">
        {t('dashboard.noStats')}
      </div>
    </div>
  )
}
