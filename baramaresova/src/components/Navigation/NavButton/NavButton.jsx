import React from 'react';
import { useHistory } from 'react-router-dom';
import './navButton.css';

export const NavButton = (props) => {
  const { push } = useHistory();

  return (
    <button className={props.className} onClick={() => push(`/${props.id}`)}>
      {props.navItem}
    </button>
  );
};
