import React from 'react';
import Button from './Button';
import '../styles/search.css';

class SearchBar extends React.Component {
  render() {
    return (
      <form className="search-bar">
        <input
          type="text"
          className="search-field"
          placeholder="Type in what you are looking for..."
        />
        <Button name="search">Search</Button>
      </form>
    );
  }
}

export default SearchBar;
