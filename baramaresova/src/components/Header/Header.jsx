import React from 'react';
import foto from '../../images/resized.png';
import { Link } from 'react-router-dom';
import './header.scss';
import Navigation from '../Navigation';

export const Header = () => {
  return (
    <>
      <div className="header">
        <Link to="/" className="namePhoto">
          <img className="titlePhoto" src={foto} alt="Má fotografie" />
          <span className="titleName">
            <span className="name">Bára</span>
            <span className="surname">Marešová</span>
          </span>
        </Link>
      </div>
      <Navigation />
    </>
  );
};
