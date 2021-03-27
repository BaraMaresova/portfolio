import React from 'react';
import foto from '../../images/resized.png';
import { Navigation } from '../Navigation/Navigation.jsx';
import { Statement } from '../Statement/Statement.jsx';
import './header.scss';

export const Header = () => {
  return (
    <div className="header">
      <div className="namePhoto">
        <img className="titlePhoto" src={foto} alt="Má fotografie" />
        <span className="titleName">
          <span className="name">Bára</span>
          <span className="surname">Marešová</span>
        </span>
      </div>
      <Statement />
      <Navigation />
    </div>
  );
};
