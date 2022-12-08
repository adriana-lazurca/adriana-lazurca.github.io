import React from 'react';
import { useState } from 'react';
import { AiOutlineHome } from 'react-icons/ai';
import { MdWorkOutline, MdOutlineSchool, MdOutlineContactPage } from 'react-icons/md';

import useNavigation from './useNavigation';
import './navigation.scss';

const sectionItems = {
  home: {
    selector: '#home',
  },
  experience: {
    selector: '.timeline__card.experience',
  },
  education: {
    selector: '.timeline__card.education',
  },
  contact: {
    selector: '#contact',
  },
};

export const navigationItems = {
  home: {
    icon: <AiOutlineHome />,
  },
  experience: {
    icon: <MdWorkOutline />,
  },
  education: {
    icon: <MdOutlineSchool />,
  },
  contact: {
    icon: <MdOutlineContactPage />,
  },
};

const elementSelectors = Object.entries(sectionItems).map(([, element]) => element.selector);
const ids = Object.keys(navigationItems);

export const Navigation = () => {
  const [elementInView, setElementInView] = useState('home');

  useNavigation({
    elementSelectors,
    ids,
    onIsElementInView: setElementInView,
  });

  const onClick = (event) => {
    event.stopPropagation();

    const targetElement = event.target;
    const id = targetElement.textContent?.trim().toLowerCase();
    if (!id) {
      return;
    }

    setElementInView(id);

    const destElement = document.getElementById(id);
    destElement?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="navigation">
      <ul>
        {Object.entries(navigationItems).map(([id, element]) => {
          return (
            <li key={`icon-name-${id}`} onClick={onClick}>
              <nav className={id === elementInView ? 'active' : ''}>
                <span className="navigation__icon">{element.icon}</span>
                <span className="navigation__item">{id.toUpperCase()}</span>
              </nav>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
