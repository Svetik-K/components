import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Search from 'components/Search';
import CardsList from 'components/CardsList';
import allCards from '../data/cards.json';
import { CardContent } from 'utils/types';

const MainPage = () => {
  const [filteredCards, setFilteredCards] = useState<CardContent[]>([]);

  useEffect(() => {
    const savedValue = localStorage.getItem('savedValue') || '';
    filterCards(savedValue);
  }, []);

  function filterCards(value: string): void {
    const filtered = allCards.filter(
      (card) =>
        card.title.toLowerCase().includes(value.toLowerCase()) ||
        card.designer.toLowerCase().includes(value.toLowerCase()) ||
        card.categories.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredCards(filtered);
  }

  return (
    <div>
      <Header name="Home"></Header>
      <Search filterCards={filterCards}></Search>
      <CardsList cards={filteredCards}></CardsList>
    </div>
  );
};

export default MainPage;
