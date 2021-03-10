import React from 'react';
import { Filler } from './Filler.jsx';
import './progressBar.scss';

export const ProgressBar = (props) => {
  return (
    <div className="progressBar">
      <Filler progress={props.progress}/>
    </div>
  );
};

//https://material-ui.com/components/progress/