import './App.css';
import { Sugar } from 'react-preloaders';
import ParticleBackground from './config/Particle_background';
import Cursor from './config/Cursor';
// components
import About from './components/About';
import Banner from './components/Banner';
import Navbar from './components/Navbar';
import Skills from './components/Skills';
import Projects from './components/Projects';

function App() {
  return (
    <main className="bg-bg_dark">
      <Cursor/>
      <Navbar/>
      <Banner/>
      <About/>
      <Skills/>
      <Projects/>
      <Sugar
        time={1000}
        color={'#003040'}
        background="white"
      />
      <ParticleBackground/>
    </main>
  );
}

export default App;
