import React from 'react';
import { ReferenceItem } from '../References/ReferenceItem/ReferenceItem';
import test_reference from "../../images/test_reference.jpg"
import './references.scss';

export const References = () => {
  return (
    <div className="references">
      <ReferenceItem 
      ref_src={test_reference}
      ref_name="Testovací reference"
      ref_details="testovací reference z roku 2021 bla bla bla, JS, React, jQuery, sass, apod."
      />
    </div>
  );
};
