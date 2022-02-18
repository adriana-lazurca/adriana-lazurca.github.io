import * as Icons from 'react-icons/di';
import React from 'react';

import './skills.scss';

export const Skills = (props) => {
   //const { jobs, education } = props;

   // const jobSkills = jobs.map((job) => job.skills);
   // const educationSkills = education.map((education) => education.skills);

   // const allSkills = [].concat(...jobSkills, ...educationSkills);

   // const groupedSkills = [];

   // allSkills.forEach((skill) => {
   //    const matchedSkill = groupedSkills.find((element) => element.type === skill.type);

   //    if (!matchedSkill) {
   //       groupedSkills.push(skill);
   //       return;
   //    }

   //    const technologies = matchedSkill.technologies.concat(skill.technologies);
   //    matchedSkill.technologies = [...new Set(technologies)];
   // });

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

      // {
      //    icon: 'DiHtml5',
      //    name: 'Html',
      //    technologie: [],
      // },
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

   const Icon = (props) => {
      const { iconName, size } = props;
      const icon = React.createElement(Icons[iconName]);
      return (
         <div className='icon-wrap'>
            <div className='icon' style={{ fontSize: size }}>
               {icon}
            </div>
         </div>
      );
   };

   return (
      <>
         <div className='skills'>
            {groupedSkills &&
               groupedSkills.map((skill, index) => (
                  <div key={`skill-${skill.name}-${index}`} className='skill'>
                     {<Icon size={20} iconName={skill.icon} />}
                     {<p>{skill.name}</p>}
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
