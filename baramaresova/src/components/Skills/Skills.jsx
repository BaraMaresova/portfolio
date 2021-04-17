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
            order={i % 2 === 0 ? '1' : '-1'}
            justifyContent={i % 2 === 0 ? 'flex-end' : 'flex-start'}
            top={(450 / (skills.length - 1)) * 2 * Math.floor(i / 2)}
            left={
              i % 2 === 0
                ? 180 +
                  180 *
                    (Math.floor(
                      Math.abs(
                        Math.floor(skills.length / 2 - 1) / 2 -
                          Math.floor(i / 2),
                      ),
                    ) /
                      Math.floor((skills.length - 1) / 2))
                : null
            }
            right={
              i % 2 !== 0
                ? 180 +
                  180 *
                    (Math.floor(
                      Math.abs(
                        Math.floor(skills.length / 2 - 1) / 2 -
                          Math.floor(i / 2),
                      ),
                    ) /
                      Math.floor((skills.length - 1) / 2))
                : null
            }
          />
        ))}
      </div>
    </section>
  );
};
