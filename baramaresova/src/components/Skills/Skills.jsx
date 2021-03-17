import React, { useEffect } from 'react';
import { SkillItem } from './SkillItem/SkillItem.jsx';
import $ from 'jquery';
import './skills.scss';

export const Skills = () => {
  return (
    <section id="skills" className="skills_section">
      <div className="skills"></div>
      <div className="skillsTitle">
        <h2>Dovednosti</h2>
      </div>
    </section>
  );
};
