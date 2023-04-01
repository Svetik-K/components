import Search from 'components/Search';
import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from 'App';

const filterCards = jest.fn();

describe('Search field', () => {
  it('the value is entered in the search field', async () => {
    render(<Search filterCards={filterCards} />);
    await userEvent.type(screen.getByRole('textbox'), 'snow');
    expect(screen.getByRole('textbox')).toHaveDisplayValue('snow');
  });

  it('the entered search value is saved to local storage and displayed after unmount and mount again', async () => {
    localStorage.clear();
    render(<App />);
    await userEvent.type(screen.getByRole('textbox'), 'tram');
    await userEvent.click(screen.getByRole('link', { name: /form/i }));
    await userEvent.click(screen.getByRole('link', { name: /home/i }));
    expect(screen.getByRole('textbox')).toHaveDisplayValue('tram');
    const savedSearch: string = localStorage.savedValue;
    expect(savedSearch).toEqual('tram');
  });
});
