import React from 'react';
import github from '../../images/github.svg';
import linkedin from '../../images/linkedin.svg';
import email from '../../images/email.svg';

import './footer.scss';

export const Footer = () => {
  return (
    <footer className="footer">
      <div
        className="footer_contact"
        onClick={() => {
          window.open('mailto:bara@spacebarkeepers.cz');
        }}
      >
        <img src={email} alt="ikona zprávy" className="footer_icon" />
        <span className="footer_span">Email</span>
      </div>
      <div
        className="footer_contact"
        onClick={() => {
          window.open('https://github.com/BaraMaresova');
        }}
      >
        <img src={github} alt="ikona githubu" className="footer_icon" />
        <span className="footer_span">GitHub</span>
      </div>
      <div
        className="footer_contact"
        onClick={() => {
          window.open('https://www.linkedin.com/in/bara-maresova');
        }}
      >
        <img src={linkedin} alt="ikona linkedinu" className="footer_icon" />
        <span className="footer_span">LinkedIn</span>
      </div>
    </footer>
  );
};
