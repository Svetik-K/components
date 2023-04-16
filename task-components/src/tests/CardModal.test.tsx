import React from 'react';
import { render, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ApiCard from 'components/ApiCard';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import store from 'app/store';

const mockCard = {
  id: 2,
  name: 'Morty Smith',
  image: '../mock/rick.png',
};

describe('Api card', () => {
  test('renders a modal when API call succeeds', async () => {
    render(
      <Provider store={store}>
        <ApiCard apiCard={mockCard} />
      </Provider>
    );
    expect(screen.getByText(/Morty Smith/i)).toBeInTheDocument();
    await userEvent.click(screen.getByText(/Morty Smith/i));
    await waitFor(() => {
      expect(screen.getByText(/Personal file/i)).toBeInTheDocument();
      expect(screen.getByText(/Alive/i)).toBeInTheDocument();
      expect(screen.getByText(/Human/i)).toBeInTheDocument();
      expect(screen.getByText(/Male/i)).toBeInTheDocument();
      expect(screen.getByText(/unknown/i)).toBeInTheDocument();
      expect(screen.getByText(/Citadel of Ricks/i)).toBeInTheDocument();
    });
    await userEvent.click(screen.getByRole('button'));
    expect(screen.queryByText(/Alive/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/Citadel of Ricks/i)).not.toBeInTheDocument();
  });

  test('renders a modal when API call succeeds and closes on button click', async () => {
    render(
      <Provider store={store}>
        <ApiCard apiCard={mockCard} />
      </Provider>
    );
    expect(screen.getByText(/Morty Smith/i)).toBeInTheDocument();
    await userEvent.click(screen.getByText(/Morty Smith/i));
    await waitFor(() => {
      expect(screen.getByText(/Personal file/i)).toBeInTheDocument();
      expect(screen.getByText(/Alive/i)).toBeInTheDocument();
      expect(screen.getByText(/Human/i)).toBeInTheDocument();
      expect(screen.getByText(/Male/i)).toBeInTheDocument();
      expect(screen.getByText(/unknown/i)).toBeInTheDocument();
      expect(screen.getByText(/Citadel of Ricks/i)).toBeInTheDocument();
    });
    await userEvent.click(screen.getByRole('button'));
    expect(screen.queryByText(/Alive/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/Citadel of Ricks/i)).not.toBeInTheDocument();
  });
});
