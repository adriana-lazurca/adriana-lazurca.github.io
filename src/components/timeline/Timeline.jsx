import { MdOutlineWorkOutline } from 'react-icons/md';
import { MdOutlineSchool } from 'react-icons/md';

import { JobCard } from '../cards/job';
import { EducationCard } from '../cards/education';
import { TimelineCard } from './timeline-card';
import { TimelineContainer } from './timeline-container';
import './timeline.scss';

export const Timeline = ({ jobs, education }) => {
   return (
      <TimelineContainer>
         {jobs &&
            jobs.map((job, index) => (
               <TimelineCard
                  key={`job-${job.title}-${index}`}
                  index={index}
                  id={index === 0 ? 'experience' : undefined}
                  icon={<MdOutlineWorkOutline />}
               >
                  <JobCard job={job} />
               </TimelineCard>
            ))}
         {education &&
            education.map((education, index) => (
               <TimelineCard
                  key={`education-${education.title}-${index}`}
                  index={index}
                  id={index === 0 ? 'education' : undefined}
                  icon={<MdOutlineSchool />}
               >
                  <EducationCard education={education} />
               </TimelineCard>
            ))}
      </TimelineContainer>
   );
};
