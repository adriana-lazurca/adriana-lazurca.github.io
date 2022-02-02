import { useState } from 'react';

import { Job } from '../job';
import { Education } from '../education';

import './timeline.scss';

export const Timeline = (props) => {
   const { jobs, education } = props;

   const [cardPosition, setCardPosition] = useState('left');

   return (
      <div className='timeline'>
         {jobs &&
            jobs.map((job, index) => (
               <div
                  key={`job-${job.title}-${index}`}
                  className={`timeline__card ${
                     cardPosition === 'left' ? 'timeline__card--left' : 'timeline__card--right'
                  }`}
               >
                  <div className='timeline__card-content'>
                     <Job job={job} />
                  </div>
               </div>
            ))}
         {education &&
            education.map((education, index) => (
               <div
                  key={`job-${education.type}-${index}`}
                  className={`timeline__card ${
                     cardPosition === 'left' ? 'timeline__card--left' : 'timeline__card--right'
                  }`}
               >
                  <div className='timeline__card-content'>
                     <Education education={education} />
                  </div>
               </div>
            ))}
      </div>
   );
};
