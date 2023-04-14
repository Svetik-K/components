import React from 'react';
import '../styles/formCardsList.css';
import { FormCardContent } from 'utils/types';
import FormCard from './FormCard';

type FormCardsListProps = {
  cards: FormCardContent[];
};

const FormCardsList: React.FC<FormCardsListProps> = ({ cards }) => {
  const cardsToRender = cards.map((card, index) => {
    return <FormCard key={index} cardContent={card}></FormCard>;
  });
  return <div className="form-cards-list">{cardsToRender}</div>;
};

export default FormCardsList;
