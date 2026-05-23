import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { useAuthStore } from '../store/authStore'
import { useAppStore } from '../store/appStore'

interface ProtectedRouteProps {
  requireSport?: boolean
  requireTeam?: boolean
}

export default function ProtectedRoute({
  requireSport = false,
  requireTeam = false,
}: ProtectedRouteProps) {
  const token = useAuthStore((s) => s.token)
  const selectedSport = useAppStore((s) => s.selectedSport)
  const selectedTeam = useAppStore((s) => s.selectedTeam)
  const location = useLocation()

  if (!token) {
    return <Navigate to="/login" replace state={{ from: location }} />
  }

  if (requireSport && !selectedSport) {
    return <Navigate to="/select-sport" replace />
  }

  if (requireTeam && !selectedTeam) {
    return <Navigate to="/select-team" replace />
  }

  return <Outlet />
}
