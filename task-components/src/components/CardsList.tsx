import React from 'react';
import Card, { CardContent } from './Card';
import '../styles/cardsList.css';

type CardsListProps = {
  cards: CardContent[] | [];
};
class CardsList extends React.Component<CardsListProps> {
  render() {
    const cardsToRender = this.props.cards.map((card) => {
      return <Card card={card} key={card.id}></Card>;
    });
    const content = cardsToRender?.length ? (
      cardsToRender
    ) : (
      <div className="no-matches">No matches found</div>
    );
    return <div className="cards-list">{content}</div>;
  }
}

export default CardsList;
