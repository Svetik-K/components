import React from 'react';
import {
  fireEvent,
  render,
  screen,
  waitFor,
  waitForElementToBeRemoved,
} from '@testing-library/react';
import App from '../App';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import store from 'app/store';

describe('App', () => {
  it('preloader shows and disappears', () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    const preloader = screen.getByTestId('preloader');
    expect(preloader).toBeInTheDocument();
    waitForElementToBeRemoved(() => preloader);
  });

  it('three navigation links are shown on page', async () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    await waitFor(() => {
      expect(screen.getByRole('link', { name: 'Home' })).toBeInTheDocument();
      expect(screen.getByRole('link', { name: 'About Us' })).toBeInTheDocument();
      expect(screen.getByRole('link', { name: 'Form' })).toBeInTheDocument();
    });
  });

  it('renders search field', async () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    await waitFor(() => {
      const searchField = screen.getByRole('textbox');
      expect(searchField).toBeInTheDocument();
      expect(searchField).not.toHaveFocus();
    });
  });
});

describe('routing', () => {
  it('rout to About page', async () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    await waitFor(() => {
      expect(screen.getByText(/home page/i)).toBeInTheDocument();
      fireEvent.click(screen.getByRole('link', { name: /about us/i }));
      expect(screen.queryByText(/about us page/i)).toBeInTheDocument();
    });
  });

  it('rout to Form page', async () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    await waitFor(() => {
      expect(screen.getByText(/about us page/i)).toBeInTheDocument();
      fireEvent.click(screen.getByRole('link', { name: /form/i }));
      expect(screen.queryByText(/form page/i)).toBeInTheDocument();
    });
  });

  it('rout to Home page', async () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    await waitFor(() => {
      expect(screen.getByText(/form page/i)).toBeInTheDocument();
      fireEvent.click(screen.getByRole('link', { name: /home/i }));
      expect(screen.queryByText(/home page/i)).toBeInTheDocument();
    });
  });

  it('rout to 404 when invalid URL', async () => {
    const badRoute = '/page/cards/38374';
    window.history.pushState({}, 'Test page', badRoute);
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    await waitFor(() => {
      expect(screen.getByText(/404 page/i)).toBeInTheDocument();
    });
  });
});
