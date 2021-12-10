import { Presentation } from '../presentation';
import { Carousel } from '../carousel';
import { Contact } from '../contact';
import './introduction.scss';

export const Introduction = () => {
   return (
      <div className='introduction'>
         <Presentation />
         <Carousel />
         <Contact />
      </div>
   );
};
