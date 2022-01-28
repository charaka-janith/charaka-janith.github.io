import React from 'react';
import Particles from "react-tsparticles";
import PARTICLES_CONFIG from "./Particles_config";

export default function Particle_background (){
  return <Particles 
  className="fixed w-screen h-screen top-0 left-0"
  params={PARTICLES_CONFIG}/>
};