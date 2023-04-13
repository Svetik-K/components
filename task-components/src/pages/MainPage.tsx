import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Search from 'components/Search';
import { ApiCardContent } from 'utils/types';
import ApiCardsList from 'components/ApiCardsList';
import Loader from 'components/Loader';
import { selectSearch } from '../components/searchSlice';
import { useSelector } from 'react-redux';

const MainPage: React.FC = () => {
  const [characters, setCharacters] = useState<ApiCardContent[]>([]);
  const [isLoading, setLoading] = useState(true);
  const saved = useSelector(selectSearch);
  const savedValue = saved || '';

  useEffect(() => {
    const savedValue = saved || '';
    fetchChars(savedValue);
  }, []);

  const fetchChars = async (query?: string) => {
    setLoading(true);
    await fetch(`https://rickandmortyapi.com/api/character?name=${query}`)
      .then((res) => res.json())
      .then((data) => setCharacters(data.results))
      .catch((err) => {
        if (err.response?.status === 404) {
          setCharacters([]);
        }
      });
    setTimeout(() => {
      setLoading(false);
    }, 1100);
  };

  return (
    <div>
      <Header name="Home"></Header>
      <Search fetchChars={fetchChars}></Search>
      <ApiCardsList cards={characters}></ApiCardsList>
      {isLoading && <Loader />}
    </div>
  );
};

export default MainPage;
