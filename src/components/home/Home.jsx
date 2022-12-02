import personalInfo from '../../assets/cv-data/personal-info.json';
import { Introduction, Carousel } from './index';
import './home.scss';

export const Home = () => {
  return (
    <div className="home" id="home">
      <Introduction personalInfo={personalInfo} />
      <Carousel personalInfo={personalInfo} />
    </div>
  );
};
