import { Technologies } from '../technologies';
import { getDate } from '../utils/getDate';

export const EducationCard = ({ education }) => {
   const technologies = education.skills.map((skill) => skill.technologies);
   const allTechnologies = [].concat(...technologies);

   return (
      <div id='education'>
         <h2>{education.type}</h2>
         <p>
            {education.institution.name} - {education.institution.city}
         </p>
         {allTechnologies.length > 0 && <Technologies technologies={allTechnologies} />}
         <footer>
            <p>
               {getDate(education.startDate)} - {getDate(education.endDate)}
            </p>
         </footer>
      </div>
   );
};
