import Particles from "react-particles-js";
import PARTICLES_CONFIG from "./Particles_config";

export default function Particle_background (){
  return <Particles 
  className="fixed w-screen h-screen top-0 left-0"
  params={PARTICLES_CONFIG}/>
};