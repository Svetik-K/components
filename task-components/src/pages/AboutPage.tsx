import React from 'react';
import Header from '../components/Header';
import '../styles/pages.css';

class AboutPage extends React.Component {
  render() {
    return (
      <div>
        <Header name="About Us"></Header>
        <main className="about-page-main"></main>
      </div>
    );
  }
}

export default AboutPage;
