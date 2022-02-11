import { Fragment } from 'react';
import { MdArrowRightAlt } from 'react-icons/md';

import './languages.scss';

export const Languages = (props) => {
   const { personalInfo } = props;
   return (
      <Fragment>
         {personalInfo &&
            personalInfo.languages.map((language, index) => (
               <div
                  style={{
                     display: 'flex',
                     gap: '50px 30px',
                     alignItems: 'center',
                  }}
               >
                  <p
                     style={{
                        border: '3px solid black',
                        borderRadius: '30px',
                        padding: '0.2rem',
                     }}
                     key={`language-${language.name}-${index}`}
                  >
                     {language.name}
                  </p>
                  <span>{` ${language.level}`}</span>
               </div>
            ))}
      </Fragment>
   );
};
