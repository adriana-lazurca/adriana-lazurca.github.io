import personalInfo from '../../../assets/cv-data/personal-info.json';
import { Introduction } from '../introduction';
import { Carousel } from '../carousel';
import { Contact } from '../contact';
import './home.scss';

export const Home = (props) => {
   const { jobs, education } = props;

   return (
      <div className='home'>
         <Introduction personalInfo={personalInfo} />
         <Carousel personalInfo={personalInfo} jobs={jobs} education={education}/>
         <Contact />
      </div>
   );
};
