import { AiOutlineGithub, AiOutlineLinkedin, AiOutlineMail } from 'react-icons/ai';
import { RiDiscordLine } from 'react-icons/ri';
import ReactTooltip from 'react-tooltip';

import './contact.scss';

const contactItems = [
   {
      icon: <AiOutlineGithub />,
      url: 'https://www.github.com/adriana-lazurca',
      tooltip: 'adriana-lazurca',
   },
   {
      icon: <AiOutlineLinkedin />,
      url: 'https://www.linkedin.com/in/adriana-lazurca',
      tooltip: 'adriana-lazurca',
   },
   {
      icon: <RiDiscordLine />,
      url: '',
      tooltip: 'Adriana Lazurca#5360',
   },
   {
      icon: <AiOutlineMail />,
      url: '',
      tooltip: 'adrianar.lazurca@gmail.com',
   },
];

export const Contact = () => {
   return (
      <div className='contact' id='contact'>
         <ReactTooltip place='bottom' />
         <ul className='contact__list'>
            {contactItems.map((contactItem, index) => (
               <li key={`contactItem-${contactItem.icon}-${index}`}>
                  <a href={contactItem.url} target='_blank' rel='noreferrer' data-tip={contactItem.tooltip}>
                     {contactItem.icon}
                  </a>
               </li>
            ))}
         </ul>
      </div>
   );
};
