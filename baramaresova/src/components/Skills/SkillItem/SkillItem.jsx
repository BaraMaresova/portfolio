import React, { useState } from 'react';
import circle from '../../../images/circle.svg';
import CircularStatic from '../../ProgressBar/ProgressBar';
import './skillItem.scss';

export const SkillItem = (props) => {
  const [skillOpened, setSkillOpened] = useState(false);

  return (
    <>
      <div
        className="skillItem"
        onClick={() => {
          setSkillOpened(!skillOpened);
        }}
      >
        <img className="skillItem_img" src={circle} alt="Circle"></img>
        <span className="skillItem_name">{props.skillName}</span>
        {skillOpened && (
          <div className="skillItem_opened">
            <span className="skillItem_details">{props.details}</span>
            <CircularStatic value="70" />
          </div>
        )}
      </div>
    </>
  );
};
