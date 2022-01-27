import './languages.scss';

export const Languages = (props) => {
   const { personalInfo } = props;
   return (
      <>
         <p>Languages</p>
         <ul>
            {personalInfo && personalInfo.languages.map((language) => <li>{`${language.name} - ${language.level}`}</li>)}
         </ul>
      </>
   );
};
