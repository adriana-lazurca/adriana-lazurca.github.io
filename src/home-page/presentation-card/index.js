import './presentation-card.scss';
import photo from '../../assets/images/adriana.jpg';

const PresentationCard = () => {
   return (
      <div className='presentation'>
         <img src={photo} alt='adriana' width='100' height='100' />
         <div >
            <p>Adriana Lazurca</p>
            <p>FRONT-END DEVELOPER</p>
         </div>
      </div>
   );
};

export default PresentationCard;
