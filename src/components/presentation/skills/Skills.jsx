import './skills.scss';

export const Skills = (props) => {
   const { jobs, education } = props;

   const jobTechnologies = jobs.map((job) => job.proficiencies);
   const educationTechnologies = education.map((education) => education.proficiencies);

   const allTechnologies = [].concat(...jobTechnologies, ...educationTechnologies);
   console.log('allProficencies', allTechnologies);

   return (
      <>
         <p>Skills</p>
         {allTechnologies &&
            allTechnologies.map((skill, index) => <p key={index}>{`${skill.type} : ${skill.technologies}`}</p>)}
      </>
      //todo: replace index
   );
};
