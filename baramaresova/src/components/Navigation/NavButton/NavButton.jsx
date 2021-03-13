import React from 'react';
import './navButton.scss';

export const NavButton = (props) => {
  return (
    <div className={props.className}>
      <a href={`#${props.id}`}>{props.navItem}</a>
    </div>
  );
};
