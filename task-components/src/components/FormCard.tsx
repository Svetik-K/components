import React from 'react';
import { FormCardContent } from '../utils/types';
import '../styles/formCard.css';

type FormCardProps = {
  cardContent: FormCardContent;
};

const FormCard: React.FC<FormCardProps> = ({ cardContent }) => {
  const { username, surname, gender, birthday, country, image } = cardContent;

  return (
    <div className="form-card">
      <h3 className="form-card-title">Personal card</h3>
      <div className="form-card-upper">
        {image && <img src={image} alt={username} className="form-card-image" />}
        <div>
          <p className="form-card-name">{username}</p>
          <p className="form-card-surname">{surname}</p>
          <p className="form-card-gender">{gender}</p>
        </div>
      </div>
      <p className="form-card-birthday">Birthday: {birthday}</p>
      <p className="form-card-country">Country: {country}</p>
    </div>
  );
};

export default FormCard;
