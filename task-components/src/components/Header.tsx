import React from 'react';
import '../styles/header.css';

type HeaderProps = {
  children?: React.ReactNode;
};

class Header extends React.Component<HeaderProps> {
  render() {
    return <header>{this.props.children}</header>;
  }
}

export default Header;
