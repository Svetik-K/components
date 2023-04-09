import React from 'react';
import '../styles/cardsList.css';
import { ApiCardContent } from 'utils/types';
import ApiCard from './ApiCard';

type ApiCardsListProps = {
  cards: ApiCardContent[] | [];
};

const ApiCardsList: React.FC<ApiCardsListProps> = ({ cards }) => {
  const cardsToRender = cards?.map((card) => {
    return <ApiCard apiCard={card} key={card.id}></ApiCard>;
  });
  const content = cardsToRender?.length ? (
    cardsToRender
  ) : (
    <div className="not-found">
      <p className="no-matches">Sorry... No matches found</p>
    </div>
  );
  return <div className="cards-list">{content}</div>;
};

export default ApiCardsList;
