---
name: project-integration-patterns
description: Established API integration patterns, endpoint conventions, and data flow conventions in the BeyondField frontend
metadata:
  type: project
---

## API Client
- `frontend/src/lib/apiClient.ts` — axios instance, baseURL from `VITE_API_URL` env var, Bearer token injected from `localStorage.getItem('token')` in request interceptor.
- Never use `fetch()` or raw `axios` — always import `apiClient` from `../lib/apiClient`.

## Response envelope
All backend endpoints return `{ status: 'success' | 'error', data: T, message?: string }`.
Type responses as `apiClient.get<{ status: 'success'; data: T }>('/api/...')`.

## Auth token
Stored in `localStorage` under key `'token'`. Injected automatically by apiClient interceptor.

## State management
- `useAppStore` from `frontend/src/store/appStore` — Zustand store
- `selectedTeam` (has `.id` field) is accessed as `useAppStore((s) => s.selectedTeam)`
- `selectedTeam?.id` is the `teamId` used in all team-scoped endpoints

## Established endpoint paths (verified in use)
- `GET /api/matches/:id` → match detail, response shape `{ data: { match, events, playerStats } }` or `{ data: matchObj }`
- `GET /api/teams/:teamId/players` → player list, `{ data: Player[] }`
- `POST /api/teams/:teamId/players` → create player
- `PUT /api/players/:id` → update player
- `DELETE /api/players/:id` → delete player
- `GET /api/teams/:teamId/leaderboard?sortBy=&mode=` → leaderboard, `{ data: LeaderboardResponse }`
- `POST /api/teams/:teamId/import/discbase` → multipart JSON import
- `GET /api/teams/:teamId/export/players.csv` → blob download (responseType: 'blob')
- `POST /api/matches/:matchId/events` → record tracking event
- `DELETE /api/matches/:matchId/events/last` → undo last event
- `POST /api/matches/:matchId/points/archive` → archive a completed point
- `POST /api/matches/:matchId/finish` → finish match, redirects to /matches/:id
- `POST /api/matches/:matchId/start` → start match (called when status === 'SCHEDULED')
- `GET /api/players/:id/career` → player career stats `{ data: CareerData }`
- `GET /api/players/:id/pass-network` → pass network `{ data: PassNetworkEntry[] }`
- `GET /api/me/settings` → user settings `{ data: { language?, theme? } }`
- `PUT /api/me/settings` → persist user settings `{ language?, theme? }`

## Routing pattern (App.tsx)
- Protected routes inside `<ProtectedRoute requireSport requireTeam>` → `<Layout>` wrapper
- Full-screen pages (e.g. MatchTracking) sit outside `<Layout>` but still inside the ProtectedRoute
- `/players/:id` → `PlayerDetail` page — inside Layout

## i18n conventions
- All locale files at `frontend/src/locales/tr.json` and `frontend/src/locales/en.json`
- Keys are nested objects; component uses `t('namespace.key')`
- `player.*` namespace added for PlayerDetail page

## MatchTracking specifics
- `useParams<{ id: string }>()` gives `matchId`
- Initial data load (match + players) is already implemented in the useEffect
- `POST /api/matches/:matchId/start` is called immediately after load if `matchData.status === 'SCHEDULED'`
- API stubs (recordEventApi, undoEventApi, archivePointApi, finishMatchApi) are module-level async functions that take matchId as first param

## Settings specifics
- `GET /api/me/settings` is called on mount; failure is silently swallowed (endpoint may not exist)
- `PUT /api/me/settings` is called after `i18n.changeLanguage()` — UI change is not blocked on API response
- CSV export uses `responseType: 'blob'` + programmatic `<a>` click pattern
