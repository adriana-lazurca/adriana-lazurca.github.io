import { BrowserRouter } from 'react-router-dom';

import education from '../assets/cv-data/education.json';
import jobs from '../assets/cv-data/jobs.json';
import { Timeline } from './timeline';
import { Presentation } from './presentation/index';
import { Navigation } from './navigation';
import { Contact } from './contact';
import './app.scss';

export const App = () => {
   return (
      <BrowserRouter>
         <div className='app'>
            <div className='app__content'>
               <Presentation jobs={jobs} education={education} />
               <Timeline jobs={jobs} education={education} />
               <Contact/>
            </div>
            <Navigation />
         </div>
      </BrowserRouter>
   );
};
