import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import Reservation from './Reservation';

describe('Reservation page', () => {
  it('affiche le formulaire', () => {
    render(
      <MemoryRouter initialEntries={['/fr/reservation']}>
        <Reservation />
      </MemoryRouter>
    );

    expect(
      screen.getByRole('button', { name: /reservation\.form\.submit/i })
    ).toBeInTheDocument();
  });
});
