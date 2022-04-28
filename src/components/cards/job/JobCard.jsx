import { MdOutlineExpandMore, MdTaskAlt } from 'react-icons/md';
import { useState } from 'react';

import { Technologies } from '../technologies';
import { getDate } from '../utils/getDate';
import './job-card.scss';

export const JobCard = ({ job }) => {
   const [showMore, setViewMore] = useState(false);

   const technologies = job.skills.map((skill) => skill.technologies);
   const allTechnologies = [].concat(...technologies);

   return (
      <div className='job'>
         <h2>{job.title}</h2>
         <p className='job__company'>
            <span>{job.company.name}</span> - <span className='opacity'>{job.company.city}</span>
         </p>
         {allTechnologies.length > 0 && <Technologies technologies={allTechnologies} />}
         <button onClick={() => setViewMore((showMore) => !showMore)}>
            Tasks <MdOutlineExpandMore />
         </button>
         {showMore && (
            <div>
               <ul>
                  {job.tasks.map((task, index) => (
                     <li key={`job-${job.company.name}-${index}`} className='job__task'>
                        <MdTaskAlt />
                        <span className='task-description'>{task}</span>
                     </li>
                  ))}
               </ul>
            </div>
         )}
         <footer>
            <p className='opacity'>
               {getDate(job.startDate)} - {getDate(job.endDate)}
            </p>
         </footer>
      </div>
   );
};
