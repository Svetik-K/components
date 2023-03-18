import React from 'react';
import '../styles/header.css';
import Navbar from './Navbar';

type HeaderProps = {
  name: string;
  children?: React.ReactNode;
};

class Header extends React.Component<HeaderProps> {
  render() {
    return (
      <header>
        <h1 className="page-name">{this.props.name}</h1>
        <Navbar></Navbar>
        {this.props.children}
      </header>
    );
  }
}

export default Header;
