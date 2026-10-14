# Research: Company Website

## Decision

- Use a simple React + Vite frontend with two routes: Home and Contact Us.
- Use an Express API endpoint to accept contact submissions from the browser.
- Use SQLite with `better-sqlite3` for durable storage of contact form submissions.
- Validate empty names and malformed emails on both the client and server so users receive clear errors without storing invalid input.

## Rationale

The feature is small and user-facing, so the simplest architecture with clear separation of concerns is a frontend app plus a backend API. This keeps the homepage interactive and the contact flow reliable while preserving maintainability and easy testing. SQLite is the required project database and is well suited to a small volume of message submissions. `better-sqlite3` provides straightforward synchronous database writes for a low-complexity contact form.

## Alternatives considered

- Single-page frontend-only form handling: rejected because the requirement explicitly calls for saving messages in a database and a backend API boundary is clearer and more reliable.
- No server-side validation: rejected because invalid data must be blocked with clear user feedback and storage must not accept empty names or malformed emails.
- More complex database or state management layers: rejected as unnecessary for a small company website with only one persistent entity.

## Notes

- The homepage carousel can be implemented using a simple timed rotation component controlled by React state.
- The contact page should preserve the form state on validation errors so the user can correct the form without losing content.
- Successful submissions should show a single confirmation state without reusing the form error state.
