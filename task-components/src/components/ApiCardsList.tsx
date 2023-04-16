import React from 'react';
import '../styles/cardsList.css';
import { ApiCardContent } from 'utils/types';
import ApiCard from './ApiCard';
import Error from './Error';
import { useAppSelector } from 'app/hooks';
import { selectSearch } from 'slices/searchSlice';
import { useGetCharactersByNameQuery } from 'slices/ApiSlice';
import Loader from './Loader';

const ApiCardsList: React.FC = () => {
  const savedValue = useAppSelector(selectSearch);
  const { data, error, isFetching } = useGetCharactersByNameQuery(savedValue);

  if (isFetching) {
    return <Loader />;
  }
  if (error) {
    return <Error />;
  }

  return (
    <div className="cards-list">
      {data && data.results.map((card: ApiCardContent) => <ApiCard apiCard={card} key={card.id} />)}
    </div>
  );
};

export default ApiCardsList;
