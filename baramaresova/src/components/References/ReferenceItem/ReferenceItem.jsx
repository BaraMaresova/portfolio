import React from 'react';
import circleRef from '../../../images/circleRef.svg';
import './referenceItem.scss';

export const ReferenceItem = (props) => {
  return (
    <>
      <div className="referenceItem">
        <div className="reference">
          <img
            className="referenceImage"
            src={props.ref_src}
            alt="printscreen referenčního webu"
          />
          <h3 className="referenceName">{props.ref_name}</h3>
        </div>
        <div className="reference--opened">
          <img
            className="referenceImage--opened"
            src={props.ref_src_opened}
            alt="printscreen referenčního webu"
          />
          <h3 className="referenceName--opened">
            <a href={props.ref_href} target="blank">
              {props.ref_name}
            </a>
          </h3>
          <span className="referenceDetails--opened">{props.ref_details}</span>
        </div>
        <div className="referencePointer">
          <img src={circleRef} alt="kolečko" />
          <span className={props.r_line_length}></span>
        </div>
      </div>
    </>
  );
};
