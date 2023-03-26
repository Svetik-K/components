import React from 'react';
import { render, screen } from '@testing-library/react';
import FormCardsList from 'components/FormCardsList';

const newCards = [
  {
    name: 'Karina',
    surname: 'Holms',
    date: '2010-08-12',
    country: 'Sweden',
    gender: 'Female',
    file: null,
  },
  {
    name: 'Richard',
    surname: 'Hills',
    date: '2000-04-25',
    country: 'Brasil',
    gender: 'Male',
    file: null,
  },
];

describe('cards with data from the form', () => {
  it('renders only cards from the passed list', () => {
    render(<FormCardsList cards={newCards} />);
    expect(screen.getByText(/Holms/i)).toBeInTheDocument();
    expect(screen.getByText(/Sweden/i)).toBeInTheDocument();
    expect(screen.getByText(/2000-04-25/i)).toBeInTheDocument();
    expect(screen.queryByText(/Marry/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/1995-03-18/i)).not.toBeInTheDocument();
  });
});
