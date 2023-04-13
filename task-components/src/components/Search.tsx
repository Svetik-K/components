import React, { ChangeEvent, FormEvent, useEffect, useRef, useState } from 'react';
import Button from './Button';
import { useDispatch, useSelector } from 'react-redux';
import { addSearch, selectSearch } from './searchSlice';
import '../styles/search.css';

type SearchProps = {
  fetchChars: (value: string) => void;
};

const Search: React.FC<SearchProps> = ({ fetchChars }) => {
  const dispatch = useDispatch();
  const saved = useSelector(selectSearch);
  const [searchValue, setSearchValue] = useState(saved || '');
  const search = useRef<HTMLInputElement>(null);

  useEffect(() => {
    return () => {
      if (search.current) {
        dispatch(addSearch(search.current.value));
      }
    };
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const searchParam: string = e.target.value;
    setSearchValue(searchParam);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    fetchChars(searchValue);
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
        <Button name="search" type="submit" data-testid="search-button"></Button>
      </div>
    </form>
  );
};

export default Search;
