import { HashLink } from 'react-router-hash-link';

import './navigation.scss';

export const Navigation = () => (
   <div className='navigation'>
      <ul>
         <li>
            <HashLink smooth to='#home' >
               HOME
            </HashLink>
         </li>
         <li>
            <HashLink smooth to='#experience'>
               EXPERIENCE
            </HashLink>
         </li>
         <li>
            <HashLink smooth to='#education'>
               EDUCATION
            </HashLink>
         </li>
         <li>
            <HashLink smooth to='#contact'>
               CONTACT
            </HashLink>
         </li>
      </ul>
   </div>
);
