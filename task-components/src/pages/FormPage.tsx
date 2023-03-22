import Form from 'components/Form';
import Header from 'components/Header';
import React from 'react';

class FormPage extends React.Component {
  render() {
    return (
      <div>
        <Header name="Form"></Header>
        <main className="form-page-main">
          <Form></Form>
        </main>
      </div>
    );
  }
}

export default FormPage;
