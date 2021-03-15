import React, { useEffect } from 'react';
import { SkillItem } from './SkillItem/SkillItem.jsx';
import $ from 'jquery';
import './skills.scss';

export const Skills = () => {
  return (
    <section id="skills" className="skills_section">
      <div className="skills">
        <SkillItem
          skillName="HTML"
          details="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          progress="90"
        />
        <SkillItem skillName="CSS" details="Detaily netřeba" progress="80" />
        <SkillItem
          skillName="Javascript"
          details="Detaily netřeba"
          progress="50"
        />
        <SkillItem skillName="React" details="Detaily netřeba" progress="70" />
        <SkillItem skillName="Figma" details="Ta mě baví" progress="40" />
        <SkillItem skillName="jQuery" details="Ta mě baví" progress="80" />
        <SkillItem skillName="SASS" details="Ta mě baví" progress="80" />
      </div>
      <div className="skillsTitle">
        <h2>Dovednosti</h2>
      </div>
    </section>
  );
};
