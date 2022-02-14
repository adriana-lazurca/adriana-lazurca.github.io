import { AiOutlineGithub } from 'react-icons/ai';
import { AiOutlineLinkedin } from 'react-icons/ai';
import { AiOutlineMail } from 'react-icons/ai';
import { RiDiscordLine } from 'react-icons/ri';
import ReactTooltip from 'react-tooltip';

import './contact.scss';

export const Contact = () => {
   return (
      <div className='contact'>
         <ul className='contact__list'>
            <li>
               <a href='https://www.github.com/adriana-lazurca' target='_blank'>
                  {' '}
                  <AiOutlineGithub color='black' data-tip='adriana-lazurca' />
               </a>
               <ReactTooltip place='bottom' />
            </li>
            <li>
               <a href='https://www.linkedin.com/in/adriana-lazurca' target='_blank'>
                  <AiOutlineLinkedin color='black' data-tip='adriana-lazurca' />
               </a>
               <ReactTooltip place='bottom' />
            </li>
            <li>
               <RiDiscordLine color='black' data-tip='Adriana Lazurca#5360' />
               <ReactTooltip place='bottom' />
            </li>
            <li>
               <AiOutlineMail color='black' data-tip='adrianar.lazurca@gmail.com' />
               <ReactTooltip place='bottom' />
            </li>
         </ul>
      </div>
   );
};
