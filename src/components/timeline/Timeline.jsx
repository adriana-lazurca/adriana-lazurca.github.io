import { TimelineCard } from './timeline-card';
import { TimelineContainer } from './timeline-container';
import './timeline.scss';

export const Timeline = ({ data, setId, setIcon, setContent }) => (
  <TimelineContainer>
    {data?.map((item, index) => (
      <TimelineCard
        key={`card-${index}`}
        className={setId && setId(item)}
        position={index % 2 === 0 ? 'left' : 'right'}
        icon={setIcon && setIcon(item)}
      >
        {setContent && setContent(item)}
      </TimelineCard>
    ))}
  </TimelineContainer>
);
