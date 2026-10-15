import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import HomePage from '../pages/HomePage.jsx';

describe('HomePage', () => {
  it('renders the welcome copy and contact link', () => {
    render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>
    );

    expect(screen.getByRole('heading', { name: /welcome to northstar studio/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /contact us/i })).toBeInTheDocument();
    expect(screen.getByLabelText(/company highlights carousel/i)).toBeInTheDocument();
  });
});
