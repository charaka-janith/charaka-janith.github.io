import man_dance from '../../assets/gifs/main/man_dance.gif';
import Typical from 'react-typical';
import {Link} from 'react-scroll';
import '../../config/Neon_button.css';
import {AnimationOnScroll} from 'react-animation-on-scroll';

export default function Banner() {
  return (
    <section id="Banner">
        <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <AnimationOnScroll animateIn="animate__fadeInLeftBig">
            <img
              className="object-cover object-center rounded"
              alt="man dance"
              src={man_dance}
            />
            </AnimationOnScroll>
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <AnimationOnScroll animateIn="animate__fadeInRightBig">
            <h1 className="title-font text-5xl mb-4 font-medium text-white">
              Hey, I'm CHARAKA.
              <br className="sm:inline-block" />
              Wanna know me ? well I love&nbsp;
              <br className="sm:inline-block"/>
              <Typical
                loop={Infinity}
                wrapper="b"
                steps={[
                  'programming', 2000, 'pentesting', 2000, 'planning', 2000, 'martial arts', 2000, 'technologies', 2000, 'social works', 2000, 'algorithems', 2000, 'teamwork', 2000, 'coding', 2000, 'listening', 2000, 'walking', 2000, 'organizing', 2000, 'dogs', 2000, 'cars', 2000, 'teaching', 2000, 'anime', 2000
                ]}
              />
            </h1>
            <p className="mb-8 leading-relaxed text-text_dark text-lg font-bold">
            Control can sometimes be an illusion. But sometimes you need illusions to gain control. Fantasy is an easy way to give meaning to the world
            </p>
            </AnimationOnScroll>
            <div className="flex justify-center">
              <Link
              className="sticky z-10 inline-flex text-white overflow-hidden hover:bg-text_dark
              neon_btn hover:text-bg_dark py-2 px-6 focus:outline-none rounded text-lg font-bold duration-0.2 cursor-pointer"
               to="contact" smooth={true} duration={1000}>
                <span/>
                <span/>
                <span/>
                <span/>
                Contact Me
               </Link>
            </div>
          </div>
        </div>
    </section>
  );
}