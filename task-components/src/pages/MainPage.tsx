import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Search from 'components/Search';
import { ApiCardContent } from 'utils/types';
import axios from 'axios';
import ApiCardsList from 'components/ApiCardsList';

const MainPage: React.FC = () => {
  const [characters, setCharacters] = useState<ApiCardContent[]>([]);

  useEffect(() => {
    const savedValue: string = localStorage.getItem('savedValue') || '';
    fetchChars(savedValue);
  }, []);

  const fetchChars = async (query?: string) => {
    const data = await axios
      .get(`https://rickandmortyapi.com/api/character?name=${query}`)
      .then((res) => res.data.results);
    setCharacters(data);
    console.log(data);
  };

  return (
    <div>
      <Header name="Home"></Header>
      <Search fetchChars={fetchChars}></Search>
      <ApiCardsList cards={characters}></ApiCardsList>
    </div>
  );
};

export default MainPage;
