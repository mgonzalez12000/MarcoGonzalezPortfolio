import profile from './profile.jpg';
import './App.css';
import NameTitle from './components/NameTitle';
import NavBarSite from './components/NavbarSite';
import Connect from './components/Connect';
import TimelineSection from './components/TimelineSection';
import We2LinkCard from './components/We2LinkCard';
import MarcoWebsiteCardComponent from './components/MarcoWebsiteCardComponent';
import RoboticsCardComponent from './components/RoboticsCardComponent';
import JDBCCardComponent from './components/JDBCCardComponent';
import FooterComponent from './components/FooterComponent';
import Fade from 'react-reveal/Fade';

function App() {
  return (
  <>
  <NavBarSite></NavBarSite>
  <br></br>
  <br></br>
    <div className='body'>
        <div className="pfp" id='home'>
            <header className="pfp-header">
                <img src={profile} className="pfp-logo" alt="logo" />
            </header>
            <div className='nameTitle'>
                <NameTitle></NameTitle>
            </div>
            <div className = 'sizeConnect'>
                <Connect></Connect>
            </div>
        </div>
        <div className='titles' id="ExperienceID">
            <h3 class="border-light text-light p-2">Experience</h3>
        </div>
        <br></br>
        <TimelineSection></TimelineSection>
        <br></br>
        <div className='titles' id='ProjectsID'>
            <h3 id="leftHeader" class="border-light text-light p-2">Projects</h3>
        </div>
    
        <div class="container">
            <div class="row">
                {/* left side */}
                <div class="m-0 p-2 col-md-7 col-lg-6">
                    <div class="p-4">
                        <Fade>
                            <We2LinkCard></We2LinkCard>
                        </Fade>
                    </div>
                    <div class="p-4">
                        <Fade>
                            <JDBCCardComponent></JDBCCardComponent>
                        </Fade>
                    </div>
                </div>
                {/* right side */}
                <div class="m-0 p-2 col-md-5 col-lg-6 ">
                    <div class="p-4">
                        <Fade>
                            <MarcoWebsiteCardComponent></MarcoWebsiteCardComponent>
                        </Fade>
                    </div>
                    <div class="p-4">
                        <Fade>
                            <RoboticsCardComponent></RoboticsCardComponent>
                        </Fade>
                    </div>
                </div>
            </div>
        </div>
        <FooterComponent></FooterComponent>
  </div>
   </>
  );
}

export default App;
