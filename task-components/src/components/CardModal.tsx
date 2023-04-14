import React from 'react';
import '../styles/modal.css';
import { useGetCharacterByIdQuery } from 'pages/ApiSlice';

type CardModalProps = {
  charId: number;
  curState: boolean;
  handleClose: () => void;
};

const CardModal: React.FC<CardModalProps> = ({ charId, curState, handleClose }) => {
  const { data, error, isLoading } = useGetCharacterByIdQuery(charId);
  return (
    <div className={curState ? `overlay active` : `overlay`}>
      {error ? (
        <div>Something went wrong...</div>
      ) : isLoading ? (
        <div>Loading...</div>
      ) : data ? (
        <>
          <div className="modal-bg" onClick={handleClose}></div>
          <div className="modal">
            <div className="modal-header">
              <h3 className="modal-title">Personal file</h3>
              <button className="button button-close" onClick={handleClose}></button>
            </div>
            <div className="modal-content">
              <img src={data.image} alt={data.name} className="modal-image" />
              <div className="modal-info">
                <p className="modal-name">{data.name}</p>
                <p className="modal-gender">Gender: {data.gender}</p>
                <p className="modal-species">Species: {data.species}</p>
                <p className="modal-status">Status: {data.status}</p>
                <p className="modal-origin">Origin: {data.origin.name}</p>
                <p className="modal-location">Location: {data.location.name}</p>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
};

export default CardModal;
