import React, { useState } from 'react';
import { Header } from '../components/Header/Header.jsx';
import { References } from '../components/References/References.jsx';
import { Experiences } from '../components/Experiences/Experiences.jsx';
import { Skills } from '../components/Skills/Skills.jsx';
import { Footer } from '../components/Footer/Footer.jsx';
import { Statement } from '../components/Statement/Statement.jsx';
import './homepage.scss';

export const Homepage = () => {
  const [activePart, setActivePart] = useState('statement');
  return (
    <>
      <div className="body_wrapper">
        <Header />
        <nav className="navigation">
          <div className="navButton">
            <a
              href="#references"
              className={activePart === 'active'}
              onClick={(e) => setActivePart('references')}
            >
              Reference
            </a>
          </div>
          <div className="navButton">
            <a
              href="#skills"
              className={activePart === 'active'}
              onClick={(e) => setActivePart('skills')}
            >
              Dovednosti
            </a>
          </div>
          <div className="navButton">
            <a
              href="#experiences"
              className={activePart === 'active'}
              onClick={(e) => setActivePart('experiences')}
            >
              Zkušenosti
            </a>
          </div>
        </nav>

        <div className="main">
          {activePart === 'statement' ? <Statement /> : null}
          {activePart === 'references' ? <References /> : null}
          {activePart === 'experiences' ? <Experiences /> : null}
          {activePart === 'skills' ? <Skills /> : null}
        </div>

        <Footer />
      </div>
    </>
  );
};
