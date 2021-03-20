import React from 'react';
import circleExp from '../../../images/circleExp.svg';
import './experienceItem.scss';

export const ExperienceItem = (props) => {
  return (
    <div className="experienceItem">
      <div className="experiencePointer">
        <span className={props.e_line_length}></span>
        <img src={circleExp} alt="kolečko" />
      </div>
      <div className="experience">
        <h3 className="experienceDate">{props.exp_date}</h3>
        <h3 className="experienceName">{props.exp_name}</h3>
      </div>
     
        <div className="experience--opened animate__fadeIn">
          <a href={props.href} target="_blank">
            <div className="experienceName--opened">
              <h3 className="experienceDate--opened">{props.exp_date}</h3>
              <h3 className="experienceName--opened">{props.exp_name}</h3>
            </div>
            <span className="experienceDetails--opened">
              {props.exp_details}
            </span>
          </a>
        </div>
    </div>
  );
};
