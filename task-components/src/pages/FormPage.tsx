import Form from 'components/Form';
import FormCardsList from 'components/FormCardsList';
import Header from 'components/Header';
import React from 'react';
import { FormCardContent } from 'utils/types';
import { addFormCards, selectFormCards } from './formPageSlice';
import { useAppDispatch, useAppSelector } from 'app/hooks';

const FormPage: React.FC = () => {
  const curFormCards = useAppSelector(selectFormCards);
  const dispatch = useAppDispatch();

  const createCards = (cardContent: FormCardContent): void => {
    dispatch(addFormCards(cardContent));
  };

  return (
    <div>
      <Header name="Form"></Header>
      <main className="form-page-main">
        <Form createCards={createCards} />
        <FormCardsList cards={curFormCards}></FormCardsList>
      </main>
    </div>
  );
};

export default FormPage;
