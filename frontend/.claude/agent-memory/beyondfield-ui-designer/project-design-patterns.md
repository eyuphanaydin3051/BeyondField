---
name: project-design-patterns
description: Established BeyondField design system patterns — card backgrounds, borders, tab styles, status badges, score typography, and modal structure
metadata:
  type: project
---

## Card / Surface tokens
- Background: `bg-[#0f1117]`
- Default border: `border-white/[0.08]`
- Hover border (neutral): `hover:border-white/[0.14]`
- Hover border (green accent): `hover:border-green-500/30`
- Radius: `rounded-2xl`
- Padding: `p-5` (list cards), `p-6` (modals)

## Tab navigation (pill style)
- Active: `bg-green-500/20 text-green-400 border-green-500/40`
- Inactive: `bg-white/[0.04] text-slate-400 border-white/[0.06] hover:border-white/[0.12] hover:text-slate-300`
- Radius: `rounded-xl`, font: `text-sm font-semibold`

## Status badge color map
- upcoming / SCHEDULED: `bg-blue-500/15 text-blue-300 border-blue-500/25`
- active / IN_PROGRESS: `bg-green-500/15 text-green-300 border-green-500/25` (+ `animate-pulse` for IN_PROGRESS)
- past / FINISHED: `bg-white/[0.04] text-slate-500 border-white/[0.08]`

## Position badge color map
- HANDLER: `bg-blue-500/15 text-blue-300 border-blue-500/25`
- CUTTER: `bg-green-500/15 text-green-300 border-green-500/25`
- HYBRID: `bg-amber-500/15 text-amber-300 border-amber-500/25`

## Score / stat typography
- Large scoreline: `font-mono font-black text-xl text-white tabular-nums`
- Separator: `<span class="text-slate-700 font-light">–</span>`
- Stat numbers in tables: `font-mono tabular-nums` with per-column color (goals=green-400, assists=blue-400, blocks=amber-400, throwaways=red-400, callahans=purple-400)

## Jersey number badge
- Small (table/list): `w-6 h-6 rounded-md bg-green-500/10 border border-green-500/20 font-mono text-xs font-bold text-green-400`
- Medium (roster card): `w-7 h-7 rounded-lg` same palette
- Large (roster grid): `w-10 h-10 rounded-xl text-base font-black`

## Link-as-card pattern (TournamentList)
Wrap the entire card in `<Link to="...">`, add `group` class.
Delete button inside uses `onClick={(e) => { e.preventDefault(); handleDelete(id) }}` to prevent navigation.
Title gets `group-hover:text-green-400 transition-colors`.

## Modal structure
- Backdrop: `fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center px-4`
- Panel: `bg-[#0f1117] border border-white/[0.08] rounded-2xl shadow-2xl w-full max-w-sm p-6` (sm) or `max-w-md` (md)
- Stop propagation on panel click to prevent backdrop-dismiss

## Loading spinner
`w-6 h-6 border-2 border-green-500 border-t-transparent rounded-full animate-spin` centered with `flex items-center justify-center py-16`

## Empty state
`py-16 text-center` container, `inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-white/[0.04] border border-white/[0.08] text-2xl mb-4` icon, `text-slate-500 text-sm mb-4` message.

## Header gradient accent
Subtle top-left gradient overlay: `absolute inset-0 bg-gradient-to-br from-green-500/5 via-transparent to-transparent pointer-events-none` (green for matches, amber for tournaments).

## API data flow
All pages use a `load` callback wrapped in `useCallback([id, t])` called via `useEffect`. Cancelled flag pattern used in detail pages to prevent state updates after unmount.

## Translation key conventions
- `common.*` — shared labels (cancel, delete, back, creating, etc.)
- `matches.status.SCHEDULED|IN_PROGRESS|FINISHED` — status labels
- `roster.positions.HANDLER|CUTTER|HYBRID` — position labels reused across pages
- Detail page keys: `{entity}Detail.tabs.*`, `{entity}Detail.{section}.*`

## Stat aggregation note
`TournamentDetail` aggregates `playerStats[]` (per-match rows) client-side into per-player totals only because the API endpoint `/api/tournaments/:id` returns raw per-match stat rows rather than pre-aggregated tournament totals. If a `/api/tournaments/:id/stats` endpoint is added that returns aggregated rows, remove the client-side reduction loop. See [[project-design-patterns]].
