<!--
Sync Impact Report
- Version change: 0.0.0 -> 1.0.0
- Modified principles: N/A (initial project-specific constitution derived from template)
- Added sections: Simplicity and readability, architecture constraints, quality gates, documentation standards, workflow governance
- Removed sections: None
- Deferred items:
  - TODO(RATIFICATION_DATE): original project adoption date is not yet recorded.
-->

# Portfolio Website Constitution

## Core Principles

### I. Simplicity and Readability
This project MUST favor simple, readable solutions that can be understood by non-technical reviewers. Complexity MUST be justified with clear rationale, and every implementation MUST be explained in plain English without relying on hidden assumptions or undocumented shortcuts.

### II. Frontend and Backend Architecture
The application MUST use React with Vite for the frontend. Server-side logic MUST use Node.js with Express. Data persistence MUST use SQLite unless a documented exception is approved by the project maintainers. Architectural choices MUST prefer small, clear modules over broad abstractions or unnecessary indirection.

### III. Spec-First Delivery
Every feature MUST have a written specification before implementation begins. The specification MUST define the problem, expected user value, acceptance criteria, constraints, and validation steps. Work that does not have a clear written spec is not ready to build.

### IV. Quality Gates and Testing
The project MUST maintain at least 90% unit test coverage. Features MUST include automated tests that validate the intended behavior before merge. End-to-end testing MUST use Playwright for critical user flows, and any behavior change MUST include the corresponding test updates.

### V. Documentation and Reviewability
The README MUST explain every major file, component, route, and process in plain English. New features MUST include setup, purpose, usage, and validation guidance so reviewers and future maintainers can understand the system without reverse engineering it.

## Additional Constraints

The project MUST stay aligned with the following standards:
- Frontend: React with Vite
- Backend: Node.js with Express
- Database: SQLite
- Documentation MUST use plain English and explain steps in a way that a non-technical reviewer can follow
- Features MUST remain readable, maintainable, and easy to explain
- Exceptions to these standards MUST be documented and justified in writing

## Development Workflow

The following workflow is required for all work:
- Capture requirements in a written specification before code is created
- Implement in small, reviewable changes with clear responsibility boundaries
- Validate behavior with automated tests before completion
- Confirm that architecture, quality, and documentation requirements remain satisfied during review
- Update documentation when behavior, files, or steps materially change

## Governance

This constitution governs project decisions. Any change to these principles, quality requirements, architecture constraints, or documentation expectations MUST be recorded in this document, explained with rationale, and approved by the project maintainers before it is considered binding.

All contributors MUST verify compliance with this constitution during review. When requirements conflict, the most recent approved governance rule or explicit exception applies. When no written exception exists, this constitution governs.

**Version**: 1.0.0 | **Ratified**: TODO(RATIFICATION_DATE): original project adoption date is not yet recorded. | **Last Amended**: 2026-10-14
