import React from 'react';
import { Footer } from '../components/Footer/Footer.jsx';
import { Header } from '../components/Header/Header.jsx';
import { SkillItem } from '../components/SkillItem/SkillItem.jsx';
import { useLanguage } from '../context/LanguageContext.jsx';
import './skills.scss';

export const Skills = () => {
  const { dictionary } = useLanguage();

  return (
    <section className="skills_section">
      <Header />
      <div className="skills">
        {dictionary.skills.map((skill, i) => (
          <SkillItem
            key={i}
            skillName={skill.skill_name}
            progress={skill.progress}
            details={skill.details}
          />
        ))}
      </div>
      <Footer />
    </section>
  );
};
