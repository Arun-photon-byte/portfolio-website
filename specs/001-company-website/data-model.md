# Data Model: Company Website

## Core Entity

### ContactSubmission

Represents a valid message submitted to the company through the contact page.

| Field | Type | Description | Validation |
|-------|------|-------------|------------|
| id | integer | Unique record identifier | Auto-generated primary key |
| name | text | Visitor display name | Required, trimmed, non-empty |
| email | text | Visitor email address | Required, valid email format |
| message | text | Visitor message content | Required, trimmed, non-empty |
| created_at | datetime | When the submission was stored | Auto-populated |

## Storage Notes

- The database uses a single `contact_submissions` table.
- Name and email are required fields; message content is required to ensure the submission is meaningful.
- Invalid submissions are not written to the database.
- The contact form may keep a `status` in UI memory for success and error states, but the persisted model only stores the actual submission record.

## Relationships

- One contact submission belongs to one visitor, represented by the name and email entered on the form.
- No separate user account or customer profile is required for this feature.

## Validation Rules

- `name`: cannot be blank after trimming whitespace
- `email`: must match a valid email pattern and be non-empty
- `message`: cannot be blank after trimming whitespace
- `created_at`: set automatically at the time of insertion
