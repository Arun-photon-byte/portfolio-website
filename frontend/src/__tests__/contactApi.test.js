import { submitContactForm } from '../services/contactApi.js';

describe('submitContactForm', () => {
  beforeEach(() => {
    global.fetch = vi.fn();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('returns a validation error payload when the API rejects the request', async () => {
    global.fetch.mockResolvedValueOnce({
      ok: false,
      json: async () => ({ errors: ['Email is invalid.'] })
    });

    const result = await submitContactForm({
      name: 'Jamie Lee',
      email: 'bad-email',
      message: 'Hello there'
    });

    expect(result).toEqual({
      ok: false,
      errors: ['Email is invalid.']
    });
  });
});
