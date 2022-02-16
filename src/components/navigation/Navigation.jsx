import { HashLink } from 'react-router-hash-link';

import './navigation.scss';

export const Navigation = () => (
   <div className='navigation'>
      <ul>
         <li>
            <HashLink smooth to='#home' >
               Home
            </HashLink>
         </li>
         <li>
            <HashLink smooth to='#experience'>
               Experience
            </HashLink>
         </li>
         <li>
            <HashLink smooth to='#education'>
               Education
            </HashLink>
         </li>
      </ul>
   </div>
);
