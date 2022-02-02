import { Fragment } from 'react';
import './languages.scss';

export const Languages = (props) => {
   const { personalInfo } = props;
   return (
      <Fragment>
         <p>Languages</p>
         <ul>
            {personalInfo &&
               personalInfo.languages.map((language, index) => (
                  <li key={`language-${language.name}-${index}`}>{`${language.name} - ${language.level}`}</li>
               ))}
         </ul>
      </Fragment>
   );
};
