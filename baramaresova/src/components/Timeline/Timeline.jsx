import React from 'react';
import { References } from '../References/References.jsx';
import './timeline.scss';

export const Timeline = () => {
  return (
    <div className="timeline">
      <span className="middleLine"></span>
      <References />
    </div>
  );
};
