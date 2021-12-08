import './presentation-card.scss';
import smallPhoto from '../../assets/images/adriana-small.jpg';
import bigPhoto from '../../assets/images/adriana-big.jpg';


export const PresentationCard = () => {
   return (
      <div className='presentation'>
         <img 
         src={smallPhoto} alt='adriana' 
         srcSet={`${smallPhoto} 300w, ${bigPhoto} 1000w`} 
         // sizes={}
         />
         <div >
            <p>Adriana Lazurca</p>
            <p>FRONT-END DEVELOPER</p>
         </div>
      </div>
   );
};

