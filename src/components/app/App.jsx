import jobs from '../../assets/cv-data/jobs.json';
import education from '../../assets/cv-data/education.json';
import { Home } from '../presentation/home';
import { Timeline } from '../background/timeline';
import { Navigation } from '../navigation';
import './app.scss';

export const App = () => {
   return (
      <div className='app'>
         <div className='app__content'>
            <Home />
            <Timeline jobs={jobs} education={education} />
         </div>
         <Navigation />
      </div>
   );
};
