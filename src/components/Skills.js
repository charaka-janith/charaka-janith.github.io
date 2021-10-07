import { skills } from '../config/Data';
import '../config/Slideshow.css';
import '../config/Neon_button.css';
import React from 'react';
import experience from '../assets/gifs/experience.gif';
import cv from '../assets/cv.pdf';

export default function Skills() {
  const [index, setIndex] = React.useState(0);
  React.useEffect(() => {
    setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === skills.length - 1 ? 0 : prevIndex + 1
        ),
      2500
    );
    return () => {};
  }, [index]);
  return (
    <section>
      <section id="skills">
        <div className="container px-5 py-10 mx-auto">
          <div className="text-center mb-10">
            <h1 className="text-5xl font-medium title-font text-white mb-4">
              Technologies &amp; Experience
            </h1>
            <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-text_dark text-lg font-bold">
              My favourite thing in life don't cost any money.
               It's really clear that the most precious resource we all have is time
            </p>
          </div>
          <div className="slideshow w-full overflow-hidden">
            <div className="slideshowSlider w-32" style={{ transform: `translate3d(${-index * 120}%, 0, 0)` }}>
              {skills.map((skill, index) => (
                <div className="slide bg-transparent border border-hover_dark rounded text-center text-white m-4 p-4" key={index}>
                  <img
                    className="object-cover object-center w-24 h-24"
                    alt="skill"
                    src={skill}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section id="experience">
        <div className="container mx-auto flex px-10 pb-20 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded"
              alt="man dance"
              src={experience}
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font text-5xl mb-4 font-medium text-text_dark">
              1.5+
            </h1>
            <h1 className="title-font text-5xl mb-4 font-medium text-white">
              Years experienced Software Engineer
            </h1>
            <p className="mb-8 leading-relaxed text-text_dark text-lg font-bold">
              Information is not knowledge. The only source of knowledge is experience. You need experience to gain wisdom
            </p>
            <div className="flex justify-center">
              <a href={cv}
              className="sticky z-10 inline-flex text-white overflow-hidden hover:bg-text_dark
              neon_btn hover:text-bg_dark py-2 px-6 focus:outline-none rounded text-lg font-bold duration-0.2">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Get CV
              </a>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}