import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

describe('App', () => {
  it('renders heading on Main page', () => {
    render(<App />);
    expect(screen.getByText(/enhance/i)).toBeInTheDocument();
  });

  it('renders heading on About Us page', () => {
    render(<App />);
    expect(screen.getByText(/about us/i)).toBeInTheDocument();
  });

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
