import React from 'react';
import Header from '../components/Header';
import '../styles/pages.css';

const NotFound: React.FC = () => {
  return (
    <div>
      <Header name="404"></Header>
      <main className="error-page-main"></main>
    </div>
  );
};

export default NotFound;
