import React from 'react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { render, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { fetch, Headers, Request, Response } from 'cross-fetch';
import App from '../App';
import { Character } from 'utils/types';
import { Provider } from 'react-redux';
import store from 'app/store';
import CardModal from 'components/CardModal';

const character: Character = {
  id: 183,
  name: 'Johnny Depp',
  status: 'Alive',
  species: 'Human',
  gender: 'Male',
  origin: {
    name: 'Earth (C-500A)',
    url: 'https://rickandmortyapi.com/api/location/23',
  },
  location: {
    name: 'Earth (C-500A)',
    url: 'https://rickandmortyapi.com/api/location/23',
  },
  image: 'https://rickandmortyapi.com/api/character/avatar/183.jpeg',
};

global.fetch = fetch;
global.Headers = Headers;
global.Request = Request;
global.Response = Response;

export const handlers = [
  rest.get('https://rickandmortyapi.com/api/character/*', (_req, res, ctx) => {
    return res(ctx.json(character));
  }),
];

export const server = setupServer(...handlers);

beforeAll(() => server.listen());
afterEach(() => {
  server.resetHandlers();
});
afterAll(() => server.close());

const mockClose = jest.fn();

describe('App', function () {
  test('Card modal should display all necessary data', async () => {
    render(
      <Provider store={store}>
        <CardModal charId={character.id} handleClose={mockClose} curState={true} />
      </Provider>
    );
    await waitFor(() => {
      expect(screen.getByText(/Personal file/i)).toBeInTheDocument();
      expect(screen.getByText(/Johnny Depp/i)).toBeInTheDocument();
      expect(screen.getByAltText(/Johnny Depp/i)).toBeInTheDocument();
      expect(screen.getByText(/Alive/i)).toBeInTheDocument();
      expect(screen.getByText(/Human/i)).toBeInTheDocument();
      expect(screen.getByText(/Male/i)).toBeInTheDocument();
      expect(screen.getByText(/Location: Earth/i)).toBeInTheDocument();
      expect(screen.getByRole('button')).toBeInTheDocument();
      expect(screen.queryByText(/something went wrong/i)).not.toBeInTheDocument();
    });
  });

  test('Should display an error when the request fail', async () => {
    server.use(
      rest.get('https://rickandmortyapi.com/api/character', (_req, res, ctx) => {
        return res(ctx.status(500), ctx.json('an error has occurred'));
      })
    );
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    expect(screen.getByTestId('preloader')).toBeInTheDocument();
    await waitFor(() => {
      expect(screen.getByText(/something went wrong/i)).toBeInTheDocument();
    });
    expect(screen.queryByTestId('preloader')).not.toBeInTheDocument();
  });
});
