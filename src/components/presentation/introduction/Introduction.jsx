import '../../../assets/styles/variables/_breakpoints.scss';
import bigPhoto from '../../../assets/images/adriana-big.jpg';
import '../../../assets/styles/fonts.scss';
import './introduction.scss';

export const Introduction = (props) => {
   const { personalInfo } = props;
   const fullName = `${personalInfo.firstName} ${personalInfo.lastName}`.toUpperCase();

   return (
      <div className='introduction'>
         <div className='introduction__img'>
            <img src={bigPhoto} alt='adriana' />
         </div>
         <div className='introduction__title'>
            <p className='text-2xl'>{fullName}</p>
            <p className='text-lg'>{personalInfo.jobTitle}</p>
         </div>
      </div>
   );
};
