import React from 'react';
import { Link } from 'react-router';

const Header = () => {
  return (
    <nav>
      <div className="nav-wrapper">
        <Link to="/" className="brand-logo center">LIST</Link>
        <div className="right">
          <ul>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/list">List</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Header;
