import React, { ChangeEvent, FormEvent, useEffect, useRef, useState } from 'react';
import Button from './Button';
import '../styles/search.css';

type SearchProps = {
  fetchChars: (value: string) => void;
};

const Search: React.FC<SearchProps> = ({ fetchChars }) => {
  const savedValue = localStorage.getItem('savedValue') || '';
  const [searchValue, setSearchValue] = useState(savedValue);
  const search = useRef<HTMLInputElement>(null);

  useEffect(() => {
    fetchChars(savedValue);
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const searchParam: string = e.target.value;
    search.current!.value = searchParam;
    setSearchValue(searchParam);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const curSearch = search.current!.value;
    fetchChars(curSearch);
    localStorage.setItem('savedValue', curSearch);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="search-bar">
        <input
          type="text"
          className="search-field"
          placeholder="Type in what you are looking for..."
          value={searchValue}
          onChange={handleChange}
          ref={search}
        />
        <Button name="search" type="submit"></Button>
      </div>
    </form>
  );
};

export default Search;
