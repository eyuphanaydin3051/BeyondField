import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import SportSelection from './pages/SportSelection'
import TeamSelection from './pages/TeamSelection'
import Dashboard from './pages/Dashboard'
import Roster from './pages/Roster'
import TournamentList from './pages/TournamentList'
import TournamentDetail from './pages/TournamentDetail'
import MatchList from './pages/MatchList'
import MatchDetail from './pages/MatchDetail'
import MatchTracking from './pages/MatchTracking'
import PlayerDetail from './pages/PlayerDetail'
import Settings from './pages/Settings'
import Layout from './components/Layout'
import ProtectedRoute from './routes/ProtectedRoute'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route element={<ProtectedRoute />}>
          <Route path="/select-sport" element={<SportSelection />} />
        </Route>

        <Route element={<ProtectedRoute requireSport />}>
          <Route path="/select-team" element={<TeamSelection />} />
        </Route>

        <Route element={<ProtectedRoute requireSport requireTeam />}>
          <Route element={<Layout />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="/roster" element={<Roster />} />
            <Route path="/tournaments" element={<TournamentList />} />
            <Route path="/tournaments/:id" element={<TournamentDetail />} />
            <Route path="/matches" element={<MatchList />} />
            <Route path="/matches/:id" element={<MatchDetail />} />
            <Route path="/players/:id" element={<PlayerDetail />} />
            <Route path="/settings" element={<Settings />} />
          </Route>
          {/* Full-screen page, intentionally outside <Layout /> */}
          <Route path="/matches/:id/track" element={<MatchTracking />} />
        </Route>

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}
