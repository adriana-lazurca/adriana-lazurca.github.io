import React from 'react';

import { Icon } from '../../icon';
import './skills.scss';

export const Skills = () => {
   const groupedSkills = [
      {
         icon: 'DiReact',
         name: 'React',
         technologie: [],
      },
      {
         icon: 'DiJavascript',
         name: 'JavaScript',
         technologie: ['ES6', 'Redux'],
      },

      {
         icon: 'DiCss3',
         name: 'CSS3',
         technologie: ['SASS', 'Bootstrap'],
      },

      {
         icon: 'DiMootoolsBadge',
         name: 'Others',
         technologie: ['HTML5', 'Jira', 'GitHub', 'BitBucket'],
      },
   ];

   return (
      <>
         <div className='skills'>
            {groupedSkills &&
               groupedSkills.map((skill, index) => (
                  <div key={`skill-${skill.name}-${index}`} className='skill'>
                     <div className='icon-wrap'>
                        <div className='icon'>{<Icon size={20} iconName={skill.icon}/>}</div>
                     </div>

                     {<div className='skill__name'>{skill.name}</div>}
                     <ul>
                        {skill.technologie.map((technology) => (
                           <li key={`technology-${technology}-${index}`}>{technology}</li>
                        ))}
                     </ul>
                  </div>
               ))}
         </div>
      </>
   );
};
