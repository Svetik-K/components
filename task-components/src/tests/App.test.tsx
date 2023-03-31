import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

describe('App', () => {
  it('two navigation links are shown on page', () => {
    render(<App />);
    expect(screen.getByRole('link', { name: 'Home' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'About Us' })).toBeInTheDocument();
  });

  it('renders search field', () => {
    render(<App />);
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });
});

describe('routing', () => {
  it('rout to About page', async () => {
    render(<App />);
    expect(screen.getByText(/home page/i)).toBeInTheDocument();
    await userEvent.click(screen.getByRole('link', { name: /about us/i }));
    expect(screen.queryByText(/about us page/i)).toBeInTheDocument();
  });

  it('rout to Home page', async () => {
    render(<App />);
    expect(screen.getByText(/about us page/i)).toBeInTheDocument();
    await userEvent.click(screen.getByRole('link', { name: /home/i }));
    expect(screen.queryByText(/home page/i)).toBeInTheDocument();
  });

  it('rout to Form page', async () => {
    render(<App />);
    expect(screen.getByText(/home page/i)).toBeInTheDocument();
    await userEvent.click(screen.getByRole('link', { name: /form/i }));
    expect(screen.queryByText(/form page/i)).toBeInTheDocument();
  });

  it('rout to 404 when invalid URL', () => {
    const badRoute = '/page/cards/38374';
    window.history.pushState({}, 'Test page', badRoute);
    render(<App />);
    expect(screen.getByText(/404 page/i)).toBeInTheDocument();
  });
});
