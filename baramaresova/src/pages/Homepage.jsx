import React from 'react';
import { Header } from '../components/Header/Header.jsx';

import { Footer } from '../components/Footer/Footer.jsx';
import { Statement } from '../components/Statement/Statement.jsx';
import './homepage.scss';
import Navigation from '../components/Navigation.jsx';

export const Homepage = () => {
  return (
    <>
      <div className="body_wrapper">
        <Header />
        <Statement />
        <Footer />
      </div>
    </>
  );
};
