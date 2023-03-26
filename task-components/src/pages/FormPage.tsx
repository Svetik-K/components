import Form from 'components/Form';
import FormCardsList from 'components/FormCardsList';
import Header from 'components/Header';
import React from 'react';
import { FormCardContent } from 'utils/types';

type State = {
  cards: FormCardContent[] | [];
};

class FormPage extends React.Component {
  state: State;

  constructor(props: object | Readonly<object>) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      cards: [],
    };
  }

  handleSubmit(formData: FormCardContent): void {
    this.setState({ cards: [...this.state.cards, formData] });
  }

  render() {
    return (
      <div>
        <Header name="Form"></Header>
        <main className="form-page-main">
          <Form onSubmit={this.handleSubmit} />
          <FormCardsList cards={this.state.cards}></FormCardsList>
        </main>
      </div>
    );
  }
}

export default FormPage;
