import personalInfo from '../../assets/cv-data/personal-info.json';
import { Introduction, Carousel } from './index';
import './presentation.scss';

export const Presentation = (props) => {
   const { jobs, education } = props;

   return (
      <div className='presentation' id='home'>
         <Introduction personalInfo={personalInfo} />
         <Carousel personalInfo={personalInfo} jobs={jobs} education={education} />
      </div>
   );
};
