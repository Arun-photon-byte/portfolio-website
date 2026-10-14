# Contact API Contract

## Endpoint

`POST /api/contact`

## Purpose

Accept a visitor message for storage and return success or validation status.

## Request Body

```json
{
  "name": "Jane Doe",
  "email": "jane@example.com",
  "message": "Hello, I would like to learn more about your services."
}
```

## Success Response

**Status**: 201 Created

```json
{
  "success": true,
  "message": "Thank you for your message."
}
```

## Validation Error Response

**Status**: 400 Bad Request

```json
{
  "success": false,
  "errors": [
    "Name is required.",
    "Email is invalid."
  ]
}
```

## Server Error Response

**Status**: 500 Internal Server Error

```json
{
  "success": false,
  "message": "Unable to save your message right now. Please try again later."
}
```

## Notes

- The backend validates required fields before database writes.
- Empty names and malformed emails must return a clear error response.
- Valid messages are persisted, and the frontend shows a confirmation state after a successful response.
