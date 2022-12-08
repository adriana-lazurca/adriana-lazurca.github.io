import './timeline-card.scss';

export const TimelineCard = (props) => {
  const { children, position = 'right', icon, className } = props;

  return (
    <div className={`timeline__card timeline__card--${position} ${className}`}>
      <div className="timeline__card-content">{children}</div>
      <div className="circle">{icon}</div>
    </div>
  );
};
