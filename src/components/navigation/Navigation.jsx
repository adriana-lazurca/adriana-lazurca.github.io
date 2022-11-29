import { HashLink } from 'react-router-hash-link';
import { useLocation } from 'react-router-dom';

import { AiOutlineHome } from 'react-icons/ai';
import { MdWorkOutline, MdOutlineSchool, MdOutlineContactPage } from 'react-icons/md';

import './navigation.scss';

const navigationItems = {
  home: <AiOutlineHome />,
  experience: <MdWorkOutline />,
  education: <MdOutlineSchool />,
  contact: <MdOutlineContactPage />,
};

export const Navigation = () => {
  const { hash } = useLocation();

  const isActive = (hashId) => {
    return hashId === hash;
  };

  return (
    <div className="navigation">
      <ul>
        {Object.entries(navigationItems).map(([name, icon]) => {
          const menuItemId = `#${name}`;
          return (
            <li key={`icon-name-${name}`}>
              <HashLink to={menuItemId} smooth className={isActive(menuItemId) ? 'active' : ''}>
                <span className="navigation__icon">{icon}</span>
                <span className="navigation__item"> {name.toUpperCase()}</span>
              </HashLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
