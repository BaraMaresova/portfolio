import React from 'react';
import './referenceItem.scss';

export const ReferenceItem = (props) => {
  return (
    <>
      <div className="referenceItem">
        <div
          className="referenceImage"
          style={{ backgroundImage: `url(${props.ref_src})` }}
        ></div>
        <h3 className="referenceName">{props.ref_name}</h3>
        <span className="referenceDetails">
          {props.ref_details}
          <br />
          <a className="referenceWeb" href={props.ref_href} target="blank">
            {props.ref_www}
          </a>
        </span>
      </div>
    </>
  );
};
