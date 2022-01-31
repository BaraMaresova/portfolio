import React from 'react';
import './skillItem.scss';

export const SkillItem = (props) => {
  return (
    <div className="skillItem_div">
      <div className="skillItem">
        <span className="skillItem_name">{props.skillName}</span>
      </div>
      <div className="skillItem_opened">
        <div className="skillItem_details">
          <p>{props.details}</p>
        </div>
      </div>
    </div>
  );
};
