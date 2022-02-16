import { AiOutlineGithub, AiOutlineLinkedin, AiOutlineMail } from 'react-icons/ai';
import { RiDiscordLine } from 'react-icons/ri';
import ReactTooltip from 'react-tooltip';

import './contact.scss';

// todo - refactor using the following structure; no hardcoded stuff
const contactItems = [
   {
      url: 'https://www.github.com/adriana-lazurca',
      tooltip: 'adriana-lazurca'
   }
];

export const Contact = () => {
   return (
      <div className='contact'>
         <ReactTooltip place='bottom' />
         <ul className='contact__list'>
            <li>
               <a href='https://www.github.com/adriana-lazurca' target='_blank'>
                  {' '}
                  <AiOutlineGithub color='black' data-tip='adriana-lazurca' />
                  {/* <ReactTooltip place='bottom' /> */}
               </a>
            </li>
            <li>
               <a href='https://www.linkedin.com/in/adriana-lazurca' target='_blank'>
                  <AiOutlineLinkedin color='black' data-tip='adriana-lazurca' />
               </a>
               {/* <ReactTooltip place='bottom' /> */}
            </li>
            <li>
               <RiDiscordLine color='black' data-tip='Adriana Lazurca#5360' />
               {/* <ReactTooltip place='bottom' /> */}
            </li>
            <li>
               <AiOutlineMail color='black' data-tip='adrianar.lazurca@gmail.com' />
               {/* <ReactTooltip place='bottom' /> */}
            </li>
         </ul>
      </div>
   );
};
