import React from 'react';
import { ExperienceItem } from './ExperienceItem/ExperienceItem.jsx';
import bookingLogo from '../../images/bookingLogo.png';
import './experiences.scss';

export const Experiences = () => {
  return (
    <div className="main-right">
      <h2 className="experiencesTitle">Zkušenosti</h2>

      <div className="experiences" id="experiences">
        <ExperienceItem
          e_line_length="experienceLine experienceLine-long"
          exp_date="2020"
          exp_name="Czechitas - Digitální akademie"
          exp_details="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        />
        <ExperienceItem
          e_line_length="experienceLine"
          exp_date="2016-2020"
          exp_name="Booking.com"
          logo={bookingLogo}
          exp_details="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        />
        <ExperienceItem
          e_line_length="experienceLine experienceLine-short"
          exp_date="2020"
          exp_name="Nevím"
          exp_details="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        />
        <ExperienceItem
          e_line_length="experienceLine experienceLine-long"
          exp_date="2011-2016"
          exp_name="Hewlett-Packard"
          exp_details="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        />
      </div>
    </div>
  );
};
