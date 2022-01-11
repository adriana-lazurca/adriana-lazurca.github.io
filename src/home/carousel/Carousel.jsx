import './carousel.scss';

export const Carousel = () => {
   return (
      <div className='carousel'>
         <div className='carousel__card'>
            <p className='carousel__card-content'>
               About me: I'm Adriana Lazurca Correia from Romania! I'm Adriana Lazurca Correia from Romania! I'm Adriana
               Lazurca Correia from Romania!I'm Adriana Lazurca Correia from Romania!
            </p>
            <div className='carousel__card-list'>
               <ul>
                  <li>About</li>
                  <li>Skills</li>
                  <li>Languages</li>
                  <li>Interests</li>
               </ul>
            </div>
         </div>
      </div>
   );
};
