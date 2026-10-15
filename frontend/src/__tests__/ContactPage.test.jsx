import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ContactPage from '../pages/ContactPage.jsx';

describe('ContactPage', () => {
  beforeEach(() => {
    global.fetch = vi.fn();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('shows validation errors when submitting an invalid form', () => {
    render(
      <MemoryRouter>
        <ContactPage />
      </MemoryRouter>
    );

    fireEvent.click(screen.getByRole('button', { name: /submit/i }));

    expect(screen.getByText(/name is required/i)).toBeInTheDocument();
  });

  it('handles a server validation error after the form passes local checks', async () => {
    global.fetch.mockResolvedValueOnce({
      ok: false,
      json: async () => ({ errors: ['Email is invalid.'] })
    });

    render(
      <MemoryRouter>
        <ContactPage />
      </MemoryRouter>
    );

    fireEvent.change(screen.getByLabelText(/name/i), { target: { value: 'Jamie Lee' } });
    fireEvent.change(screen.getByLabelText(/email/i), { target: { value: 'jamie@example.com' } });
    fireEvent.change(screen.getByLabelText(/message/i), { target: { value: 'I want to learn more.' } });
    fireEvent.click(screen.getByRole('button', { name: /submit/i }));

    expect(await screen.findByText(/email is invalid/i)).toBeInTheDocument();
  });

  it('submits a valid form and shows a thank you message', async () => {
    global.fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({ success: true, message: 'Thank you for your message.' })
    });

    render(
      <MemoryRouter>
        <ContactPage />
      </MemoryRouter>
    );

    fireEvent.change(screen.getByLabelText(/name/i), { target: { value: 'Jamie Lee' } });
    fireEvent.change(screen.getByLabelText(/email/i), { target: { value: 'jamie@example.com' } });
    fireEvent.change(screen.getByLabelText(/message/i), { target: { value: 'I want to learn more.' } });
    fireEvent.click(screen.getByRole('button', { name: /submit/i }));

    expect(await screen.findByRole('status')).toHaveTextContent('Thank you for your message.');
    expect(global.fetch).toHaveBeenCalledWith('/api/contact', expect.objectContaining({ method: 'POST' }));
  });
});
