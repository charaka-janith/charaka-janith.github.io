import React from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';
import {Sugar} from 'react-preloaders';
import ParticleBackground from './config/Particle_background';
import Cursor from './config/Cursor';
import "animate.css/animate.min.css";
// components
/* main */
import About from './components/main/About';
import AddTestimonials from './components/main/AddTestimonials';
import Banner from './components/main/Banner';
import ContactMe from './components/main/ContactMe'
import MainNavbar from './components/main/MainNavbar';
import OtherLinks from "./components/main/OtherLinks";
import Projects from './components/main/Projects';
import Skills from './components/main/Skills';
import ViewTestimonials from './components/main/ViewTestimonials';
/* nic app */
import NIC from "./components/nic/NIC";
import NICNavbar from "./components/nic/NICNavbar";
/* 404 */
import PageNotFoundPage from "./components/404/PageNotFoundPage"
/* caller id finder */
import CallerId from "./components/caller_ID/CallerId"
import CallerNavbar from "./components/caller_ID/CallerNavbar";

const pageNotFound = () => {
    return (
      <main className="page404">
        <PageNotFoundPage/>
      </main>
    );
},callerId = () => {
    return (
      <main className="page404">
        <CallerNavbar/>
        <CallerId/>
      </main>
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
}, home = () => {
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
                <Route path="/" component={home} exact={true}/>
                <Route path="/nic-converter" component={nicApp} exact={false}/>
                <Route path="/age-of-lions" component={coc} exact={true}/>
                <Route path="/caller-id" component={callerId} exact={true}/>
                <Route component={pageNotFound}/>
            </Switch>
        </HashRouter>
    );
}