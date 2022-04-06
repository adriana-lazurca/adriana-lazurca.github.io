import './timeline-card.scss';

export const TimelineCard = ({ children, index, id }) => {
   const cardPosition = index % 2 === 0 ? 'left' : 'right';

   return (
      <div
         id={id}
         className={`timeline__card ${cardPosition === 'left' ? 'timeline__card--left' : 'timeline__card--right'}`}
      >
         <div className='timeline__card-content'>{children}</div>
      </div>
   );
};
