import './timeline-card.scss';
// import { MdOutlineWorkOutline } from 'react-icons/md';
import { MdOutlineSchool } from 'react-icons/md';

export const TimelineCard = ({ children, index, id, icon }) => {
   const cardPosition = index % 2 === 0 ? 'left' : 'right';

   return (
      <div
         id={id}
         className={`timeline__card ${cardPosition === 'left' ? 'timeline__card--left' : 'timeline__card--right'}`}
      >
         <div className='timeline__card-content'>{children}</div>
         <div className='circle'>{icon}</div>
      </div>
   );
};
