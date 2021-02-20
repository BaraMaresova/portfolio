import React from 'react';
import { Header } from '../components/Header/Header.jsx';
import { Main } from './Main.jsx';
import { Skills } from '../components/Skills/Skills.jsx';
import './homepage.scss';

export const Homepage = () => {
  return (
    <>
      <Header />
      <Main />
      <Skills />
    </>
  );
};
