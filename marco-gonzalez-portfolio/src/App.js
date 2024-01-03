/*
Website developed by Marco Gonzalez. Date: 01/03/2023
Last updated on: 01/03/2023
*/

import profile from './profile.jpg';
import './App.css';
import NameTitleComponent from './components/NameTitleComponent';
import NavbarComponent from './components/NavbarComponent';
import SocialMediaComponent from './components/SocialMediaComponent';
import TimelineSection from './components/TimelineSection';
import FooterComponent from './components/FooterComponent';
import TitleComponent from './components/TitleComponent.';
import CardImageComponent from './components/CardImageComponent';
import TechnicalSkillsComponent from './components/TechnicalSkillsComponent';
import Fade from 'react-reveal/Fade';

function App() {
  return (
  <>
  <NavbarComponent item1="Experience" item2="Projects" item3="Technical Skills"downloadItem="Download Resume"/>
  <br></br>
  <br></br>
    <div className='body'>
        <div className="pfp" id='home'>
            <header className="pfp-header">
                <img src={profile} className="pfp-logo" alt="logo" />
            </header>
            <div className='nameTitle'>
                <NameTitleComponent/>
            </div>
            <div className = 'sizeConnect'>
                <SocialMediaComponent/>
            </div>
        </div>
        <TitleComponent title = "Experience" titleID = "ExperienceID"/>
        <br></br>
        <TimelineSection/>
        <br></br>
        <TitleComponent title = "Projects" titleID = "ProjectsID"/>
        <div class="container">
            <div class="row">
                <div class="m-0 p-2 col-md-7 col-lg-6">
                    <div class="p-4">
                        <Fade>
                            <CardImageComponent imageSRC = "We2Link.png" cardTitle = "Accessibility Page" cardText = "Built an accessibility page from the ground up to provide users who have cognitive impairments with a better user experience." buttonLink = "https://youtu.be/-TpmvU3DKE0?si=Dy6vQmn-HdNtYiYY" buttonText = "View Demo"/>
                        </Fade>
                    </div>
                    <div class="p-4">
                        <Fade>
                            <CardImageComponent imageSRC = "JDBC.png" cardTitle = "PostgreSQL JDBC Client" cardText = "Designed an ER diagram and schema with appropriate key constraints. Created the database using DDL SQL and implemented a JDBC client that uses PostgreSQL to allow users to interact with the database." buttonLink = "https://github.com/mgonzalez12000/PostgresSQLJDBC" buttonText = "View Source Code"/>
                        </Fade>
                    </div>
                </div>
                <div class="m-0 p-2 col-md-5 col-lg-6 ">
                    <div class="p-4">
                        <Fade>
                            <CardImageComponent imageSRC = "MarcoWebsite.png" cardTitle = "Personal Website" cardText = "Built a responsive personal portfolio website using React, JavaScript, CSS, and Bootstrap." buttonLink = "https://github.com/mgonzalez12000/MarcoGonzalezPortfolio" buttonText = "View Source Code"/>
                        </Fade>
                    </div>
                    <div class="p-4">
                        <Fade>
                            <CardImageComponent imageSRC = "Robotics.png" cardTitle = "Robotics" cardText = "Wrote embedded C++ code using the Arduino IDE running off a VM that utilized Linux’s Ubuntu to enable functionality for a Raspberry Pi and various components such as LED’s ultrasonic sensors, step motors, and screens." buttonLink = "https://github.com/mgonzalez12000/Robotics-Linux-Arduino" buttonText = "View Projects"/>
                        </Fade>
                    </div>
                </div>
            </div>
        </div>
        <TitleComponent title = "Technical Skills" titleID = "TechnicalSkillsID"/>
        <Fade>
            <TechnicalSkillsComponent></TechnicalSkillsComponent>
        </Fade>
        <br/>
        <br/>
        <FooterComponent/>
  </div>
   </>
  );
}

export default App;
