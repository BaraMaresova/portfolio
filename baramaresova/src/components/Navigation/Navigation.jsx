import React, { useState } from 'react';
import { NavButton } from './NavButton/NavButton.jsx';
/* import { About } from '../Dialog/About.jsx';
 */ import { Timeline } from '../Timeline/Timeline.jsx';
import './navigation.scss';

export const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleSelectItem = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav>
      <div className="navigation_mobile">
        <button
          className={menuOpen ? 'hamburger hamburger_opened' : 'hamburger'}
          aria-label="menu"
          onClick={() => {
            setMenuOpen(!menuOpen);
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        {menuOpen ? (
          <>
            <NavButton
              id="references"
              navItem="Reference"
              onSelect={handleSelectItem}
            />
            <NavButton
              id="experiences"
              navItem="Zkušenosti"
              onSelect={handleSelectItem}
            />
            <NavButton
              id="skills"
              navItem="Dovednosti"
              onSelect={handleSelectItem}
            />
          </>
        ) : null}
      </div>
      <div className="navigation_desktop">
        {/*         <About navItem="O mně" />
         */}{' '}
        <NavButton id="references" navItem="Reference" />{' '}
        <NavButton id="experiences" navItem="Zkušenosti" />
        <NavButton id="skills" navItem="Dovednosti" />
      </div>{' '}
      <Timeline
        timelineClass="timeline_horizontal"
        middleLineClass="middleLine_horizontal"
      />
    </nav>
  );
};
