import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Search from 'components/Search';
import { ApiCardContent } from 'utils/types';
import axios, { AxiosError, AxiosResponse } from 'axios';
import ApiCardsList from 'components/ApiCardsList';

const MainPage: React.FC = () => {
  const [characters, setCharacters] = useState<ApiCardContent[]>([]);

  useEffect(() => {
    const savedValue: string = localStorage.getItem('savedValue') || '';
    fetchChars(savedValue);
  }, []);

  const fetchChars = async (query?: string) => {
    await axios
      .get(`https://rickandmortyapi.com/api/character?name=${query}`)
      .then((res: AxiosResponse) => setCharacters(res.data.results))
      .catch((err: AxiosError) => {
        if (err.response?.status === 404) {
          setCharacters([]);
        } else {
          console.log(err.message);
        }
      });
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
