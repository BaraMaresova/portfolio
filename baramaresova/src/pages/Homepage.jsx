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
          <div
            className={
              activePart === 'references' ? 'active navButton' : 'navButton'
            }
            onClick={(e) => setActivePart('references')}
          >
            Reference
          </div>
          <div
            className={
              activePart === 'skills' ? 'active navButton' : 'navButton'
            }
            onClick={(e) => setActivePart('skills')}
          >
            Dovednosti
          </div>
          <div
            className={
              activePart === 'experiences' ? 'active navButton' : 'navButton'
            }
            onClick={(e) => setActivePart('experiences')}
          >
            Zkušenosti
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
