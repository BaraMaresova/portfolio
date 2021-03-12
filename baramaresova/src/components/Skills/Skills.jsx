import React, { useEffect } from 'react';
import { SkillItem } from './SkillItem/SkillItem.jsx';
import $ from 'jquery';
import './skills.scss';

export const Skills = () => {
  useEffect(() => {
    const circleType = 1,
      radius = '12em', //distance from center
      start = -90, //shift start from 0
      $elements = $('.skillItem'),
      numberOfElements =
        circleType === 1 ? $elements.length : $elements.length - 1, //adj for even distro of elements when not full circle
      slice = (360 * circleType) / numberOfElements;

    $elements.each(function (i) {
      const $self = $(this),
        rotate = slice * i + start,
        rotateReverse = rotate * -1;

      $self.css({
        transform:
          'rotate(' +
          rotate +
          'deg) translate(' +
          radius +
          ') rotate(' +
          rotateReverse +
          'deg)',
      });
    });
  }, []);

  return (
    <section className="skills_section">
      <div className="skills" id="skills">
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
    </section>
  );
};
