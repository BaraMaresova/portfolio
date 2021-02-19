import React from 'react';
import { SkillItem } from './SkillItem/SkillItem.jsx';
import './skills.scss';

export const Skills = () => {
  return (
    <div className="skills">
      <SkillItem skillName="HTML" details="Detaily netřeba" progress="90%" />
      <SkillItem skillName="CSS" details="Detaily netřeba" progress="80%" />
      <SkillItem
        skillName="Javascript"
        details="Detaily netřeba"
        progress="50%"
      />
      <SkillItem skillName="React" details="Detaily netřeba" progress="70%" />
      <SkillItem skillName="Figma" details="Ta mě baví" progress="80%" />
    </div>
  );
};
