import { HashLink } from 'react-router-hash-link';
import { AiOutlineHome } from 'react-icons/ai';
import { MdWorkOutline, MdOutlineSchool, MdOutlineContactPage } from 'react-icons/md';

import './navigation.scss';

const navigationItems = {
  home: <AiOutlineHome />,
  experience: <MdWorkOutline />,
  education: <MdOutlineSchool />,
  contact: <MdOutlineContactPage />,
};

export const Navigation = () => (
  <div className="navigation">
    <ul>
      {Object.entries(navigationItems).map(([name, icon]) => (
        <li key={`icon-name-${name}`}>
          <HashLink smooth to={`#${name}`}>
            <span className="navigation__icon">{icon}</span>
            <span className="navigation__item"> {name.toUpperCase()}</span>
          </HashLink>
        </li>
      ))}
    </ul>
  </div>
);
