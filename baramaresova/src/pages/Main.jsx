import React from 'react';
import { Experiences } from '../components/Experiences/Experiences.jsx';
import { References } from '../components/References/References.jsx';
import { Timeline } from '../components/Timeline/Timeline.jsx';
import './main.scss';

export const Main = () => {
  return (
    <div className="main">
      <References />
      <Timeline />
      <Experiences />
    </div>
  );
};
