import { validateContactSubmission } from '../src/validation/contact.js';

describe('validateContactSubmission', () => {
  it('returns a validation error for an empty name', () => {
    const result = validateContactSubmission({
      name: '   ',
      email: 'user@example.com',
      message: 'Hello there'
    });

    expect(result.ok).toBe(false);
    expect(result.errors).toContain('Name is required.');
  });

  it('returns a validation error for an invalid email', () => {
    const result = validateContactSubmission({
      name: 'User',
      email: 'invalid-email',
      message: 'Hello there'
    });

    expect(result.ok).toBe(false);
    expect(result.errors).toContain('Email is invalid.');
  });

  it('accepts valid submission data', () => {
    const result = validateContactSubmission({
      name: 'User Name',
      email: 'user@example.com',
      message: 'Hello from the site'
    });

    expect(result.ok).toBe(true);
    expect(result.normalized).toEqual({
      name: 'User Name',
      email: 'user@example.com',
      message: 'Hello from the site'
    });
  });
});
