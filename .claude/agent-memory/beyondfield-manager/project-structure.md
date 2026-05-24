---
name: project-structure
description: BeyondField monorepo layout — frontend at /frontend/src, backend at /backend/src
metadata:
  type: project
---

BeyondField is a monorepo with two top-level directories: `frontend/` and `backend/`.

Frontend pages live at `frontend/src/pages/`. i18n locale files at `frontend/src/locales/tr.json` and `en.json`.

Backend source lives at `backend/src/` following strict Routes → Controllers → Services → Repositories layering.

**Why:** Paths like `src/pages/Roster.tsx` do NOT exist — always prefix with `frontend/` or `backend/`.

**How to apply:** When reading or editing any project file, always use `frontend/src/...` or `backend/src/...` as the path prefix.
