import './skills.scss';

export const Skills = (props) => {
   const { personalInfo } = props;

   return (
      <>
         <p>Skills</p>
         {personalInfo &&
            personalInfo.proficiencies.map((skill) => (
               <p key={skill.type}>{`${skill.type} : ${skill.technologies}`}</p>
            ))}
      </>
   );
};
