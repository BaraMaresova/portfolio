import React, { useState } from 'react';

import { ProgressBar } from '../../ProgressBar/ProgressBar.jsx';
import circle from '../../../images/circle.svg';
import './skillItem.scss';

export const SkillItem = (props) => {
  const [skillOpened, setSkillOpened] = useState(false);
  const [progress, setProgress] = useState(0);


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
            <ProgressBar progress={setProgress}/>
          </div>
        )}
      </div>
    </>
  );
};
