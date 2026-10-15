import { validateContactForm } from '../validation/contactForm.js';

describe('validateContactForm', () => {
  it('reports an empty name error', () => {
    const result = validateContactForm({
      name: '   ',
      email: 'person@example.com',
      message: 'Hello there'
    });

    expect(result.isValid).toBe(false);
    expect(result.errors.name).toBe('Name is required.');
  });

  it('reports a bad email error', () => {
    const result = validateContactForm({
      name: 'Person',
      email: 'bad-email',
      message: 'Hello there'
    });

    expect(result.isValid).toBe(false);
    expect(result.errors.email).toBe('Please enter a valid email address.');
  });

  it('accepts a valid form payload', () => {
    const result = validateContactForm({
      name: 'Person',
      email: 'person@example.com',
      message: 'Hello there'
    });

    expect(result.isValid).toBe(true);
    expect(result.values).toEqual({
      name: 'Person',
      email: 'person@example.com',
      message: 'Hello there'
    });
  });
});
