import React from 'react';
import { NavButton } from './NavButton/NavButton.jsx';
import { About_sb } from '../Dialog/About_sb.jsx';
import { Timeline } from '../Timeline/Timeline.jsx';
import './navigation.scss';

export const Navigation = () => {
  return (
    <>
      <div className="navigation">
        <About_sb navItem="O mně" />
        <NavButton id="references" navItem="Reference" />{' '}
        <NavButton id="experiences" navItem="Zkušenosti" />
        <NavButton id="skills" navItem="Dovednosti" />
      </div>{' '}
      <Timeline
        timelineClass="timeline_horizontal"
        middleLineClass="middleLine_horizontal"
      />
    </>
  );
};
