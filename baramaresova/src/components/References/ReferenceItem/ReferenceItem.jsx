import React, { useState } from 'react';
import circleRef from '../../../images/circleRef.svg';
import './referenceItem.scss';

export const ReferenceItem = (props) => {
  const [referenceOpened, setReferenceOpened] = useState(false);

  return (
    <div className="referenceItem">
      <div className="referencePointer">
        <span className="referenceLine"></span>
        <img src={circleRef} alt="kolečko" />
      </div>
      <div
        className={
          referenceOpened ? 'reference reference--opened' : 'reference'
        }
        onClick={() => {
          setReferenceOpened(!referenceOpened);
        }}
      >
        <img
          className={
            referenceOpened
              ? 'referenceImage referenceImage--opened'
              : 'referenceImage'
          }
          src={props.ref_src}
          alt="printscreen referenčního webu"
        />
        <h3
          className={
            referenceOpened
              ? 'referenceName referenceName--opened'
              : 'referenceName'
          }
        >
          {props.ref_name}
        </h3>
        {referenceOpened && (
          <span className="referenceDetails">{props.ref_details}</span>
        )}
      </div>
    </div>
  );
};