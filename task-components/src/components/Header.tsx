import React from 'react';
import '../styles/header.css';
import Navbar from './Navbar';

type HeaderProps = {
  name: string;
  children?: React.ReactNode;
};

const Header: React.FC<HeaderProps> = ({ name, ...props }) => {
  const pageName = `page page-${name}`;
  return (
    <header>
      <h1 className={pageName}>{name} page</h1>
      <Navbar></Navbar>
      {props.children}
    </header>
  );
};

export default Header;
