import Form from 'components/Form';
import FormCardsList from 'components/FormCardsList';
import Header from 'components/Header';
import React, { useState } from 'react';
import { FormCardContent } from 'utils/types';

const FormPage: React.FC = () => {
  const [createdCards, setCreatedCards] = useState<FormCardContent[]>([]);

  const handleSubmit = (formData: FormCardContent): void => {
    const newCards: FormCardContent[] = [...createdCards, formData];
    setCreatedCards(newCards);
  };

  return (
    <div>
      <Header name="Form"></Header>
      <main className="form-page-main">
        <Form onSubmit={handleSubmit} />
        <FormCardsList cards={createdCards}></FormCardsList>
      </main>
    </div>
  );
};

export default FormPage;
