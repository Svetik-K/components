import React from 'react';
import { render, screen } from '@testing-library/react';
import CardsList from 'components/CardsList';
import { CardContent } from 'utils/types';

const newCards: CardContent[] = [
  {
    id: 10,
    image: './assets/images/bridge.jpg',
    title: 'George Washingtons Bridge',
    designer: 'David Mark',
    categories: 'bridge, New York, buildings, architecture',
    likes: '12670',
    views: '15344',
  },
  {
    id: 11,
    image: './assets/images/houses.jpg',
    title: 'Venice houses',
    designer: 'Pfuderi',
    categories: 'boats, street, canal, town, Venice',
    likes: '4615',
    views: '6725',
  },
  {
    id: 12,
    image: './assets/images/tram.jpg',
    title: 'Lost in snow',
    designer: 'Simon Berger',
    categories: 'tram, road, snow',
    likes: '18450',
    views: '22714',
  },
];

describe('Cards list', () => {
  it('renders only cards from the passed list', () => {
    render(<CardsList cards={newCards} />);
    expect(screen.getByText(/George Washingtons Bridge/i)).toBeInTheDocument();
    expect(screen.getByText(/Venice houses/i)).toBeInTheDocument();
    expect(screen.getByText(/Lost in snow/i)).toBeInTheDocument();
    expect(screen.queryByText(/Morning's pedestrians/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/Night alley/i)).not.toBeInTheDocument();
  });

  it('No matches found shown when passes an empty array', () => {
    render(<CardsList cards={[]} />);
    expect(screen.getByText(/No matches found/i)).toBeInTheDocument();
  });
});
