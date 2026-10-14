# Quickstart: Company Website Validation

## Prerequisites

- Node.js 18+
- npm
- SQLite available for local development

## Setup

1. Install dependencies.
2. Start the backend API server.
3. Start the Vite frontend development server.
4. Open the homepage and navigate to the contact page.

## Validation Scenarios

### Homepage flow

- Visit the homepage.
- Confirm a welcome message is visible.
- Confirm the carousel rotates through multiple images.
- Confirm the navigation menu includes a link to the contact page.
- Click the Contact Us link and verify navigation succeeds.

### Successful contact submission

- Enter a valid name, email, and message.
- Submit the form.
- Confirm the UI shows a clear Thank you confirmation.
- Verify the submission is stored in SQLite.

### Invalid submission flow

- Submit with an empty name.
- Confirm the form shows a clear error and does not store the submission.
- Submit with a malformed email.
- Confirm the form shows a clear email validation error and does not store the submission.

## Test Commands

- Run unit tests: `npm run test -- --coverage`
- Run end-to-end tests: `npm run test:e2e`

## Expected Outcomes

- Valid submissions are accepted and saved.
- Invalid submissions are rejected with visible errors.
- The homepage and contact flow work as a complete user journey.
