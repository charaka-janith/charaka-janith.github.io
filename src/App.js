import './App.css';
import { Sugar } from 'react-preloaders';
// components
import About from './components/About';
import Banner from './components/Banner';
import Cursor from './config/Cursor';
import Navbar from './components/Navbar';
import Skills from './components/Skills';
import ParticleBackground from './components/Particle_background';

function App() {
  return (
    <main className="bg-gray-800">
      <Cursor/>
      <Navbar/>
      <Banner/>
      <About/>
      <Skills/>
      <Sugar
        time={1000}
        color={'rgba(31, 41, 55, 1)'}
        background="white"
      />
      <ParticleBackground/>
    </main>
  );
}

export default App;
