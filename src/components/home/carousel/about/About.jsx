import './about.scss'

export const About = (props) => {
   const { personalInfo } = props;
   return (
      <div className='description'>
         <span className='description__greeting'>Hello!</span>
         <p className='description__text'>{personalInfo && personalInfo.about}</p>
      </div>
   );
};
