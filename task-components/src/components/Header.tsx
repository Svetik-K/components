import React from 'react';

type HeaderProps = {
  children?: React.ReactNode;
};

class Header extends React.Component<HeaderProps> {
  render() {
    const headerStyle = {
      display: 'flex',
      justifyContent: 'space-between',
      width: '100%',
      padding: '20px',
      backgroundColor: '#000000',
      color: '#FFFFFF',
    };

    return <header style={headerStyle}>{this.props.children}</header>;
  }
}

export default Header;
