import './home.scss';
import {Introduction} from './introduction';
import {Timeline} from './timeline';
import {Navigation} from './navigation';

export const Home = () => {
   return (
      <div className="home">
         <div className="home__content">
            <Introduction />
            <Timeline />
         </div>
         <Navigation />
      </div>
   );
};

