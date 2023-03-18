import React, { ChangeEvent, FormEvent } from 'react';
import Button from './Button';
import '../styles/search.css';
import CardsList from './CardsList';
import allCards from '../data/cards.json';

class SearchBar extends React.Component {
  state = {
    barValue: '',
    cards: allCards,
  };

  handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  handleChange(e: ChangeEvent<HTMLInputElement>) {
    const search = e.target.value;
    this.setState({ barValue: search });
    this.filterCards(search);
  }

  filterCards(value: string) {
    const filtered = allCards.filter(
      (card) =>
        card.title.toLowerCase().includes(value.toLowerCase()) ||
        card.designer.toLowerCase().includes(value.toLowerCase()) ||
        card.categories.toLowerCase().includes(value.toLowerCase())
    );
    this.setState({ cards: filtered });
  }

  render() {
    return (
      <div>
        <div className="search-bar">
          <input
            type="text"
            className="search-field"
            placeholder="Type in what you are looking for..."
            value={this.state.barValue}
            onChange={this.handleChange.bind(this)}
          />
          <Button name="search"></Button>
        </div>
        <CardsList cards={this.state.cards}></CardsList>
      </div>
    );
  }
}

export default SearchBar;
