import profile from './profile.jpg';
import './App.css';
import NameTitle from './components/NameTitle';
import Navbar from './components/Navbar';
import Connect from './components/Connect';
import TimelineSection from './components/TimelineSection';
import We2LinkCard from './components/We2LinkCard';

function App() {
  return (
    <>
    <Navbar></Navbar>
    <div className='body'>
      <div className="pfp">
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
      <div className='titles'>
        <h3 id="leftHeader" class="border-light text-light p-2">Experience</h3>
      </div>
      <TimelineSection></TimelineSection>
      <div className='titles'>
        <h3 id="leftHeader" class="border-light text-light p-2">Projects</h3>
      </div>
      <div>
        <We2LinkCard></We2LinkCard>
      </div>
    </div>
    </>
  );
}

export default App;
