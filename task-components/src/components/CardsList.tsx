import React from 'react';
import cards from '../data/cards.json';
import Card from './Card';
import '../styles/cardsList.css';

class CardsList extends React.Component {
  render() {
    const cardsToRender = cards.map((card) => {
      return <Card card={card} key={card.id}></Card>;
    });
    return <div className="cards-list">{cardsToRender}</div>;
  }
}

export default CardsList;
