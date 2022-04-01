import './technologies.scss';

export const Technologies = ({ technologies }) => (
   <ul className='technology'>
      {technologies.map((technology, index) => (
         <li className='technology__badge' key={`technology-${index}`}>{technology}</li>
      ))}
   </ul>
);
