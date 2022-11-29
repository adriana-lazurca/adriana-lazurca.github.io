import { BrowserRouter } from 'react-router-dom';
import { MdOutlineWorkOutline } from 'react-icons/md';
import { MdOutlineSchool } from 'react-icons/md';

import experience from '../assets/cv-data/experience.json';
import { Timeline } from './timeline';
import { Presentation } from './presentation/index';
import { Navigation } from './navigation';
import { Contact } from './contact';
import { JobCard } from './cards/job';
import { EducationCard } from './cards/education';

import './app.scss';

const isJob = (experience) => {
  return experience.hasOwnProperty('company');
};

export const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <div className="app__content">
          <Presentation />
          <Timeline
            data={experience}
            setId={(item) => (isJob(item) ? 'experience' : 'education')}
            setIcon={(item) => (isJob(item) ? <MdOutlineWorkOutline /> : <MdOutlineSchool />)}
            setContent={(item) => (isJob(item) ? <JobCard job={item} /> : <EducationCard education={item} />)}
          />
          <Contact />
        </div>
        <Navigation />
      </div>
    </BrowserRouter>
  );
};
