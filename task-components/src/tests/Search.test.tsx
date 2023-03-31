import Search from 'components/Search';
import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

const filterCards = jest.fn();

describe('Search field', () => {
  it('the value is entered in the search field', async () => {
    render(<Search filterCards={filterCards} />);
    await userEvent.type(screen.getByRole('textbox'), 'snow');
    expect(screen.getByRole('textbox')).toHaveDisplayValue('snow');
  });

  // it('the entered value is saved to local storage', async () => {
  //   localStorage.clear();
  //   render(<Search filterCards={filterCards} />);
  //   await userEvent.type(screen.getByRole('textbox'), 'tram');
  //   const savedSearch: string = localStorage.savedValue;
  //   expect(savedSearch).toEqual('tram');
  // });
});
