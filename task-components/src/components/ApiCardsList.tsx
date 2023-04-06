import React from 'react';
import Card from './Card';
import '../styles/cardsList.css';
import { ApiCardContent } from 'utils/types';
import ApiCard from './ApiCard';

type ApiCardsListProps = {
  cards: ApiCardContent[] | [];
};

const ApiCardsList: React.FC<ApiCardsListProps> = ({ cards }) => {
  const cardsToRender = cards.map((card) => {
    return <ApiCard card={card} key={card.id}></ApiCard>;
  });
  const content = cardsToRender?.length ? (
    cardsToRender
  ) : (
    <div className="no-matches">No matches found</div>
  );
  return <div className="cards-list">{content}</div>;
};

export default ApiCardsList;
