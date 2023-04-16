import React from 'react';
import Header from '../components/Header';
import Search from 'components/Search';
import ApiCardsList from 'components/ApiCardsList';

const MainPage: React.FC = () => {
  return (
    <div>
      <Header name="Home" />
      <Search />
      <ApiCardsList />
    </div>
  );
};

export default MainPage;
