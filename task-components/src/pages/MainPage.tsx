import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Search from 'components/Search';
import { ApiCardContent } from 'utils/types';
import ApiCardsList from 'components/ApiCardsList';
import Loader from 'components/Loader';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { addCards, selectCards } from './mainPageSlice';
import { useGetCharactersByNameQuery } from './ApiSlice';
import { selectSearch } from 'components/searchSlice';

const MainPage: React.FC = () => {
  const savedCards = useAppSelector(selectCards);
  const dispatch = useAppDispatch();
  // const [characters, setCharacters] = useState<ApiCardContent[]>([]);
  // const [isLoading, setLoading] = useState(true);
  const savedValue = useAppSelector(selectSearch);
  const query = savedValue || '';
  const { data, error, isLoading } = useGetCharactersByNameQuery(query, {
    refetchOnMountOrArgChange: true,
  });

  // useEffect(() => {
  //   return () => {
  //     dispatch(addCards(characters));
  //   };
  // });

  return (
    <div>
      <Header name="Home"></Header>
      <Search></Search>
      {data && <ApiCardsList cards={data.results}></ApiCardsList>}
      {isLoading && <Loader />}
      {!data && <div>Something went wrong...</div>}
    </div>
  );
};

export default MainPage;
