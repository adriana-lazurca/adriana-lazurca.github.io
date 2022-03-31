import './job.scss';

export const JobCard = ({ job }) => {
   return (
      <div id='experience' className='job'>
         <>
            <h2>{job.title}</h2>
            <ul>
               {job.tasks.map((task, index) => (
                  <li key={`job-${job.company.name}-${index}`}>{task}</li>
               ))}
            </ul>
         </>
      </div>
   );
};
