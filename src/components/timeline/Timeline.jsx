import { TimelineCard } from './timeline-card';
import { TimelineContainer } from './timeline-container';
import './timeline.scss';

export const Timeline = ({ data, setId, setIcon, setContent }) => {
  let oldId;
  return (
    <TimelineContainer>
      {data &&
        data.map((item, index) => {
          const newId = setId(item);
          const id = newId !== oldId && newId;
          oldId = newId;
          return (
            <TimelineCard
              key={`card-${index}`}
              position={index % 2 === 0 ? 'left' : 'right'}
              id={id}
              icon={setIcon && setIcon(item)}
            >
              {setContent && setContent(item)}
            </TimelineCard>
          );
        })}
    </TimelineContainer>
  );
};
