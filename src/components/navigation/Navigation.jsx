import { HashLink } from 'react-router-hash-link';
import { AiOutlineHome } from 'react-icons/ai';
import { MdWorkOutline, MdOutlineSchool, MdOutlineContactPage } from 'react-icons/md';

import './navigation.scss';

export const Navigation = () => (
   <div className='navigation'>
      <ul>
         <li>
            <HashLink smooth to='#home'>
               <span className='navigation__icon'>
                  <AiOutlineHome />
               </span>
               <span className='navigation__item'> HOME</span>
            </HashLink>
         </li>
         <li>
            <HashLink smooth to='#experience'>
               <span className='navigation__icon'>
                  <MdWorkOutline />
               </span>
               <span className='navigation__item'>EXPERIENCE</span>
            </HashLink>
         </li>
         <li>
            <HashLink smooth to='#education'>
               <span className='navigation__icon'>
                  <MdOutlineSchool />
               </span>
               <span className='navigation__item'> EDUCATION</span>
            </HashLink>
         </li>
         <li>
            <HashLink smooth to='#contact'>
               <span className='navigation__icon'>
                  <MdOutlineContactPage />
               </span>
               <span className='navigation__item'>CONTACT</span>
            </HashLink>
         </li>
      </ul>
   </div>
);
