export const About = (props) => {
   const { personalInfo } = props;
   return (
      <>
         <p>Hello!</p>
         <p>{personalInfo && personalInfo.about}</p>
      </>
   );
};
