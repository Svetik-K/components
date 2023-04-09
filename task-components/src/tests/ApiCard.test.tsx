import React from 'react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { render, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../App';

const chars = [
  {
    id: 1,
    name: 'Rick Sanchez',
    image: '../mock/kitty.png',
  },
  {
    id: 2,
    name: 'Morty Smith',
    image: '../mock/rick.png',
  },
];

const server = setupServer(
  rest.get('/', (req, res, ctx) => {
    return res(ctx.json({ data: chars }));
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test('loads and displays cards', async () => {
  render(<App url="/" />);

  await waitFor(() => {
    expect(screen.getByText(/home page/i)).toBeInTheDocument();
    expect(screen.getByText(/Rick Sanchez/i)).toBeInTheDocument();
    expect(screen.getByAltText(/Rick Sanchez/i)).toBeInTheDocument();
    expect(screen.getByText(/Morty Smith/i)).toBeInTheDocument();
    expect(screen.getByAltText(/Morty Smith/i)).toBeInTheDocument();
    expect(screen.queryByText(/Trunk Man/i)).not.toBeInTheDocument();
    expect(screen.queryByAltText(/Ruben/i)).not.toBeInTheDocument();
  });
});

test('handles server error', async () => {
  server.use(
    rest.get('/', (req, res, ctx) => {
      return res(ctx.status(404));
    })
  );
  render(<App url="/" />);
  await waitFor(() => {
    expect(screen.getByText(/home page/i)).toBeInTheDocument();
    expect(screen.getByText(/no matches found/i)).toBeInTheDocument();
  });
});
