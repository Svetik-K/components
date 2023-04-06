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
    const searchRef = search.current as HTMLInputElement;
    return () => {
      if (searchRef) {
        localStorage.setItem('savedValue', searchRef.value);
      }
    };
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const searchParam: string = e.target.value;
    search.current!.value = searchParam;
    setSearchValue(searchParam);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    fetchChars(search.current!.value);
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
