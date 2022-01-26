import '../../../assets/styles/variables/_breakpoints.scss';
import bigPhoto from '../../../assets/images/adriana-big.jpg';
import '../../../assets/styles/fonts.scss';
import './introduction.scss';

export const Introduction = () => {
   return (
      <div className='introduction'>
         <div className='introduction__img'>
            <img src={bigPhoto} alt='adriana' />
         </div>
         <div className='introduction__title'>
            <p className='text-2xl'>ADRIANA LAZURCA</p>
            <p className='text-lg'>Front-End Developer</p>
         </div>
      </div>
   );
};
