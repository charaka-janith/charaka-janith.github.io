import man_dance from '../assets/gifs/man_dance.gif'
import Typical from 'react-typical'

export default function About() {
  return (
    <section id="Banner">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
          Hey, I'm CHARAKA.
          <br className="sm:inline-block" />
          Wanna know me ? well I love&nbsp;
          <br className="sm:inline-block md:hidden"/>
          <Typical
            loop={Infinity}
            wrapper="b"
            steps={[
              'programming', 2000, 'pentesting', 2000, 'planning', 2000, 'martial arts', 2000, 'technologies', 2000, 'social works', 2000, 'algorithems', 2000, 'teamwork', 2000, 'coding', 2000, 'listening', 2000, 'walking', 2000, 'organizing', 2000, 'dogs', 2000, 'cars', 2000, 'teaching', 2000
            ]}
          />
        </h1>
        <p className="mb-8 leading-relaxed">
          FALL DEEPER AND DEEPER; THE SIRENS ARE SINGING YOUR SONG
        </p>
            <div className="flex justify-center">
            <a
                href="#contact"
                className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
                Contact Me
            </a>
            <a
                href="#projects"
                className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
                Get CV
            </a>
            </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
            className="object-cover object-center rounded"
            alt="man dance"
            src={man_dance}
            />
        </div>
        </div>
    </section>
  );
}