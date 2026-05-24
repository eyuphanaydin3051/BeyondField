---
name: project-match-tracking
description: MatchTracking page architecture — state machine, phase flow, API stubs, and routing decisions
metadata:
  type: project
---

MatchTracking page (`/matches/:id/track`) was built as a full-screen 3-phase state machine page at `frontend/src/pages/MatchTracking.tsx`.

**Why:** Live match tracking is the most complex page in BeyondField; it must be full-screen (no sidebar/Layout), own its entire state, and never calculate stats in the UI layer.

**How to apply:** When modifying or extending this page, preserve the phase ordering (roster → start_mode → tracking), keep all `finishPoint` / `handleScore` / `handleCallahan` / `handleOpponentScore` `useCallback` dependencies updated, and never add business logic — only API calls via stubs.

Key architectural decisions:
- Route placed OUTSIDE `<Layout />` wrapper but INSIDE `requireSport requireTeam` ProtectedRoute guard in App.tsx
- `finishPoint` useCallback is declared BEFORE the handlers that reference it (avoids temporal dead zone lint warnings)
- Pull timer uses `setInterval` in a `useEffect` keyed on `pullTimerRunning`, cleaned up on unmount
- All API calls are stub functions (`recordEventApi`, `undoEventApi`, `archivePointApi`, `finishMatchApi`) — Agent 3 fills them in
- `selectedTeam.id` drives the players API call; `matchId` from `useParams` drives the match API call
- History stack enables Undo by storing snapshots of `(gameMode, activePasserId, isPullPhase, homeScore, awayScore)` before each action

i18n keys live under `"tracking"` namespace in both `tr.json` and `en.json`.
