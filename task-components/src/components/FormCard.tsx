import React, { useState } from 'react';
import { FormCardContent } from '../utils/types';
import '../styles/formCard.css';

type FormCardProps = {
  formData: FormCardContent;
};

const FormCard = ({ formData }: FormCardProps) => {
  const [imageUrl, setImageUrl] = useState('');
  const { username, surname, birthday, country } = formData;
  // const reader = new FileReader();
  // reader.onload = () => {
  //   const resultUrl = reader.result as string;
  //   setImageUrl(resultUrl);
  // };
  // if (formData.image) {
  //   reader.readAsDataURL(formData.image);
  // }

  return (
    <div className="form-card">
      <h3 className="form-card-title">Personal card</h3>
      <div className="form-card-upper">
        {imageUrl && <img src={imageUrl} alt="avatar" className="form-card-image" />}
        <div>
          <p className="form-card-name">{username}</p>
          <p className="form-card-surname">{surname}</p>
          {/* <p className="form-card-gender">{gender}</p> */}
        </div>
      </div>
      <p className="form-card-birthday">Birthday: {birthday}</p>
      <p className="form-card-country">Country: {country}</p>
    </div>
  );
};

export default FormCard;
