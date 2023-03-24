import React from 'react';
import '../styles/cardsList.css';
import { FormCardContent } from 'utils/types';
import FormCard from './FormCard';

type FormCardsListProps = {
  cards: FormCardContent[];
};

class FormCardsList extends React.Component<FormCardsListProps> {
  render() {
    const cardsToRender = this.props.cards.map((card, index) => {
      return <FormCard key={index} formData={card}></FormCard>;
    });
    return <div className="cards-list">{cardsToRender}</div>;
  }
}

export default FormCardsList;
