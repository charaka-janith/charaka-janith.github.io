import {animateScroll as scroll} from 'react-scroll';
import {Link} from 'react-scroll';
export default function Navbar() {
  return (
    <header className="bg-bg_dark bg-opacity-90 sticky top-0 z-20">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <div className="title-font font-medium text-text_dark mb-4 md:mb-0">
          <div className="ml-3 text-xl" onClick={() => scroll.scrollToTop()}>
            DARK SL
          </div>
        </div>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center text-white">
          <Link className="inline-flex items-center border-0 py-1 px-3 focus:outline-none hover:bg-hover_dark rounded text-base mt-4 md:mt-0 duration-1000" to="about" smooth={true} duration={1000}>About</Link>
          <Link className="inline-flex items-center border-0 py-1 px-3 focus:outline-none hover:bg-hover_dark rounded text-base mt-4 md:mt-0 duration-1000" to="skills" smooth={true} duration={1000}>Skills</Link>
          <Link className="inline-flex items-center border-0 py-1 px-3 focus:outline-none hover:bg-hover_dark rounded text-base mt-4 md:mt-0 duration-1000" to="experience" smooth={true} duration={1000}>Experience</Link>
        </nav>
        <Link className="text-white inline-flex items-center border-0 py-1 px-3 focus:outline-none hover:bg-hover_dark rounded text-base mt-4 md:mt-0 duration-1000" to="skills" smooth={true} duration={1000}>Contact Me</Link>
      </div>
    </header>
  );
}