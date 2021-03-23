import React from 'react';
import CircularStatic from '../../ProgressBar/ProgressBar';
import './skillItem.scss';

export const SkillItem = (props) => {
  return (
    <div className="skillItem_div">
      <div
        className="skillItem"
        style={{
          top: `${props.top}px`,
          left: `${props.left}px`,
          right: `${props.right}px`,
          justifyContent: `${props.justifyContent}`,
        }}
      >
        <span className="skillItem_name">{props.skillName}</span>
        <div style={{ order: `${props.order}` }} id="progressDiv">
          <CircularStatic value={props.progress} />
        </div>
      </div>
      <div className="skillItem_opened">
        <div className="skillItem_details">
          <p>{props.details}</p>
        </div>
      </div>
    </div>
  );
};
