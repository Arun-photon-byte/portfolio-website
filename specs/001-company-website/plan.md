# Implementation Plan: Company Website

**Branch**: `001-company-website` | **Date**: 2026-10-14 | **Spec**: ../spec.md

**Input**: Feature specification from `/specs/001-company-website/spec.md`

## Summary

This feature delivers a simple two-page company website with a welcoming homepage and a contact form page. The site uses a React + Vite frontend for the user experience, an Express API for form submission, and a SQLite database stored through `better-sqlite3` so valid messages persist and invalid entries are rejected with clear feedback.

## Technical Context

**Language/Version**: JavaScript on Node.js 18+ for the server and React app tooling; frontend uses Vite-based React.

**Primary Dependencies**: React, Vite, Express, `better-sqlite3`, Vitest, Playwright.

**Storage**: SQLite database with a `contact_submissions` table used to persist the visitor name, email, message, and timestamp.

**Testing**: Vitest for unit tests with coverage reporting; Playwright for end-to-end flow validation across homepage and contact form interactions.

**Target Platform**: Browser-based web application for desktop and mobile-friendly layouts.

**Project Type**: Web application

**Performance Goals**: Homepage renders quickly for first-time visitors; contact submission completes without visible delays on a local development environment.

**Constraints**: Maintain simple architecture, provide clear validation messages, and persist only valid submissions.

**Scale/Scope**: Small company website with two pages, basic navigation, and contact-message persistence for low-to-moderate visitor volume.

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

- Pass: Simplicity and readability. This feature is intentionally limited to two pages, a clear homepage, and a direct contact flow.
- Pass: Frontend and backend architecture. The plan follows the required React + Vite frontend and Node.js + Express backend, with SQLite database storage.
- Pass: Spec-first delivery. The feature has a written spec and acceptance criteria approved as the design basis.
- Pass: Quality gates and testing. The plan includes Vitest coverage and Playwright end-to-end validation for the required user flows.
- Pass: Documentation and reviewability. The implementation must include plain-English README guidance for navigating files, setup, and validation.

## Project Structure

### Documentation (this feature)

```text
specs/001-company-website/
├── plan.md              # This file (/speckit-plan command output)
├── research.md          # Phase 0 output (/speckit-plan command)
├── data-model.md        # Phase 1 output (/speckit-plan command)
├── quickstart.md        # Phase 1 output (/speckit-plan command)
├── contracts/           # Phase 1 output (/speckit-plan command)
└── tasks.md             # Phase 2 output (/speckit-tasks command - NOT created by /speckit-plan)
```

### Source Code (repository root)

```text
frontend/
├── src/
│   ├── components/
│   ├── pages/
│   ├── hooks/
│   └── services/
├── public/
├── tests/
└── vite.config.js

backend/
├── src/
│   ├── api/
│   ├── db/
│   ├── validation/
│   └── services/
├── tests/
├── app.js
└── server.js

db/
├── schema.sql
└── init.js
```

**Structure Decision**: The implementation will use a simple two-part web app layout with separate frontend and backend directories. The frontend handles the homepage and contact page experience; the backend owns request validation, database writes, and persistence logic.
