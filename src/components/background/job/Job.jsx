import './job.scss';

export const Job = (props) => {
   const { job } = props;

   return (
      <div className='job'>
         <>
            <h2>{job.title}</h2>
            <ul>
               {job.tasks.map((task, index) => (
                  <li key={index}>{task}</li>//todo: replace index
               ))}
            </ul>
         </>
      </div>
   );
};
