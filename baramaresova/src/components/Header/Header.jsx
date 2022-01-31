import React from 'react';
import foto from '../../images/resized.png';
import { Link } from 'react-router-dom';
import './header.scss';
import Navigation from '../Navigation';
import LanguageSwitch from '../../utils/languages/LanguageSwitch';

export const Header = () => {
  return (
    <>
      <div className="header">
        <header className="namePhoto">
          <Link to="/">
            <img className="titlePhoto" src={foto} alt="Má fotografie" />
          </Link>
          <span className="titleName">
            <span className="name">Bára</span>
            <span className="surname">Marešová</span>
          </span>
          <LanguageSwitch />
        </header>
      </div>
      <Navigation />
    </>
  );
};
