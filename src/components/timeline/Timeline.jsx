import { TimelineCard } from './timeline-card';
import { TimelineContainer } from './timeline-container';
import './timeline.scss';

export const Timeline = ({ data, setId, getIcon, setContent }) => {
  return (
    <TimelineContainer>
      {data &&
        data.map((item, index) => {
          return (
            <TimelineCard
              key={`card-${index}`}
              position={index % 2 === 0 ? 'left' : 'right'}
              id={setId && setId(item)}
              icon={getIcon && getIcon(item)}
            >
              {setContent && setContent(item)}
            </TimelineCard>
          );
        })}
    </TimelineContainer>
  );
};
