import React from 'react';
import { Link } from 'react-router-dom';
import './navigation.scss';
import { useLanguage } from '../context/LanguageContext';

function Navigation() {
  const { dictionary } = useLanguage();

  return (
    <nav className="navigation">
      <Link className="navButton" to="/references">
        {dictionary.nav.references}
      </Link>
      <Link className="navButton" to="/skills">
        {dictionary.nav.skills}
      </Link>
      <Link className="navButton" to="/experiences">
        {dictionary.nav.experiences}
      </Link>
    </nav>
  );
}

export default Navigation;
