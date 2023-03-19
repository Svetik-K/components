import React from 'react';
import { render, screen } from '@testing-library/react';
import Card from 'components/Card';

const newCard = {
  id: 8,
  image: './assets/images/pedestrians.jpg',
  title: "Morning's pedestrians",
  designer: 'Liam Nordquist',
  categories: 'pedestrians, crossing, traffic',
  likes: '6830',
  views: '7844',
};

describe('Cards list', () => {
  it("renders all the card's content", () => {
    render(<Card card={newCard} />);
    expect(screen.getByAltText(/Morning's pedestrians/i)).toBeInTheDocument();
    expect(screen.getByText(/Morning's pedestrians/i)).toBeInTheDocument();
    expect(screen.getByText(/Liam Nordquist/i)).toBeInTheDocument();
    expect(screen.getByText(/pedestrians, crossing, traffic/i)).toBeInTheDocument();
    expect(screen.getByText(/6830/i)).toBeInTheDocument();
    expect(screen.getByText(/7844/i)).toBeInTheDocument();
  });
});
