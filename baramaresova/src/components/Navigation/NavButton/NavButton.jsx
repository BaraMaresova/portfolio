import React from 'react';
import './navButton.scss';

export const NavButton = (props) => {
  return (
    <div className="navButton">
      <a href={`#${props.id}`}>{props.navItem}</a>
    </div>
  );
};
