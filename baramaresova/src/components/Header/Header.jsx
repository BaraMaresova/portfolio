import React from 'react';
import Foto from '../../images/resized.jpg';
import { Navigation } from '../Navigation/Navigation.jsx';
import './header.css';

export const Header = () => {
  return (
    <div className="header">
      <div className="namePhoto">
        <img className="titlePhoto" src={Foto} alt="Má fotografie" />
        <span className="titleName">
          <span className="name">Bára</span>
          <span className="surname">Marešová</span>
        </span>
      </div>
      <Navigation />
    </div>
  );
};
