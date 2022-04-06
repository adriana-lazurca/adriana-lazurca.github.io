import './languages.scss';

export const Languages = (props) => {
   const { personalInfo } = props;

   const getLevel = (level) => {
      let value = 0;

      switch (level) {
         case 'elementary':
            value = '40%';
            break;
         case 'fluent':
            value = '85%';
            break;
         default:
            value = '100%';
      }

      return value;
   };

   return (
      <div className='container'>
         {personalInfo &&
            personalInfo.languages.map((language, index) => (
               <div key={`language-${language.name}-${index}`} className='container__language'>
                  <div className='container__language-description'>
                     <p className='language__name'>{language.name.toUpperCase()}</p>
                  </div>
                  <div className='container__language-bar'>
                     <div className='language-bar__filler' style={{ width: getLevel(language.level) }}></div>
                  </div>
               </div>
            ))}
      </div>
   );
};
