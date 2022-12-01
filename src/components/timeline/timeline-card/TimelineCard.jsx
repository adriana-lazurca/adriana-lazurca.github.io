import { forwardRef } from 'react';

import './timeline-card.scss';

export const TimelineCard = forwardRef((props, forwardedRef) => {
  const { children, position = 'right', id, icon } = props;

  return (
    <div id={id} className={`timeline__card timeline__card--${position}`}>
      <div className="timeline__card-content">{children}</div>
      <div className="circle">{icon}</div>
    </div>
  );
});
