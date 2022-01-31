import React from 'react';
import { Footer } from '../components/Footer/Footer.jsx';
import { Header } from '../components/Header/Header.jsx';
import { SkillItem } from '../components/Skills/SkillItem/SkillItem.jsx';
import skills from '../components/Skills/skills.json';
import './skills.scss';

export const Skills = () => {
  return (
    <section className="skills_section">
      <Header />
      <div className="skills">
        {skills.map((skill, i) => (
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
