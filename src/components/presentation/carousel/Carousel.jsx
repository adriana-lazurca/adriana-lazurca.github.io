import './carousel.scss';
import { About } from '../about';
import { Skills } from '../skills';
import { Languages } from '../languages';
import { useState } from 'react';

const personalInfo = {
   about: <About />,
   skills: <Skills />,
   languages: <Languages />,
};

const infoOptions = ['about', 'skills', 'languages'];

export const Carousel = () => {
   const [selectedInfo, setselectedInfo] = useState('about');

   const togglePrev = () => {
      const currentIndex = infoOptions.indexOf(selectedInfo);
      const nextIndex = currentIndex === 0 ? currentIndex : currentIndex - 1;
      const newSelectedInfo = infoOptions[nextIndex];

      setselectedInfo(newSelectedInfo);
   };

   const toggleNext = () => {
      const currentIndex = infoOptions.indexOf(selectedInfo);
      const nextIndex = currentIndex === infoOptions.length - 1 ? currentIndex : currentIndex + 1;
      const newSelectedInfo = infoOptions[nextIndex];

      setselectedInfo(newSelectedInfo);
   };

   const showAbout = selectedInfo === 'about';
   const showSkills = selectedInfo === 'skills';
   const showLanguages = selectedInfo === 'languages';

   return (
      <div className='carousel'>
         <div className='carousel__card'>
            <div className='carousel__card-content'>
               {/* {showAbout && <About />}
               {showSkills && <Skills />}
               {showLanguages && <Languages />} */}

               {personalInfo[selectedInfo]}

               <a className='carousel__prev' onClick={togglePrev}>
                  &lt;
               </a>
               <a className='carousel__next' onClick={toggleNext}>
                  &gt;
               </a>
               {/* <p>{showedComponent}</p> */}
            </div>

            <div className='carousel__card-list'>
               <ul>
                  <li onClick={() => setselectedInfo('about')}>About</li>

                  <li onClick={() => setselectedInfo('skills')}>Skills</li>

                  <li onClick={() => setselectedInfo('languages')}>Languages</li>
               </ul>
            </div>
         </div>
      </div>
   );
};
