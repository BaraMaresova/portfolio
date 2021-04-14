import React from 'react';
import { ReferenceItem } from '../References/ReferenceItem/ReferenceItem';
import moninvo_gif from '../../images/moninvo_resized.gif';

import cvplaceholder from '../../images/ConsultVision_placeholder.jpg';
import './references.scss';

export const References = () => {
  return (
  
      <div className="references">
        <ReferenceItem
          ref_src={moninvo_gif}
          ref_name={'Moninvo'}
          ref_href="https://www.moninvo.cz/#/"
          ref_details="Aplikace na monitorování nákladů, umožňuje nahrání faktur ve formátu pdf, přečte data z faktury a zobrazí je v grafu a tabulce. Projekt získal ocenění Projekt s nejvyšší technickou úrovní během studia Digitální akademie - Web od Czechitas."
          r_line_length="referenceLine referenceLine-long"
        />
        <ReferenceItem
          ref_src={cvplaceholder}
          ref_name="ConsultVision"
          ref_details="Webová stránka společnosti ConsultVision - ve výstavbě."
          r_line_length="referenceLine referenceLine-short"
        />
      </div>
  );
};
