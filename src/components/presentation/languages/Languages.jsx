import './languages.scss';

export const Languages = (props) => {
   const { personalInfo } = props;
   return (
      <>
         <p>Languages</p>
         <ul>
            {personalInfo &&
               personalInfo.languages.map((language) => (
                  <li key={language.name}>{`${language.name} - ${language.level}`}</li>
               ))}
         </ul>
      </>
   );
};
