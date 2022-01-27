import personalInfo from '../../../assets/cv-data/personal-info.json';
import { Introduction } from '../introduction';
import { Carousel } from '../carousel';
import { Contact } from '../contact';
import './home.scss';

export const Home = () => {
   return (
      <div className='home'>
         <Introduction personalInfo={personalInfo} />
         <Carousel personalInfo={personalInfo} />
         <Contact />
      </div>
   );
};
