import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import SportSelection from './pages/SportSelection'
import TeamSelection from './pages/TeamSelection'
import Dashboard from './pages/Dashboard'
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
            <Route path="/roster" element={<Dashboard />} />
            <Route path="/matches" element={<Dashboard />} />
            <Route path="/settings" element={<Dashboard />} />
          </Route>
        </Route>

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}
