import './contact.scss';
import { AiOutlineGithub } from 'react-icons/ai';
import { AiOutlineLinkedin } from 'react-icons/ai';
import { AiOutlineMail } from 'react-icons/ai';

export const Contact = () => {
   return (
      <div className='contact'>
            <ul  className='contact__list'>
               <li>
                  <AiOutlineGithub color='black'  />
               </li>
               <li>
                  <AiOutlineLinkedin color='black' />
               </li>
               <li>
                  <AiOutlineMail color='black'  />
               </li>
            </ul>
         </div>
   );
};
