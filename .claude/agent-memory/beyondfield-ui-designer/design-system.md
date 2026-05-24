---
name: beyondfield-design-system
description: Established color palette, surface tokens, component patterns and design conventions for BeyondField UI
metadata:
  type: project
---

## Color System (established May 2026)

Primary brand accent: **green-500** (`#22c55e`) — replaces earlier violet/purple
- Active nav items: `bg-green-500/10 border-green-500/20 text-green-400`
- Primary buttons: `bg-green-500 hover:bg-green-400 shadow-lg shadow-green-500/20`
- Jersey number badges: `bg-green-500/10 border-green-500/20 text-green-400`
- Focus rings: `focus-visible:ring-2 focus-visible:ring-green-500`

**Why:** The sport (ultimate frisbee/field sports) calls for an athletic green rather than purple. Violet was default Vite template color with no intentional design decision.

## Surface Tokens (dark-only theme)

| Token | Value | Usage |
|---|---|---|
| Page background | `#090c10` (surface-950) | `bg-[#090c10]` |
| Card / sidebar | `#0f1117` (surface-900) | `bg-[#0f1117]` |
| Card border | `border-white/[0.08]` | Default card border |
| Subtle border | `border-white/[0.06]` | Dividers, nav borders |
| Hover border | `border-white/[0.14]` | Card hover states |
| Body text | `text-slate-100` / `text-slate-200` | Primary text |
| Secondary text | `text-slate-400` | Labels, meta |
| Muted text | `text-slate-500` | Empty states, placeholders |

## Shared CSS Utility

`.field-input` defined in `index.css` — use this on all `<input>`, `<select>`, `<textarea>` elements instead of inline `className` chains or `<style>` blocks.

## Accent Colors by Context

- Green: players / roster / primary action
- Blue: scheduled status / match dates
- Amber: tournaments / gold accents
- Red: errors / delete actions (text-red-400, bg-red-500/10, border-red-500/30)

## Typography

- Page titles: `text-2xl font-bold text-white tracking-tight`
- Section headers: `text-xs font-bold uppercase tracking-widest text-slate-500`
- Card labels: `text-xs font-semibold text-slate-400 uppercase tracking-wider`
- Stats values: `tabular-nums` for all numeric cells

## Component Patterns

- Cards: `bg-[#0f1117] border border-white/[0.08] rounded-2xl`
- Badges/pills: `px-2.5 py-0.5 rounded-full text-xs font-semibold border`
- Modals backdrop: `bg-black/60 backdrop-blur-sm`
- Modal container: `bg-[#0f1117] border border-white/[0.08] rounded-2xl shadow-2xl`
- Loading spinner: `w-5 h-5 border-2 border-green-500 border-t-transparent rounded-full animate-spin`
- Empty states: icon in `w-14 h-14 rounded-2xl bg-white/[0.04] border border-white/[0.08]` container

## Anti-patterns Eliminated

- No `<style>` blocks inside page components (`.input` class was spread across Roster, TournamentList, MatchList — replaced with `.field-input`)
- No `bg-gray-*` / `border-gray-*` — replaced with `bg-[#090c10]` / `bg-[#0f1117]` / `border-white/[0.08]`
- No `text-gray-*` — replaced with `text-slate-*`
- `#root` in index.css no longer has `width: 1126px`, `text-align: center`, or legacy h1/h2 overrides

**How to apply:** Always use the surface tokens and field-input utility above. Never reintroduce gray-* classes or inline style blocks.
