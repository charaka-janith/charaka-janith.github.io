import React from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';
import {Sugar} from 'react-preloaders';
import ParticleBackground from './config/Particle_background';
import Cursor from './config/Cursor';
// components
import About from './components/main/About';
import AddTestimonials from './components/main/AddTestimonials';
import Banner from './components/main/Banner';
import ContactMe from './components/main/ContactMe'
import MainNavbar from './components/main/MainNavbar';
import OtherLinks from "./components/main/OtherLinks";
import Projects from './components/main/Projects';
import Skills from './components/main/Skills';
import ViewTestimonials from './components/main/ViewTestimonials';
import NIC from "./components/nic/NIC";
import NICNavbar from "./components/nic/NICNavbar";

const PageNotFound = () => {
    return (
        <h1>404</h1>
    );
}, nicApp = () => {
    return (
        <main className="nicApp">
            <NICNavbar/>
            <NIC/>
        </main>
    );
}, coc = () => {
    return (
        <main>
            <NIC/>
        </main>
    );
}, Home = () => {
    return (
        <main className="bg-bg_dark">
            <Cursor/>
            <MainNavbar/>
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
                background="#fff"
            />
            <ParticleBackground/>
        </main>
    );
}
// export
export default function Routes() {
    return (
        <HashRouter basename='/'>
            <Switch>
                <Route path="/" component={Home} exact={true}/>
                <Route path="/nic-converter" component={nicApp} exact={false}/>
                <Route path="/age-of-lions" component={coc} exact={true}/>
                <Route component={PageNotFound}/>
            </Switch>
        </HashRouter>
    );
}