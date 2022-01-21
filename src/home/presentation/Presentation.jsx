import '../../assets/styles/variables/_breakpoints.scss';
import bigPhoto from '../../assets/images/adriana-big.jpg';
import '../../assets/styles/text.scss';
import './presentation.scss';

export const Presentation = () => {
   return (
      <div className='presentation'>
         <div className='presentation__img'>
            <img src={bigPhoto} alt='adriana' />
         </div>
         <div className='presentation__title'>
            <p className='text-2xl'>ADRIANA LAZURCA</p>
            <p className='text-lg'>Front-End Developer</p>
         </div>
      </div>
   );
};
