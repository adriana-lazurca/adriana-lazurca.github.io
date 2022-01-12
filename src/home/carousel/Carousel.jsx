import './carousel.scss';

export const Carousel = () => {
   return (
      <div className='carousel'>
         <div className='carousel__card'>
            <div className='carousel__card-content'>
               <p>
                  About me: I'm Adriana Lazurca Correia from Romania! I'm Adriana Lazurca Correia from Romania! I'm
                  Adriana Lazurca Correia from Romania!I'm Adriana Lazurca Correia from Romania!
               </p>
               <a className='carousel__prev'>&lt;</a>
               <a className='carousel__next'>&gt;</a>
            </div>

            <div className='carousel__card-list'>
               <ul>
                  <li>About</li>
                  <li>Skills</li>
                  <li>Languages</li>
               </ul>
            </div>
         </div>
      </div>
   );
};
