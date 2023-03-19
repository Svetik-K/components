import React from 'react';
import '../styles/header.css';
import Navbar from './Navbar';

type HeaderProps = {
  name: string;
  children?: React.ReactNode;
};

class Header extends React.Component<HeaderProps> {
  render() {
    const pageName = `page page-${this.props.name}`;
    return (
      <header>
        <h1 className={pageName}>It is {this.props.name} page</h1>
        <Navbar></Navbar>
        {this.props.children}
      </header>
    );
  }
}

export default Header;
