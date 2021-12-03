import { Job } from '../job';
import './timeline.scss';

const Timeline = () => {
   return (
      <div className='line'>
         <div className='timeline-container'>
            <Job />
         </div>
      </div>
   );
};

export default Timeline;
