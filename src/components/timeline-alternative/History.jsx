import { EducationCard } from "../cards/education/EducationCard";
import { JobCard } from "../cards/jobs/JobCard";
import {TimelineCard} from './timeline-card'
import {TimelineContainer} from './timeline-container'

export const History = () => {
   return (
      <TimelineContainer>
         <TimelineCard position='left'>
            <JobCard />
         </TimelineCard>
         <TimelineCard position='right'>
            <EducationCard />
         </TimelineCard>
      </TimelineContainer>
   );
};
