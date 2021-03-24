import React from 'react';
import './timeline.scss';

export const Timeline = (props) => {
  return (
    <div className={props.timelineClass}>
      <div className={props.middleLineClass}></div>
    </div>
  );
};
