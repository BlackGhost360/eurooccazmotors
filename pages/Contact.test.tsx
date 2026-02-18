import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import Contact from './Contact';

describe('Contact page', () => {
  it('affiche le formulaire', () => {
    render(
      <MemoryRouter initialEntries={['/fr/contact']}>
        <Contact />
      </MemoryRouter>
    );

    expect(
      screen.getByRole('button', { name: /contact\.form\.submit/i })
    ).toBeInTheDocument();
  });
});
