import '../../assets/styles/variables/_breakpoints.scss';
import bigPhoto from '../../assets/images/adriana-big.jpg';
import './presentation.scss';

export const Presentation = () => {
   return (
      <div className='presentation'>
         <img src={bigPhoto} alt='adriana' />

         <div>
            <p>Adriana Lazurca</p>
            <p>FRONT-END DEVELOPER</p>
         </div>
      </div>
   );
};
