import React, { useState } from 'react';
import { ApiCardContent } from 'utils/types';
import '../styles/apiCard.css';
import CardModal from './CardModal';

type ApiCardProps = {
  apiCard: ApiCardContent;
};

const ApiCard: React.FC<ApiCardProps> = ({ apiCard }) => {
  const [modalShown, setModalShown] = useState(false);
  const { id, name, image } = apiCard;

  const handleModal = () => {
    setModalShown(!modalShown);
  };

  return (
    <div className="api-card" key={id} onClick={handleModal}>
      <div className="api-card-image">
        <img className="api-card-picture" src={image} alt={name} />
      </div>
      <p className="api-card-name">{name}</p>
      <CardModal curState={modalShown} charInfo={apiCard} handleAction={handleModal} />
    </div>
  );
};

export default ApiCard;
