import React from 'react';
import { Character } from 'utils/types';
import '../styles/modal.css';
import Button from './Button';

type CardModalProps = {
  charInfo: Character;
  curState: boolean;
  handleClose: () => void;
};

const CardModal: React.FC<CardModalProps> = ({ charInfo, curState, handleClose }) => {
  const { name, image, gender, species, status, origin, location } = charInfo;
  return (
    <div className={curState ? `overlay active` : `overlay`} onClick={handleClose}>
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
            <p className="modal-location">Location: {location.name}</p>
          </div>
        </div>
        <Button name="close" onClick={handleClose}></Button>
      </div>
    </div>
  );
};

export default CardModal;
