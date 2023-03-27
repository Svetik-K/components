import React from 'react';
import Header from '../components/Header';
import Search from 'components/Search';

class MainPage extends React.Component {
  render() {
    return (
      <div>
        <Header name="Home"></Header>
        <Search></Search>
      </div>
    );
  }
}

export default MainPage;
