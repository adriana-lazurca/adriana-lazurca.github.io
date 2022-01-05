import '../../assets/styles/variables/_breakpoints.scss';
import bigPhoto from '../../assets/images/adriana-big.jpg';
import './presentation.scss';

export const Presentation = () => {
   return (
      <div className='presentation'>
         <div className='presentation__img'>
            <img src={bigPhoto} alt='adriana' />
         </div>
         <div className='presentation__title'>
            <p>Adriana Lazurca</p>
            <p>FRONT-END DEVELOPER</p>
         </div>
      </div>
   );
};
