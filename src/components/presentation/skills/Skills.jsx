import './skills.scss';

export const Skills = (props) => {
   const { jobs, education } = props;

   const jobSkills = jobs.map((job) => job.skills);
   const educationSkills = education.map((education) => education.skills);

   const allSkills = [].concat(...jobSkills, ...educationSkills);

   const groupedSkills = [];

   allSkills.forEach((skill) => {
      const matchedSkill = groupedSkills.find((element) => element.type === skill.type);

      if (!matchedSkill) {
         groupedSkills.push(skill);
         return;
      }

      const technologies = matchedSkill.technologies.concat(skill.technologies);
      matchedSkill.technologies = [...new Set(technologies)];
   });

   return (
      <div>
         {groupedSkills &&
            groupedSkills.map((skill, index) => (
               <p key={`skill-${skill.type}-${index}`}>{`${skill.type} : ${skill.technologies}`}</p>
            ))}
      </div>
   );
};
