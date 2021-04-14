import React from 'react';
import './referenceItem.scss';

export const ReferenceItem = (props) => {
  return (
    <>
      <div className="referenceItem">
        <img
          className="referenceImage"
          src={props.ref_src}
          alt="printscreen referenčního webu"
        />
        <h3 className="referenceName">{props.ref_name}</h3>
        <span className="referenceDetails">
          {props.ref_details}
          <br />
          <a className="referenceWeb" href={props.ref_href} target="blank">
            Odkaz: {props.ref_name}
          </a>
        </span>
      </div>
    </>
  );
};
