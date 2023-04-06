import React from 'react';
import '../styles/loader.css';

const Loader: React.FC = () => {
  return (
    <div className="loader">
      <div className="circle circle-1"></div>
      <div className="circle circle-2"></div>
      <div className="circle circle-3"></div>
      <div className="circle circle-4"></div>
      <div className="circle circle-5"></div>
    </div>
  );
};

export default Loader;
