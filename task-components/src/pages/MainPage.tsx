import React from 'react';
import Header from '../components/Header';
import CardsList from '../components/CardsList';
import SearchBar from 'components/SearchBar';
import cards from '../data/cards.json';

class MainPage extends React.Component {
  render() {
    return (
      <div>
        <Header>
          <h1>Welcome!</h1>
          <SearchBar></SearchBar>
        </Header>
        <CardsList cards={cards}></CardsList>
      </div>
    );
  }
}

export default MainPage;
