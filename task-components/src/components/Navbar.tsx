import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/navigation.css';

class Navbar extends React.Component {
  render() {
    return (
      <nav className="navigation">
        <ul className="links-list">
          <li className="list-item">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="list-item">
            <Link to="/about" className="nav-link">
              About Us
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
