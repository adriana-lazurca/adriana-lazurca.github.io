import './home-page.scss';
import Introduction from './introduction';
import Timeline from './timeline';
import Navigation from './navigation';

const HomePage = () => {
   return (
      <div className="home-page-container">
         <div className="main-content">
            <Introduction />
            <Timeline />
         </div>
         <Navigation />
      </div>
   );
};

export default HomePage;
