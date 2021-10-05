import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as Brand_icons from '@fortawesome/free-brands-svg-icons';
import HorizontalScroll from 'react-scroll-horizontal';

export default function Skills() {
const parent  = { width: `60em`, height: `100px`}
const child   = { width: `30em`, height: `100px`}
  return (
    <section id="skills">
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-20">
          <h1 className="text-5xl font-medium title-font text-white mb-4">
            Technologies &amp; Experience
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-red-400 text-lg">
            My favourite thing in life don't cost any money.
             It's really clear that the most precious resource we all have is time
          </p>
        </div>
        <div style={parent}>
                <HorizontalScroll>
                    <div style={child} >Hi there</div>
                    <div style={child} />
                    <div style={child} />
                </HorizontalScroll>
              </div>
        <div className="flex flex-wrap justify-center">
          <div className="p-2 flex sm:flex-row flex-col">
            <div className="flex">
              <div className="bg-gray-800 border border-gray-700 hover:shadow-2xl w-32 duration-1000
              rounded p-4 text-center m-4 text-white hover:text-red-400 sticky z-10">
                <FontAwesomeIcon icon={Brand_icons.faJava} size="6x" transform="shrink-6"/>
              </div>
              <div className="bg-gray-800 border border-gray-700 hover:shadow-2xl w-32 duration-1000
              rounded p-4 text-center m-4 text-white hover:text-red-400 sticky z-10">
                <FontAwesomeIcon icon={Brand_icons.faPython} size="6x" transform="shrink-6"/>
              </div>
              <div className="bg-gray-800 border border-gray-700 hover:shadow-2xl w-32 duration-1000
              rounded p-4 text-center m-4 text-white hover:text-red-400 sticky z-10">
                <FontAwesomeIcon icon={Brand_icons.faJsSquare} size="6x" transform="shrink-6"/>
              </div>
            </div>
            <div className="flex">
              <div className="bg-gray-800 border border-gray-700 hover:shadow-2xl w-32 duration-1000
              rounded p-4 text-center m-4 text-white hover:text-red-400 sticky z-10">
                <FontAwesomeIcon icon={Brand_icons.faHtml5} size="6x" transform="shrink-6"/>
              </div>
              <div className="bg-gray-800 border border-gray-700 hover:shadow-2xl w-32 duration-1000
              rounded p-4 text-center m-4 text-white hover:text-red-400 sticky z-10">
                <FontAwesomeIcon icon={Brand_icons.faCss3Alt} size="6x" transform="shrink-6"/>
              </div>
              <div className="bg-gray-800 border border-gray-700 hover:shadow-2xl w-32 duration-1000
              rounded p-4 text-center m-4 text-white hover:text-red-400 sticky z-10">
                <FontAwesomeIcon icon={Brand_icons.faPhp} size="6x" transform="shrink-6"/>
              </div>
            </div>
            <div className="flex">
              <div className="bg-gray-800 border border-gray-700 hover:shadow-2xl w-32 duration-1000
              rounded p-4 text-center m-4 text-white hover:text-red-400 sticky z-10">
                <FontAwesomeIcon icon={Brand_icons.faNode} size="6x" transform="shrink-6"/>
              </div>
              <div className="bg-gray-800 border border-gray-700 hover:shadow-2xl w-32 duration-1000
              rounded p-4 text-center m-4 text-white hover:text-red-400 sticky z-10">
                <FontAwesomeIcon icon={Brand_icons.faReact} size="6x" transform="shrink-6"/>
              </div>
              <div className="bg-gray-800 border border-gray-700 hover:shadow-2xl w-32 duration-1000
              rounded p-4 text-center m-4 text-white hover:text-red-400 sticky z-10">
                <FontAwesomeIcon icon={Brand_icons.faAngular} size="6x" transform="shrink-6"/>
              </div>
            </div>
            <div className="flex">
              <div className="bg-gray-800 border border-gray-700 hover:shadow-2xl w-32 duration-1000
              rounded p-4 text-center m-4 text-white hover:text-red-400 sticky z-10">
                <FontAwesomeIcon icon={Brand_icons.faWordpress} size="6x" transform="shrink-6"/>
              </div>
              <div className="bg-gray-800 border border-gray-700 hover:shadow-2xl w-32 duration-1000
              rounded p-4 text-center m-4 text-white hover:text-red-400 sticky z-10">
                <FontAwesomeIcon icon={Brand_icons.faGitAlt} size="6x" transform="shrink-6"/>
              </div>
              <div className="bg-gray-800 border border-gray-700 hover:shadow-2xl w-32 duration-1000
              rounded p-4 text-center m-4 text-white hover:text-red-400 sticky z-10">
                <FontAwesomeIcon icon={Brand_icons.faAws} size="6x" transform="shrink-6"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}