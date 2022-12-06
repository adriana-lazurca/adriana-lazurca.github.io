import { TimelineCard } from './timeline-card';
import { TimelineContainer } from './timeline-container';
import './timeline.scss';

const Section = ({ id, children }) => <div id={id}>{children}</div>;

export const Timeline = ({ data, setId, setIcon, setContent }) => {
  const ids = [];
  const cards = {};

  data?.forEach((item, index) => {
    const id = setId ? setId(item) : undefined;
    if (id && !ids.includes(id)) {
      ids.push(id);
      cards[id] = [];
    }

    const card = (
      <TimelineCard
        key={`card-${index}`}
        className={id}
        position={index % 2 === 0 ? 'left' : 'right'}
        icon={setIcon && setIcon(item)}
      >
        {setContent && setContent(item)}
      </TimelineCard>
    );
    cards[id].push(card);
  });

  const sections = ids.map((id) => {
    return (
      <Section key={id} id={id}>
        {cards[id]}
      </Section>
    );
  });
  return <TimelineContainer>{sections}</TimelineContainer>;
};
