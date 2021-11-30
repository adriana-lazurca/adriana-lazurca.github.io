import PresentationCard from '../presentation-card';
import Carousel from '../carousel';
import Contact from '../contact';
import './introduction.css';

const Introduction = () => {
   return (
      <div className='introduction-container'>
         <PresentationCard />
         <Carousel />
         <Contact />
      </div>
   );
};

export default Introduction;