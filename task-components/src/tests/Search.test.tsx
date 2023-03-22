import Search from 'components/Search';
import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('Search field', () => {
  it('the value is entered in the search field', () => {
    render(<Search />);
    userEvent.type(screen.getByRole('textbox'), 'snow');
    expect(screen.getByRole('textbox')).toHaveDisplayValue('snow');
  });

  it('the entered value is saved to local storage', () => {
    localStorage.clear();
    render(<Search />);
    userEvent.type(screen.getByRole('textbox'), 'tram');
    const savedSearch = localStorage.savedValue;
    expect(savedSearch).toEqual('tram');
  });
});
