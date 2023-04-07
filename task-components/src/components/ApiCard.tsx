import React, { useState } from 'react';
import { ApiCardContent, Character } from 'utils/types';
import '../styles/apiCard.css';
import CardModal from './CardModal';
import axios, { AxiosResponse } from 'axios';

type ApiCardProps = {
  apiCard: ApiCardContent;
};

const initData: Character = {
  id: 0,
  name: '',
  image: '',
  gender: '',
  species: '',
  status: '',
  origin: {
    name: '',
    url: '',
  },
  location: {
    name: '',
    url: '',
  },
};

const ApiCard: React.FC<ApiCardProps> = ({ apiCard }) => {
  const [modalShown, setModalShown] = useState(false);
  const [character, setCharacter] = useState(initData);
  const { id, name, image } = apiCard;

  const openModal = () => {
    getCharacter(id);
    setModalShown(true);
  };

  const closeModal = () => {
    setModalShown(false);
  };

  const getCharacter = async (id: number) => {
    await axios
      .get(`https://rickandmortyapi.com/api/character/${id}`)
      .then((res: AxiosResponse) => setCharacter(res.data));
  };

  return (
    <div>
      <div className="api-card" key={id} onClick={openModal}>
        <div className="api-card-image">
          <img className="api-card-picture" src={image} alt={name} />
        </div>
        <p className="api-card-name">{name}</p>
      </div>
      <CardModal curState={modalShown} charInfo={character} handleClose={closeModal} />
    </div>
  );
};

export default ApiCard;
