import React from 'react';
import './statement.scss';
import { useLanguage } from '../../context/LanguageContext';

export const Statement = () => {
  const { dictionary } = useLanguage();
  return (
    <div className="statement_div">
      <p className="statement_text">
        {dictionary.statementP1}
        <br />
        {dictionary.statementP2}
      </p>
    </div>
  );
};
