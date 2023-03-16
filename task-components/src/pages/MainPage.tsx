import React from 'react';
import Header from '../components/Header';
import CardsList from '../components/CardsList';

class MainPage extends React.Component {
  render() {
    return (
      <div>
        <Header>
          <h1>Welcome!</h1>
        </Header>
        <CardsList />
      </div>
    );
  }
}

export default MainPage;
