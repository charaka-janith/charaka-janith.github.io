export default function Navbar() {
  return (
    <header className="bg-gray-800 bg-opacity-90 sticky top-0 z-20">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <div className="title-font font-medium text-red-400 mb-4 md:mb-0">
          <a href="/#" className="ml-3 text-xl">
            DARK SL
          </a>
        </div>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center text-white">
          <a href="About" className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
            About
          </a>
        </nav>
        <a href="/#"
          className="text-white inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
          Contact Me
        </a>
      </div>
    </header>
  );
}