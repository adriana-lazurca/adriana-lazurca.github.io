import education from '../../local-json/education.json';

export const About = () => {
   return <p>{education && education.map((education) => <p key={education.id}>{education.type}</p>)}</p>;
};
