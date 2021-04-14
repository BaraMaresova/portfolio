import React from 'react';
import './experienceItem.scss';

export const ExperienceItem = (props) => {
  return (
    <div className="experienceItem">
      <div className="experienceNameDate">
        <h3 className="experienceDate">{props.exp_date}</h3>
        <h3 className="experienceName">{props.exp_name}</h3>
      </div>
      <span className="experienceDetails">{props.exp_details}</span>
    </div>
  );
};
