import React from 'react';
import { ExperienceItem } from '../components/ExperienceItem/ExperienceItem.jsx';
import { Footer } from '../components/Footer/Footer.jsx';
import { Header } from '../components/Header/Header.jsx';
import { useLanguage } from '../context/LanguageContext.jsx';
import './experiences.scss';

export const Experiences = () => {
  const { dictionary } = useLanguage();

  return (
    <section>
      <Header />
      <div className="experiences">
        {dictionary.experiences.map((exp) => (
          <ExperienceItem
            exp_date={exp.exp_date}
            exp_name={exp.exp_name}
            href={exp.href}
            exp_details={exp.exp_details}
          />
        ))}
      </div>
      <Footer />
    </section>
  );
};
