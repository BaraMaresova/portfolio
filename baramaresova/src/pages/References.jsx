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
import { useLanguage } from '../context/LanguageContext';

const ref_images = {
  1: { src: sbkgraphics },
  2: { src: letokruh },
  3: { src: dkck },
  4: { src: skp },
  5: { src: moninvo_gif },
};

export const References = () => {
  const { dictionary } = useLanguage();

  return (
    <section>
      <Header />
      <div className="references">
        {dictionary.references.map((ref) => (
          <ReferenceItem
            ref_src={ref_images[ref.ref_key].src}
            ref_name={ref.ref_name}
            ref_details={ref.ref_details}
            ref_href={ref.ref_href}
            ref_www={ref.ref_www}
            key={ref.ref_key}
          />
        ))}
      </div>
      <Footer />
    </section>
  );
};
