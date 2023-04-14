import React from 'react';
import Header from '../components/Header';
import Search from 'components/Search';
import ApiCardsList from 'components/ApiCardsList';
import Loader from 'components/Loader';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { addCards, selectCards } from '../slices/mainPageSlice';
import { useGetCharactersByNameQuery } from '../slices/ApiSlice';
import { selectSearch } from 'slices/searchSlice';

const MainPage: React.FC = () => {
  const savedCards = useAppSelector(selectCards);
  const dispatch = useAppDispatch();
  const saved = useAppSelector(selectSearch);
  // const [characters, setCharacters] = useState<ApiCardContent[]>([]);
  const savedValue = useAppSelector(selectSearch);
  const query = savedValue || '';
  const { data, error, isFetching } = useGetCharactersByNameQuery(query, {
    refetchOnMountOrArgChange: true,
  });

  return (
    <div>
      <Header name="Home"></Header>
      <Search></Search>
      {data && <ApiCardsList cards={data.results}></ApiCardsList>}
      {isFetching && <Loader />}
      {(!data || error) && <div className="home-error">Oops... Something went wrong...</div>}
    </div>
  );
};

export default MainPage;
