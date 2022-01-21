import personalInfo from '../../local-json/personal-info.json';

export const About = () => {
   return (
      <>
         <p>{personalInfo && personalInfo.about}</p>
      </>
   );
};
