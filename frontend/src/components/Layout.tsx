import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useAuthStore } from '../store/authStore'
import { useAppStore } from '../store/appStore'

interface NavItem {
  to: string
  key: 'dashboard' | 'roster' | 'tournaments' | 'matches' | 'settings'
  icon: string
}

const NAV_ITEMS: NavItem[] = [
  { to: '/', key: 'dashboard', icon: '#' },
  { to: '/roster', key: 'roster', icon: '#' },
  { to: '/tournaments', key: 'tournaments', icon: '#' },
  { to: '/matches', key: 'matches', icon: '#' },
  { to: '/settings', key: 'settings', icon: '#' },
]

export default function Layout() {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const logout = useAuthStore((s) => s.logout)
  const resetApp = useAppStore((s) => s.reset)
  const selectedTeam = useAppStore((s) => s.selectedTeam)
  const setSelectedTeam = useAppStore((s) => s.setSelectedTeam)

  const handleLogout = () => {
    logout()
    resetApp()
    navigate('/login')
  }

  const handleSwitchTeam = () => {
    setSelectedTeam(null)
    navigate('/select-team')
  }

  return (
    <div className="min-h-screen bg-gray-950 text-white flex">
      <aside className="w-60 bg-gray-900 border-r border-gray-800 flex flex-col">
        <div className="px-6 py-5 border-b border-gray-800">
          <div className="text-xl font-bold tracking-tight">BeyondField</div>
        </div>
        <nav className="flex-1 px-3 py-4 space-y-1">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.key}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) =>
                [
                  'flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors',
                  isActive
                    ? 'bg-violet-600/20 text-violet-300 border border-violet-700/40'
                    : 'text-gray-400 hover:text-white hover:bg-gray-800',
                ].join(' ')
              }
            >
              <span aria-hidden="true">{item.icon}</span>
              <span>{t(`layout.nav.${item.key}`)}</span>
            </NavLink>
          ))}
        </nav>
        <div className="p-3 border-t border-gray-800">
          <button
            type="button"
            onClick={handleLogout}
            className="w-full px-3 py-2 text-sm text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg transition-colors text-left"
          >
            {t('auth.logout')}
          </button>
        </div>
      </aside>

      <div className="flex-1 flex flex-col min-w-0">
        <header className="h-14 bg-gray-900 border-b border-gray-800 px-6 flex items-center justify-between">
          <div className="flex items-center gap-3 min-w-0">
            {selectedTeam?.logoUrl ? (
              <img src={selectedTeam.logoUrl} alt="" className="w-8 h-8 rounded-md object-cover" />
            ) : (
              <div className="w-8 h-8 rounded-md bg-gray-800 flex items-center justify-center text-sm text-gray-400">
                {selectedTeam?.name.charAt(0).toUpperCase() ?? '?'}
              </div>
            )}
            <div className="font-medium truncate">{selectedTeam?.name}</div>
          </div>
          <button
            type="button"
            onClick={handleSwitchTeam}
            className="text-sm text-gray-400 hover:text-white transition-colors"
          >
            {t('layout.topbar.switchTeam')}
          </button>
        </header>
        <main className="flex-1 p-6 overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
