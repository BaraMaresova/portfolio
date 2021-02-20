import React from 'react';
import { ReferenceItem } from '../References/ReferenceItem/ReferenceItem';
import test_reference from '../../images/test_reference.jpg';
import './references.scss';

export const References = () => {
  return (
    <div className="references">
      <ReferenceItem
        ref_src={test_reference}
        ref_name="Testovací reference 1"
        ref_details="testovací reference z roku 2021 bla bla bla, JS, React, jQuery, sass, apod."
        line_length="referenceLine referenceLine-short"
      />
      <ReferenceItem
        ref_src={test_reference}
        ref_name="Testovací reference 2"
        ref_details="testovací reference z roku 2021 bla bla bla, JS, React, jQuery, sass, apod."
        line_length="referenceLine referenceLine-long"
      />
      <ReferenceItem
        ref_src={test_reference}
        ref_name="Testovací reference 3"
        ref_details="testovací reference z roku 2021 bla bla bla, JS, React, jQuery, sass, apod."
        line_length="referenceLine "
      />
    </div>
  );
};
