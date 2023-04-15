import React from 'react';
import '../styles/error.css';

const Error: React.FC = () => {
  return (
    <>
      <div className="not-found">
        <p className="no-matches">Oops... No matches found</p>
      </div>
    </>
  );
};

export default Error;
