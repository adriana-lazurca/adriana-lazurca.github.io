import { Technologies } from '../technologies';
import { getDate } from '../utils/getDate';
import './education-card.scss';

export const EducationCard = ({ education }) => {
   const technologies = education.skills.map((skill) => skill.technologies);
   const allTechnologies = [].concat(...technologies);

   return (
      <div className='education'>
         <h2>{education.type}</h2>
         <p className='education__institution'>
            <span>{education.institution.name}</span> - <span className='opacity'>{education.institution.city}</span>
         </p>
         {allTechnologies.length > 0 && <Technologies technologies={allTechnologies} />}
         <footer>
            <p className='opacity'>
               {getDate(education.startDate)} - {getDate(education.endDate)}
            </p>
         </footer>
      </div>
   );
};
