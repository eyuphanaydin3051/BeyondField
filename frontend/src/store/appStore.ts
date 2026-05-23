import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export interface Team {
  id: string
  name: string
  logoUrl: string | null
  ownerId: string
  createdAt: string
}

export type SportId = 'ultimate' | 'football' | 'basketball' | 'volleyball'

interface AppState {
  selectedSport: SportId | null
  selectedTeam: Team | null
}

interface AppActions {
  setSelectedSport: (sport: SportId | null) => void
  setSelectedTeam: (team: Team | null) => void
  reset: () => void
}

type AppStore = AppState & AppActions

export const useAppStore = create<AppStore>()(
  persist(
    (set) => ({
      selectedSport: null,
      selectedTeam: null,
      setSelectedSport: (sport) => set({ selectedSport: sport }),
      setSelectedTeam: (team) => set({ selectedTeam: team }),
      reset: () => set({ selectedSport: null, selectedTeam: null }),
    }),
    { name: 'beyondfield-app' },
  ),
)
