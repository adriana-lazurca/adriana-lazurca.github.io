import './timeline-card.scss';

export const TimelineCard = ({ children, position = 'right', id, icon }) => {
  return (
    <div id={id} className={`timeline__card timeline__card--${position}`}>
      <div className="timeline__card-content">{children}</div>
      <div className="circle">{icon}</div>
    </div>
  );
};
