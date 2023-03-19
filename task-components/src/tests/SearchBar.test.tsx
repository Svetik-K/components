import SearchBar from 'components/SearchBar';
import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('Search field', () => {
  it('the value is entered in the search field', () => {
    render(<SearchBar />);
    userEvent.type(screen.getByRole('textbox'), 'snow');
    expect(screen.getByRole('textbox')).toHaveDisplayValue('snow');
  });
});
