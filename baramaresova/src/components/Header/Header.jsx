import React from 'react';
import Foto from '../../images/resized.jpg';

export const Header = () => {
  return (
    <div className="header">
      <img className="titlePhoto" src={Foto} alt="Má fotografie" />
      <span className="name">Bára</span>
      <span className="surname">Marešová</span>
    </div>
  );
};
