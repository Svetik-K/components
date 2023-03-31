import React from 'react';
import Header from '../components/Header';
import '../styles/pages.css';

const AboutPage: React.FC = () => {
  return (
    <div>
      <Header name="About Us"></Header>
      <main className="about-page-main"></main>
    </div>
  );
};

export default AboutPage;
