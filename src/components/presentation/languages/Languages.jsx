export const Languages = (props) => {
   const { personalInfo } = props;
   return (
      <>
         <p>
            {personalInfo && personalInfo.languages.map((language) => <p>{`${language.name} - ${language.level}`}</p>)}
         </p>
      </>
   );
};
