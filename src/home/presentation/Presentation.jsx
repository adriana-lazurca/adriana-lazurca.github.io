import '../../assets/styles/variables/_breakpoints.scss';
import bigPhoto from '../../assets/images/adriana-big.jpg';
import './presentation.scss';

export const Presentation = () => {
   return (
      <div className='presentation' style={{ display: 'flex', flexDirection: 'column' }}>
         <img src={bigPhoto} alt='adriana' style={{ height: 30, width: 20 }} />
         {/* <div style={{ height: '80%' }}>
            <img src={bigPhoto} alt='adriana' style={{ height: '100%' }} />
         </div>

         <div style={{ height: '20%' }}>
            <p>Adriana Lazurca</p>
            <p>FRONT-END DEVELOPER</p>
         </div> */}
      </div>
   );
};
