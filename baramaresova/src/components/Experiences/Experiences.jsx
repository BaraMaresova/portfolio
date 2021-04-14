import React from 'react';
import { ExperienceItem } from './ExperienceItem/ExperienceItem.jsx';
import './experiences.scss';

export const Experiences = () => {
  return (
    <div id="experiences" className="main-right">
      <div className="experiences">
        <ExperienceItem
          e_line_length="experienceLine experienceLine-long"
          exp_date="2020"
          exp_name="Czechitas: DA Web"
          href="https://www.czechitas.cz/cs/kalendar-akci/akce/21000/"
          exp_details="Během tohoto intenzivního tříměsíčního kurzu (září - prosinec 2020) jsem nastartovala své vzdělání v oblasti front-end webového vývoje. Zhruba 70% akademie byla zaměřena na vývoj aplikací v Javascriptu (a Reactu), zbývajících 30% na HTML/CSS, UX a další nezbytnosti. Podmínkou pro úspěšné absolvování kurzu bylo mimo jiné vytvoření vlastního projektu ve dvojicích. Můj projekt s názvem Moninvo získal ocenení projektu s nejlepší technickou úrovní."
        />
        <ExperienceItem
          e_line_length="experienceLine"
          exp_date="2020"
          exp_name="Čas na změnu"
          exp_details="Během mé rodičovské dovolené nastala koronavirová krize a veškerá má práce na projektu v Booking.com téměř ze dne na den zmizela. Po zevrubné analýze mých dovedností jsem se rozhodla změnit kariéru a věnovat se programování, ve kterém jsem se díky studiu Digitální akademie našla."
        />
        <ExperienceItem
          e_line_length="experienceLine experienceLine-long"
          exp_date="2016 - 2020"
          exp_name="Booking.com"
          href="https://www.booking.com"
          exp_details="V Booking.com jsem dostala prostor rozvíjet kreativní přístupy k  řešení problémů tím, že jsem dostala na starosti projekt rozvoje krátkodobých pronájmů v celé ČR. Díky řízení projektu, aktivní práce s partnery a každodenní práce s daty se mi povedlo projekt dostat na vysokou úroveň a zajistit tím i růst týmu."
        />
        <ExperienceItem
          e_line_length="experienceLine experienceLine-short"
          exp_date="2011 - 2016"
          exp_name="Hewlett-Packard"
          href="https://www.hpe.com/us/en/home.html"
          exp_details="V Hewlett-Packard (a později v Hewlett-Packard Enterprise) jsem se postupně z asistentských pozic přes projektového koordinátora dostala k account managementu obchodních partnerů společnosti. Díky této pozici jsem se konečně více přiblížila IT a začala budovat obchodnické dovednosti."
        />
      </div>
    </div>
  );
};
