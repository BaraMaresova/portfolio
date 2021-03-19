import React from 'react';
import CircularStatic from '../../ProgressBar/ProgressBar';
import './skillItem.scss';

export const SkillItem = (props) => {
  return (
    <>
      <div
        className="skillItem"
        style={{
          top: `${props.top}px`,
          left: `${props.left}px`,
          right: `${props.right}px`,
        }}
      >
        <span className="skillItem_name">{props.skillName}</span>
        <div style={{ order: `${props.order}` }}>
          <CircularStatic value={props.progress} />
        </div>
      </div>
      <div id="skillItem_opened" className="skillItem_opened">
        <div className="skillItem_details">
          <p>{props.details}</p>
        </div>
      </div>
    </>
  );
};
