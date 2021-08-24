import React from 'react';
import { SkillItem } from './SkillItem/SkillItem.jsx';
import skills from './skills.json';
import './skills.scss';

export const Skills = () => {
  return (
    <section id="skills" className="skills_section">
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
    </section>
  );
};
