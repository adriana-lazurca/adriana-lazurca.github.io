export const About = (props) => {
   const { personalInfo } = props;
   return (
      <>
         <p>{personalInfo && personalInfo.about}</p>
      </>
   );
};
