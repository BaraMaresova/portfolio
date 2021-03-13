import React from 'react';
import CircularStatic from '../../ProgressBar/ProgressBar';
import './skillItem.scss';

export const SkillItem = (props) => {
  return (
    <>
      <div className="skillItem">
        <CircularStatic value={props.progress} />
        <span className="skillItem_name">{props.skillName}</span>
      </div>
      <div id="skillItem_opened" className="skillItem_opened">
        <div className="skillItem_details">
          <p>{props.details}</p>
        </div>
      </div>
    </>
  );
};
