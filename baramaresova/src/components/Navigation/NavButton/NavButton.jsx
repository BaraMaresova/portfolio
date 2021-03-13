import React from 'react';

import { useHistory } from 'react-router-dom';
import './navButton.scss';

export const NavButton = (props) => {
  const { push } = useHistory();

  return (
    <button className={props.className} onClick={() => push(`/${props.id}`)}>
      {props.navItem}
    </button>
  );
};
/*
<button className={props.className}></button> 
<Link to =`/${props.id}`/>
      {props.navItem}
      </Link>
    </button>*/
