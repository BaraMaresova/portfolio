import React from 'react';
import { ReferenceItem } from '../References/ReferenceItem/ReferenceItem';
import moninvo_gif from '../../images/moninvo_resized.gif';
import sbkgraphics from '../../images/sbkgraphics_web.png';
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
        ref_www="Odkaz: Moninvo"
      />
      <ReferenceItem
        ref_src={cvplaceholder}
        ref_name="ConsultVision"
        ref_details="Webová stránka společnosti ConsultVision - ve výstavbě."
      />
      <ReferenceItem
        ref_src={sbkgraphics}
        ref_name="SpaceBarKeepers"
        ref_details="Ukázka grafiky pro web vlastní firmy SpaceBarKeepers, webová stránka je ve výstavbě."
      />
    </div>
  );
};
