import React, { ChangeEvent } from 'react';
import Button from './Button';
import '../styles/search.css';
import CardsList from './CardsList';
import allCards from '../data/cards.json';

class SearchBar extends React.Component {
  state = {
    searchValue: localStorage.savedValue || '',
    cards: localStorage.savedCards ? JSON.parse(localStorage.savedCards) : allCards,
  };

  handleClick(e: Event): void {
    e.preventDefault();
  }

  handleChange(e: ChangeEvent<HTMLInputElement>) {
    const search = e.target.value;
    this.setState({ searchValue: search });
    this.filterCards(search);
    localStorage.savedValue = search;
  }

  filterCards(value: string): void {
    const filtered = allCards.filter(
      (card) =>
        card.title.toLowerCase().includes(value.toLowerCase()) ||
        card.designer.toLowerCase().includes(value.toLowerCase()) ||
        card.categories.toLowerCase().includes(value.toLowerCase())
    );
    this.setState({ cards: filtered });
    localStorage.savedCards = JSON.stringify(filtered);
  }

  render() {
    return (
      <div>
        <div className="search-bar">
          <input
            type="text"
            className="search-field"
            placeholder="Type in what you are looking for..."
            value={this.state.searchValue}
            onChange={this.handleChange.bind(this)}
          />
          <Button name="search" onClick={this.handleClick.bind(this)}></Button>
        </div>
        <CardsList cards={this.state.cards}></CardsList>
      </div>
    );
  }
}

export default SearchBar;
