import { HashLink } from 'react-router-hash-link';
import { AiOutlineHome } from 'react-icons/ai';
import { MdWorkOutline, MdOutlineSchool, MdOutlineContactPage } from 'react-icons/md';

import './navigation.scss';

export const Navigation = () => (
   <div className='navigation'>
      <ul>
         <li>
            <HashLink smooth to='#home'>
               <AiOutlineHome />
               <span className='navigation__item'> HOME</span>
            </HashLink>
         </li>
         <li>
            <HashLink smooth to='#experience'>
               <MdWorkOutline />
               <span className='navigation__item'>EXPERIENCE</span>
            </HashLink>
         </li>
         <li>
            <HashLink smooth to='#education'>
               <MdOutlineSchool />
               <span className='navigation__item'> EDUCATION</span>
            </HashLink>
         </li>
         <li>
            <HashLink smooth to='#contact'>
               <MdOutlineContactPage />
               <span className='navigation__item'>CONTACT</span>
            </HashLink>
         </li>
      </ul>
   </div>
);
