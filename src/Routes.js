import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Sugar } from 'react-preloaders';
import ParticleBackground from './config/Particle_background';
import Cursor from './config/Cursor';
// components
import About from './components/main/About';
import Banner from './components/main/Banner';
import Navbar from './components/main/Navbar';
import Skills from './components/main/Skills';
import Projects from './components/main/Projects';
import Testimonials from './components/main/Testimonials';
// consts
const PageNotFound = () => {
  return (
    <h1>404</h1>
  );
}, test = () => {
  return (
    <h1>test</h1>
  );
}, Home = () => {
  return (
    <main className="bg-bg_dark">
      <Cursor/>
      <Navbar/>
      <Banner/>
      <About/>
      <Skills/>
      <Projects/>
      <Testimonials/>
      <Sugar
        time={1000}
        color={'#003040'}
        background="white"
      />
      <ParticleBackground/>
    </main>
  );
}
// export
export default function Routes () {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} exact={true}/>
        <Route path="/test" component={test}/>
        <Route component={PageNotFound}/>
      </Switch>
    </BrowserRouter>
  );
}