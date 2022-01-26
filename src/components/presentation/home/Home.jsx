import { Introduction } from '../introduction';
import { Carousel } from '../carousel';
import { Contact } from '../contact';
import './home.scss';

export const Home = () => {
   return (
      <div className='home'>
         <Introduction />
         <Carousel />
         <Contact />
      </div>
   );
};
