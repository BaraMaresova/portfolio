import React, { useState } from 'react';
import './navigation.scss';

export const Navigation = () => {
  const [activePart, setActivePart] = useState('references');

  return (
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
  );
};
