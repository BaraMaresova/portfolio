import React from 'react';
import { Link } from 'react-router-dom';
import './navigation.scss';

function Navigation() {
  return (
    <nav className="navigation">
      <Link className="navButton" to="/references">
        Reference
      </Link>
      <Link className="navButton" to="/skills">
        Dovednosti
      </Link>
      <Link className="navButton" to="/experiences">
        Zkušenosti
      </Link>
    </nav>
  );
}

export default Navigation;
