import { MdOutlineWorkOutline } from 'react-icons/md';
import { MdOutlineSchool } from 'react-icons/md';

import { JobCard } from '../cards/job';
import { EducationCard } from '../cards/education';
import { TimelineCard } from './timeline-card';
import { TimelineContainer } from './timeline-container';
import './timeline.scss';

export const Timeline = ({ experience }) => {
  const isJob = (experience) => {
    return experience.hasOwnProperty('company');
  };
  return (
    <TimelineContainer>
      {experience &&
        experience.map((experience, index) => {
          return (
            <TimelineCard
              key={`experience-${experience.title}-${index}`}
              index={index}
              id={isJob(experience) ? 'experience' : 'education'}
              icon={isJob(experience) ? <MdOutlineWorkOutline /> : <MdOutlineSchool />}
            >
              {isJob(experience) ? <JobCard job={experience} /> : <EducationCard education={experience} />}
            </TimelineCard>
          );
        })}
    </TimelineContainer>
  );
};
