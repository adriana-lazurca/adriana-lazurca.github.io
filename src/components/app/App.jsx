import { Home } from '../presentation/home';
import { Timeline } from '../background/timeline';
import { Navigation } from '../navigation';
import './app.scss';

export const App = () => {
   return (
      <div className='app'>
         <div className='app__content'>
            <Home />
            <Timeline />
         </div>
         <Navigation />
      </div>
   );
};
