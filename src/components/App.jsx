import { BrowserRouter } from 'react-router-dom';

import experience from '../assets/cv-data/experience.json';
import { Timeline } from './timeline';
import { Presentation } from './presentation/index';
import { Navigation } from './navigation';
import { Contact } from './contact';
import './app.scss';

export const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <div className="app__content">
          <Presentation />
          <Timeline experience={experience} />
          <Contact />
        </div>
        <Navigation />
      </div>
    </BrowserRouter>
  );
};
