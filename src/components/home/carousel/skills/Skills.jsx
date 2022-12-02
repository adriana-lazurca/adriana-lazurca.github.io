import React from 'react';

import { Icon } from '../../icon';
import './skills.scss';

export const Skills = () => {
  const groupedSkills = [
    {
      icon: 'DiReact',
      name: 'React',
      technologies: [],
    },
    {
      icon: 'DiJavascript',
      name: 'JavaScript',
      technologies: ['ES6', 'Typescript', 'Redux'],
    },

    {
      icon: 'DiCss3',
      name: 'CSS3',
      technologies: ['SASS', 'Bootstrap'],
    },

    {
      icon: 'DiMootoolsBadge',
      name: 'Others',
      technologies: ['HTML5', 'Jira', 'GitHub', 'BitBucket'],
    },
  ];

  return (
    <>
      <div className="skills">
        {groupedSkills &&
          groupedSkills.map((skill, index) => (
            <div key={`skill-${skill.name}-${index}`} className="skill">
              <div className="skill__title">
                <div className="icon-wrap">
                  <div className="icon">{<Icon iconName={skill.icon} />}</div>
                </div>

                {<div className="skill__name">{skill.name}</div>}
              </div>
              <ul>
                {skill.technologies.map((technology) => (
                  <li key={`technology-${technology}-${index}`}>{technology}</li>
                ))}
              </ul>
            </div>
          ))}
      </div>
    </>
  );
};
