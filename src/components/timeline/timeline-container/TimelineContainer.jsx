import '../timeline.scss';


export const TimelineContainer = ({children}) => {
   return (
      <div id='experience' className='timeline'>
         {children}
      </div>
   );
};
