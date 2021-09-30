import hakumen_long from '../assets/gifs/hakumen_long.gif'

export default function About() {
  return (
    <section id="About" className="sticky z-10">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-5xl text-5xl mb-4 font-medium text-white">
            LET ME
            INTRODUCE
            MYSELF
          </h1>
          <p className="mb-8 leading-relaxed text-lg text-white">
            I am a software engineering student who completing the third sem in HND programme in IJSE (Institute of Java Software Engineering) and currently completing an Internship Programme in Software Engineering.
            <br/>
            <br/>
            I love building things. While hard engineering problems are often instrinsically fun to takle, I'm most attracted to solving real customer problems with a business justification. I have completed my higher education in Prince of Wales College & currently living in 75/A, School lane, Siddamulla, Piliyandala, Western province, Sri Lanka. postal code - 10304. Looking forward to give you many more IT solutions.
          </p>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="boy"
            src={hakumen_long}
          />
        </div>
      </div>
    </section>
  );
}