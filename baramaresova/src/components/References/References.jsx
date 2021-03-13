import React from 'react';
import { ReferenceItem } from '../References/ReferenceItem/ReferenceItem';
import test_reference from '../../images/placeholder.png';
import moninvo_gif from '../../images/moninvo_gif.gif';
import moninvo from '../../images/moninvo.png';
import './references.scss';

export const References = () => {
  return (
    <div className="main_left">
      <h2 className="referencesTitle">Reference</h2>
      <div className="references" id="references">
        <ReferenceItem
          ref_src={test_reference}
          ref_src_opened={test_reference}
          ref_name="Testovací reference 1"
          ref_details="testovací reference z roku 2021 bla bla bla, JS, React, jQuery, sass, apod."
          r_line_length="referenceLine referenceLine-short"
        />
        <ReferenceItem
          ref_src={test_reference}
          ref_src_opened={test_reference}
          ref_name="Testovací reference 2"
          ref_details="testovací reference z roku 2021 bla bla bla, JS, React, jQuery, sass, apod."
          r_line_length="referenceLine referenceLine-long"
        />
        <ReferenceItem
          ref_src={moninvo}
          ref_src_opened={moninvo_gif}
          ref_name={'Moninvo'}
          ref_href="https://www.moninvo.cz/#/"
          ref_details="Aplikace na monitorování nákladů, umožňuje nahrání faktur ve formátu pdf, přečte data z faktury a zobrazí je v grafu a tabulce. Projekt získal ocenění Projekt s nejvyšší technickou úrovní během studia Digitální akademie - Web od Czechitas."
          r_line_length="referenceLine "
        />
      </div>
    </div>
  );
};
