import './App.css';
import About from './components/About';
import Banner from './components/Banner';
import Navbar from './components/Navbar';

function App() {
  return (
    <main className="bg-gray-800">
      <Navbar/>
      <Banner/>
      <About/>
    </main>
  );
}

export default App;
