import React from 'react';
import { ApiCardContent } from 'utils/types';
import '../styles/apiCard.css';

type ApiCardProps = {
  card: ApiCardContent;
};

const ApiCard: React.FC<ApiCardProps> = ({ card }) => {
  const { id, name, image } = card;
  return (
    <div className="api-card" key={id}>
      <div className="api-card-image">
        <img className="api-card-picture" src={image} alt={name} />
      </div>
      <p className="api-card-name">{name}</p>
    </div>
  );
};

export default ApiCard;
