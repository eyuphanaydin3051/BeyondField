---
name: project-schema-facts
description: Critical Prisma schema facts that differ from the task spec or are non-obvious — prevents wrong field names in future code
metadata:
  type: project
---

Key schema facts verified from backend/prisma/schema.prisma:

- `FrisbeePlayerStat` unique key is `playerId` only (not a composite with teamId+sportType). There is no `teamId` or `sportType` column on this model.
- `FrisbeePlayerStat` uses `successfulPasses` (not `completions` for pass tracking), `callahans` (separate field), `completions` (catch stat). No `catchStat` field.
- `MatchPlayerStat` has `callahans` field (not in the task spec).
- `TournamentPlayerStat` has `callahans` and `matchesPlayed` fields.
- `PlayerPassEdge` unique key is `[fromPlayerId, toPlayerId]` — no `teamId` column at all.
- `UserSettings` enums: Theme (LIGHT/DARK/SYSTEM), Language (TR/EN), NameFormat (FIRST_LAST/LAST_FIRST), CaptureMode (SIMPLE/ADVANCED/PRO).
- `FrisbeeActionType` does NOT include `PICKUP` — the task spec mentioned it but it was never in schema.
- `Match` has `matchDate` (DateTime) as a required field — always needed on create.

**Why:** Task spec had slightly different field names vs. actual schema. Using wrong names causes TypeScript errors and runtime failures.

**How to apply:** Always read schema.prisma before writing repository or service code that references model fields.
