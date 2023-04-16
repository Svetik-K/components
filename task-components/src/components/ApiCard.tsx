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

  return (
    <div>
      <div className="api-card" key={id} onClick={() => setModalShown(true)}>
        <div className="api-card-image">
          <img className="api-card-picture" src={image} alt={name} />
        </div>
        <p className="api-card-name">{name}</p>
      </div>
      {modalShown && (
        <CardModal curState={modalShown} charId={id} handleClose={() => setModalShown(false)} />
      )}
    </div>
  );
};

export default ApiCard;
