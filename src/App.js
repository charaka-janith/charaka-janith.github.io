import './App.css';
import { Sugar } from 'react-preloaders';
import { Scrollbars } from 'react-custom-scrollbars';
// components
import About from './components/About';
import Banner from './components/Banner';
import Cursor from './config/Cursor';
import Navbar from './components/Navbar';
import ParticleBackground from './components/Particle_background';

function App() {
  return (
    <main className="bg-gray-800">
      <Cursor/>
      <Scrollbars>
        <Navbar/>
        <Banner/>
        <About/>
      </Scrollbars>
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