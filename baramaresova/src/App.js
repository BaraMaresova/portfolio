import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Homepage } from '../src/pages/Homepage.jsx';
import { Experiences } from './pages/Experiences.jsx';
import { References } from './pages/References.jsx';
import { Skills } from './pages/Skills.jsx';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/experiences" element={<Experiences />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/references" element={<References />} />
    </Routes>
  );
}

export default App;
