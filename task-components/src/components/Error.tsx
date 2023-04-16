import React from 'react';
import '../styles/error.css';

const Error: React.FC = () => {
  return (
    <>
      <div className="not-found">
        <p className="no-content">Oops... Something went wrong...</p>
      </div>
    </>
  );
};

export default Error;
