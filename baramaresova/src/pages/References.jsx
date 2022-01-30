import React from 'react';
import { ReferenceItem } from '../components/ReferenceItem/ReferenceItem';
import moninvo_gif from '../images/moninvo_resized.gif';
import sbkgraphics from '../images/sbkgraphics_web.png';
import letokruh from '../images/letokruh.png';
import dkck from '../images/dkck_draft.png';
import skp from '../images/skpJirkovdraft.png';
import './references.scss';
import { Header } from '../components/Header/Header';
import { Footer } from '../components/Footer/Footer';

export const References = () => {
  return (
    <section>
      <Header />
      <div className="references">
        <ReferenceItem
          ref_src={sbkgraphics}
          ref_name="SpaceBarKeepers"
          ref_details="Web vlastní značky SpaceBarKeepers, UX design a vlastní grafické prvky."
          ref_href="https://spacebarkeepers.com"
          ref_www="spacebarkeepers.com"
        />
        <ReferenceItem
          ref_src={letokruh}
          ref_name={'Letokruh'}
          ref_href="https://letokruh.eu/"
          ref_details="Realizace webu podle UX designu - React šablona pro Wordpress"
          ref_www="letokruh.eu"
        />

        <ReferenceItem
          ref_src={dkck}
          ref_name="Dámský klub Český Krumlov"
          ref_href="https://damskyklubck.cz/"
          ref_details="Realizace webu včetně UX designu."
          ref_www="damskyklubck.cz"
        />
        <ReferenceItem
          ref_src={skp}
          ref_name="Sportovní klub karate Hvězda Jirkov"
          ref_href="https://skphvezdajirkov.cz"
          ref_details="Realizace webu včetně UX designu a vlastních grafických prvků."
          ref_www="skphvezdajirkov.cz"
        />
        <ReferenceItem
          ref_src={moninvo_gif}
          ref_name={'Moninvo'}
          ref_details="Aplikace na monitorování nákladů, umožňuje nahrání faktur ve formátu pdf, přečte data z faktury a zobrazí je v grafu a tabulce. Projekt získal ocenění Projekt s nejvyšší technickou úrovní během studia Digitální akademie - Web od Czechitas."
        />
      </div>
      <Footer />
    </section>
  );
};
