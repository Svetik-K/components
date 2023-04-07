import React from 'react';
import { ApiCardContent } from 'utils/types';
import '../styles/modal.css';
import Button from './Button';

type CardModalprops = {
  charInfo: ApiCardContent;
  curState: boolean;
  handleAction: () => void;
};

const CardModal: React.FC<CardModalprops> = ({ charInfo, curState, handleAction }) => {
  const { name, image, gender, species, status, origin } = charInfo;
  const curClass = curState ? `overlay active` : `overlay`;
  return (
    <div className={curClass}>
      <div className="modal">
        <h3 className="modal-title">Personal file</h3>
        <div className="modal-upper">
          <img src={image} alt={name} className="modal-image" />
          <div className="modal-info">
            <p className="modal-name">{name}</p>
            <p className="modal-gender">Gender: {gender}</p>
            <p className="modal-species">Species: {species}</p>
            <p className="modal-status">Status: {status}</p>
            <p className="modal-origin">Origin: {origin.name}</p>
          </div>
        </div>
        <Button name="close" onClick={handleAction}></Button>
      </div>
    </div>
  );
};

export default CardModal;
