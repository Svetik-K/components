import React from 'react';
import Header from '../components/Header';
import SearchBar from 'components/SearchBar';

class MainPage extends React.Component {
  render() {
    return (
      <div>
        <Header>
          <h1>Enhance</h1>
        </Header>
        <SearchBar></SearchBar>
      </div>
    );
  }
}

export default MainPage;
