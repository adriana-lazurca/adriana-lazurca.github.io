import { Fragment } from 'react';

import './languages.scss';

export const Languages = (props) => {
   const { personalInfo } = props;
   return (
      <Fragment>
         {personalInfo &&
            personalInfo.languages.map((language, index) => (
               <div key={`language-${language.name}-${index}`} className='language'>
                  <p className='language__name'>{language.name}</p>
                  <span>{` ${language.level}`}</span>
               </div>
            ))}
      </Fragment>
   );
};
