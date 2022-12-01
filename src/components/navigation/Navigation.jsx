import { useState } from 'react';
import useNavigation from './useNavigation';
import { AiOutlineHome } from 'react-icons/ai';
import { MdWorkOutline, MdOutlineSchool, MdOutlineContactPage } from 'react-icons/md';

import './navigation.scss';
import React from 'react';

export const navigationItems = {
  home: <AiOutlineHome />,
  experience: <MdWorkOutline />,
  education: <MdOutlineSchool />,
  contact: <MdOutlineContactPage />,
};
const elementIds = Object.keys(navigationItems);

export const Navigation = () => {
  const [elementInView, setElementInView] = useState('home');

  useNavigation({
    elementIds,
    onIsElementInView: setElementInView,
  });

  const onClick = (event) => {
    event.stopPropagation();

    let targetElement = event.target;
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
        {Object.entries(navigationItems).map(([id, icon]) => {
          return (
            <li key={`icon-name-${id}`} onClick={onClick}>
              <nav className={id === elementInView ? 'active' : ''}>
                <span className="navigation__icon">{icon}</span>
                <span className="navigation__item">{id.toUpperCase()}</span>
              </nav>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
