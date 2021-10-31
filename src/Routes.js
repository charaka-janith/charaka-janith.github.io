import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {Sugar} from 'react-preloaders';
import ParticleBackground from './config/Particle_background';
import Cursor from './config/Cursor';
// components
import About from './components/main/About';
import AddTestimonials from './components/main/AddTestimonials';
import Banner from './components/main/Banner';
import ContactMe from './components/main/ContactMe'
import Navbar from './components/main/Navbar';
import OtherLinks from "./components/main/OtherLinks";
import Projects from './components/main/Projects';
import Skills from './components/main/Skills';
import ViewTestimonials from './components/main/ViewTestimonials';

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
            <ViewTestimonials/>
            <AddTestimonials/>
            <ContactMe/>
            <OtherLinks/>
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
export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/dark-sl" component={Home} exact={true}/>
                <Route path="/test" component={test}/>
                <Route component={PageNotFound}/>
            </Switch>
        </BrowserRouter>
    );
}