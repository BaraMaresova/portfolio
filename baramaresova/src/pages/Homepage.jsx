import React from 'react';
import { Header } from '../components/Header/Header.jsx';
import { Timeline } from '../components/Timeline/Timeline.jsx';
import { Skills } from '../components/Skills/Skills.jsx';

export const Homepage = () => {
  return (
    <>
      <Header />
      <Timeline />
      <Skills />
    </>
  );
};
