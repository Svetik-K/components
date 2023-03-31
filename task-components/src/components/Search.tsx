import React, { ChangeEvent, useState } from 'react';
import Button from './Button';
import '../styles/search.css';

type SearchProps = {
  filterCards: (value: string) => void;
};

const Search: React.FC<SearchProps> = ({ filterCards }) => {
  const [searchValue, setSearchValue] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const search = e.target.value;
    setSearchValue(search);
    filterCards(search);
  };

  return (
    <div>
      <div className="search-bar">
        <input
          type="text"
          className="search-field"
          placeholder="Type in what you are looking for..."
          value={searchValue}
          onChange={handleChange}
        />
        <Button name="search"></Button>
      </div>
    </div>
  );
};

export default Search;
