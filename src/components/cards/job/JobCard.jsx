import { MdOutlineExpandMore } from 'react-icons/md';
import { useState } from 'react';

import { Technologies } from '../technologies';
import { getDate } from '../utils/getDate';
import './job.scss';

export const JobCard = ({ job }) => {
   const [showMore, setViewMore] = useState(false);

   const technologies = job.skills.map((skill) => skill.technologies);
   const allTechnologies = [].concat(...technologies);

   return (
      <div className='job'>
         <h2>{job.title}</h2>
         <p>
            {job.company.name} - {job.company.city}
         </p>
         {allTechnologies.length > 0 && <Technologies technologies={allTechnologies} />}
         <button onClick={() => setViewMore((showMore) => !showMore)}>
            Tasks <MdOutlineExpandMore />
         </button>
         {showMore && (
            <div>
               <ul>
                  {job.tasks.map((task, index) => (
                     <li key={`job-${job.company.name}-${index}`}>{task}</li>
                  ))}
               </ul>
            </div>
         )}
         <footer>
            <p>
               {getDate(job.startDate)} - {getDate(job.endDate)}
            </p>
         </footer>
      </div>
   );
};
