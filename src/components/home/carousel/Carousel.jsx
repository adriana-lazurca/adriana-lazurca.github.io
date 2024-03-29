import { useState } from 'react';
import { TiChevronRightOutline } from 'react-icons/ti';
import { TiChevronLeftOutline } from 'react-icons/ti';

import { About } from './about';
import { Skills } from './skills';
import { Languages } from './languages';
import './carousel.scss';

const infoOptions = ['about', 'skills', 'languages'];

export const Carousel = (props) => {
  const { personalInfo } = props;

  const [selectedInfo, setSelectedInfo] = useState('about');

  const showAbout = selectedInfo === 'about';
  const showSkills = selectedInfo === 'skills';
  const showLanguages = selectedInfo === 'languages';

  const toggleNext = () => {
    const currentIndex = infoOptions.indexOf(selectedInfo);
    const nextIndex = currentIndex === infoOptions.length - 1 ? 0 : currentIndex + 1;
    const newSelectedInfo = infoOptions[nextIndex];

    setSelectedInfo(newSelectedInfo);
  };

  const togglePrev = () => {
    const currentIndex = infoOptions.indexOf(selectedInfo);
    const nextIndex = currentIndex === 0 ? infoOptions.length - 1 : currentIndex - 1;
    const newSelectedInfo = infoOptions[nextIndex];

    setSelectedInfo(newSelectedInfo);
  };

  return (
    <div className="carousel">
      <div className="carousel__card">
        <div className="carousel__card-content">
          {showAbout && <About personalInfo={personalInfo} />}
          {showSkills && <Skills />}
          {showLanguages && <Languages personalInfo={personalInfo} />}
          <button className="carousel__prev" onClick={togglePrev}>
            <TiChevronLeftOutline />
          </button>
          <button className="carousel__next" onClick={toggleNext}>
            <TiChevronRightOutline />
          </button>
        </div>

        <div className="carousel__card-buttons">
          <ul>
            <li
              className={`button ${showAbout ? 'button--active' : 'button--inactive'}`}
              onClick={() => setSelectedInfo('about')}
            >
              About
            </li>

            <li
              className={`button ${showSkills ? 'button--active' : 'button--inactive'}`}
              onClick={() => setSelectedInfo('skills')}
            >
              Skills
            </li>

            <li
              className={`button ${showLanguages ? 'button--active' : 'button--inactive'}`}
              onClick={() => setSelectedInfo('languages')}
            >
              Languages
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
