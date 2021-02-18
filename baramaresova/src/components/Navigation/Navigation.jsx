import React from 'react';
import { NavButton } from './NavButton/NavButton.jsx';
import './navigation.css';

export const Navigation = () => {
  return (
    <div className="navigation">
      <NavButton
        className="navButton navButton_leftTop"
        id="about"
        navItem="O mně"
      />
      <NavButton
        className="navButton navButton_leftBottom"
        id="references"
        navItem="Reference"
      />{' '}
      <NavButton
        className="navButton navButton_rightBottom"
        id="experiences"
        navItem="Zkušenosti"
      />
      <NavButton
        className="navButton navButton_rightTop"
        id="skills"
        navItem="Dovednosti"
      />
    </div>
  );
};
