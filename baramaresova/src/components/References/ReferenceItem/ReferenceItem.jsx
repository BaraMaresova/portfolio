import React, { useState } from 'react';
import circleRef from '../../../images/circleRef.svg';
import './referenceItem.scss';

export const ReferenceItem = (props) => {
  const [referenceOpened, setReferenceOpened] = useState(false);

  return (
    <div className="referenceItem">
      <div
        className={
          referenceOpened ? 'reference reference--opened' : 'reference'
        }
        onMouseOver={(e) => {
          e.preventDefault();
          setReferenceOpened(referenceOpened === true);
        }}
        onMouseOut={(e) => {
          e.preventDefault();
          setReferenceOpened(referenceOpened === false);
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
        {referenceOpened ? (
          <h3 className="referenceName referenceName--opened">
            {' '}
            <a href={props.ref_href} target="blank">
              {props.ref_name}
            </a>
          </h3>
        ) : (
          <h3 className="referenceName">{props.ref_name}</h3>
        )}

        {referenceOpened && (
          <span className="referenceDetails">{props.ref_details}</span>
        )}
      </div>
      <div className="referencePointer">
        <img src={circleRef} alt="kolečko" />
        <span className={props.r_line_length}></span>
      </div>
    </div>
  );
};
