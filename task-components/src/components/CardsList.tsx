import React from 'react';
import Card from './Card';
import '../styles/cardsList.css';
import { CardContent } from 'utils/types';

type CardsListProps = {
  cards: CardContent[] | [];
};
const CardsList: React.FC<CardsListProps> = ({ cards }) => {
  const cardsToRender = cards.map((card) => {
    return <Card card={card} key={card.id}></Card>;
  });
  const content = cardsToRender?.length ? (
    cardsToRender
  ) : (
    <div className="no-matches">No matches found</div>
  );
  return <div className="cards-list">{content}</div>;
};

export default CardsList;
