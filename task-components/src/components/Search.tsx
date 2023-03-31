import React, { ChangeEvent, useEffect, useRef, useState } from 'react';
import Button from './Button';
import '../styles/search.css';

type SearchProps = {
  filterCards: (value: string) => void;
};

const Search: React.FC<SearchProps> = ({ filterCards }) => {
  const savedValue = localStorage.getItem('savedValue') || '';
  const [searchValue, setSearchValue] = useState(savedValue);
  const search = useRef<HTMLInputElement>(null);
  const searchRef = search.current as HTMLInputElement;

  useEffect(() => {
    return () => {
      if (searchRef) {
        localStorage.setItem('savedValue', searchRef.value);
      }
    };
  });

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
          ref={search}
        />
        <Button name="search"></Button>
      </div>
    </div>
  );
};

export default Search;
