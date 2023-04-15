import Search from '../components/Search';
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from 'App';
import { Provider } from 'react-redux';
import store from 'app/store';

// const fetchChars = jest.fn();

describe('Search field', () => {
  it('the value is entered in the search field', async () => {
    render(
      <Provider store={store}>
        <Search />
      </Provider>
    );
    await userEvent.type(screen.getByRole('textbox'), 'girl');
    expect(screen.getByRole('textbox')).toHaveDisplayValue('girl');
  });

  it('the entered search value is saved to the store and displayed after unmount and mount again', async () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    const searchBar = screen.getByRole('textbox');
    await waitFor(() => {
      expect(searchBar).toBeInTheDocument();
    });
    await userEvent.type(searchBar, 'rick');
    await userEvent.click(screen.getByRole('button'));
    await waitFor(() => {
      expect(searchBar).toBeInTheDocument();
    });
    await userEvent.click(screen.getByRole('link', { name: /form/i }));
    await userEvent.click(screen.getByRole('link', { name: /home/i }));
    await waitFor(() => {
      expect(searchBar).toHaveDisplayValue('rick');
    });
  });
});
