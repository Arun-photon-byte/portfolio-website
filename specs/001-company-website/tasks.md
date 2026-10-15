# Tasks: Company Website

**Input**: Design documents from `/specs/001-company-website/`

**Prerequisites**: plan.md (required), spec.md (required for user stories), research.md, data-model.md, contracts/

**Tests**: Vitest and Playwright are explicitly required for this feature.

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project initialization and shared tooling

- [ ] T001 Create application structure in `frontend/src/`, `backend/src/`, `backend/tests/`, `db/`, and `tests/e2e/` per implementation plan
- [ ] T002 Initialize the Vite React frontend and add the required dependencies in `frontend/package.json` and `frontend/vite.config.js`
- [ ] T003 Initialize the Express backend and add `better-sqlite3`, `cors`, and shared server dependencies in `backend/package.json` and `backend/server.js`
- [ ] T004 [P] Configure Vitest and Playwright in `frontend/vite.config.js`, `playwright.config.js`, and package-level test scripts in `package.json`

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core infrastructure that MUST be complete before any user story can be implemented

**⚠️ CRITICAL**: No user story work can begin until this phase is complete

- [ ] T005 Create the SQLite schema for contact submissions in `db/schema.sql` and initialize the database in `db/init.js`
- [ ] T006 Implement the shared Express app bootstrap, request parsing, and JSON error handling in `backend/src/app.js`
- [ ] T007 Implement the database access layer for storing valid contact submissions in `backend/src/db/contactStore.js`
- [ ] T008 Implement reusable validation rules for `name`, `email`, and `message` in `backend/src/validation/contact.js`
- [ ] T009 [P] Implement the API route registration and server startup flow in `backend/src/api/contact.js` and `backend/server.js`
- [ ] T010 [P] Add a shared frontend API client for posting contact submissions in `frontend/src/services/contactApi.js`

**Checkpoint**: Foundation ready - user story implementation can now begin in parallel

---

## Phase 3: User Story 1 - Visit the company homepage (Priority: P1) 🎯 MVP

**Goal**: Deliver a welcoming homepage with a working navigation path to the contact page.

**Independent Test**: A visitor can open the homepage, observe the carousel, and navigate to Contact Us without errors.

### Tests for User Story 1

- [ ] T011 [P] [US1] Add a homepage render test for welcome content and navigation in `frontend/src/__tests__/HomePage.test.jsx`
- [ ] T012 [P] [US1] Add a Playwright homepage test covering the carousel and Contact Us navigation in `tests/e2e/homepage.spec.js`

### Implementation for User Story 1

- [ ] T013 [P] [US1] Create the homepage layout and welcome content in `frontend/src/pages/HomePage.jsx`
- [ ] T014 [P] [US1] Create the rotating image carousel component in `frontend/src/components/ImageCarousel.jsx`
- [ ] T015 [US1] Add the top navigation bar with a Contact Us link in `frontend/src/components/NavBar.jsx`
- [ ] T016 [US1] Connect the homepage route and application shell in `frontend/src/App.jsx` and `frontend/src/main.jsx`

**Checkpoint**: At this point, User Story 1 should be fully functional and testable independently

---

## Phase 4: User Story 2 - Submit a valid contact message (Priority: P1)

**Goal**: Allow visitors to submit a valid contact form and see a Thank you confirmation.

**Independent Test**: A visitor can complete the form with valid values, submit it, and receive confirmation while the submission is persisted.

### Tests for User Story 2

- [ ] T017 [P] [US2] Add a contract test for `POST /api/contact` in `backend/tests/contact.api.test.js`
- [ ] T018 [P] [US2] Add a Playwright end-to-end success-flow test in `tests/e2e/contact-form.spec.js`

### Implementation for User Story 2

- [ ] T019 [P] [US2] Create the Contact Us page form UI and field layout in `frontend/src/pages/ContactPage.jsx`
- [ ] T020 [US2] Implement the form submission state, success handling, and confirmation message in `frontend/src/pages/ContactPage.jsx`
- [ ] T021 [US2] Implement the Express `POST /api/contact` endpoint to accept `name`, `email`, and `message` and return success payloads in `backend/src/api/contact.js`
- [ ] T022 [US2] Implement the contact submission service that validates required fields and calls the database layer in `backend/src/services/contactService.js`
- [ ] T023 [US2] Persist valid contact submissions in SQLite via `backend/src/db/contactStore.js` using the `ContactSubmission` schema from `db/schema.sql`

**Checkpoint**: At this point, User Story 2 should be fully functional and testable independently

---

## Phase 5: User Story 3 - Correct invalid form entries (Priority: P1)

**Goal**: Prevent invalid submissions and show clear user-facing errors for empty names and invalid emails.

**Independent Test**: A visitor can submit blank or malformed values and see precise validation errors without a successful confirmation.

### Tests for User Story 3

- [ ] T024 [P] [US3] Add frontend validation tests for empty name and bad email cases in `frontend/src/__tests__/contactValidation.test.js`
- [ ] T025 [P] [US3] Add backend validation tests for the `POST /api/contact` failure cases in `backend/tests/contactValidation.test.js`

### Implementation for User Story 3

- [ ] T026 [P] [US3] Implement client-side form validation for required name and valid email format in `frontend/src/validation/contactForm.js`
- [ ] T027 [US3] Add inline error rendering and form reset behavior on invalid submission in `frontend/src/pages/ContactPage.jsx`
- [ ] T028 [US3] Enforce the backend validation rules: `name` must be non-empty after trimming, `email` must be valid, and `message` must not be empty in `backend/src/validation/contact.js`
- [ ] T029 [US3] Guard the database write path so invalid payloads are rejected before persistence in `backend/src/services/contactService.js`

**Checkpoint**: At this point, User Story 3 should be fully functional and testable independently

---

## Phase 6: Polish & Cross-Cutting Concerns

**Purpose**: Final quality improvements and shared validation

- [ ] T030 [P] Add or update the project README with plain-English setup and file explanations in `README.md`
- [ ] T031 [P] Run the required Vitest coverage pass and confirm the 90% coverage threshold in `frontend/src/` and `backend/tests/`
- [ ] T032 [P] Run the Playwright end-to-end validation scenarios from `specs/001-company-website/quickstart.md` and confirm all flows succeed
- [ ] T033 Clean up code quality issues, ensure error messages are clear, and verify the success path remains easy to explain to non-technical reviewers

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies - can start immediately
- **Foundational (Phase 2)**: Depends on Setup completion - BLOCKS all user stories
- **User Stories (Phase 3-5)**: All depend on Foundational completion and are independently testable when complete
- **Polish (Phase 6)**: Depends on all user stories being complete

### User Story Dependencies

- **User Story 1 (US1)**: Can start after Phase 2; no dependency on other stories
- **User Story 2 (US2)**: Can start after Phase 2; no dependency on other stories
- **User Story 3 (US3)**: Can start after Phase 2; no dependency on other stories

### Parallel Opportunities

- T004 can run in parallel with other setup tasks
- T009 and T010 can run after the foundational database and validation work is in place
- US1 tests can run alongside US1 implementation tasks
- US2 tests can run alongside US2 implementation tasks
- US3 tests can run alongside US3 implementation tasks
- Final validation tasks T031 and T032 can run concurrently once all story work is complete

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1: Setup
2. Complete Phase 2: Foundational
3. Complete Phase 3: User Story 1
4. Validate homepage flow and navigation
5. Stop and confirm the minimal site is usable before adding the contact flow

### Incremental Delivery

1. Build the homepage and navigation experience.
2. Add the working contact submission flow with valid inputs.
3. Add validation and error handling for invalid data.
4. Finalize documentation and run coverage and end-to-end validation.

### Story Completion Rule

Each user story must be independently testable before the next priority is considered complete. This allows the first user story to be delivered as an MVP while keeping the rest of the feature independently implementable.
