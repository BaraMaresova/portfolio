import React from 'react';
import { SkillItem } from './SkillItem/SkillItem.jsx';
import skills from './skills.json';
import './skills.scss';

export const Skills = () => {
  /*  const left = [];
  const right = [];
  skills.map((skill) => {
    if (skill.type === 'programming') return left.push(skill);
    else return right.push(skill);
  }); */

  return (
    <section id="skills" className="skills_section">
      <div className="skills">
        {skills.map((skill, i) => (
          <SkillItem
            skillName={skill.skill_name}
            progress={skill.progress}
            details={skill.details}
            order={i % 2 === 0 ? '1' : '-1'}
            top={(450 / skills.length) * Math.floor(i / 2) * 2}
            left={
              i % 2 === 0
                ? 180 +
                  90 *
                    (Math.abs(Math.floor(skills.length - 1) / 2 - i) /
                      Math.floor((skills.length - 1) / 2))
                : null
            }
            right={
              i % 2 != 0
                ? 180 +
                  90 *
                    (Math.abs(Math.floor(skills.length - 1) / 2 - i) /
                      Math.floor((skills.length - 1) / 2))
                : null
            }
          />
        ))}
      </div>
      <div className="skillsTitle">
        <h2>Dovednosti</h2>
      </div>
    </section>
  );
};
