import hakumen_long from '../../assets/gifs/main/hakumen_long.gif'

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font text-5xl mb-4 font-medium text-white">
            LET ME
            INTRODUCE
            MYSELF
          </h1>
          <p className="mb-8 leading-relaxed text-lg text-white">
            I am a software engineer who completed the CMJD - BSc (Hons) in Computer Science at IJSE. I also completed the certificate course in Ethical Hacking at CICRA Campus. I'm willing to complete the CEH with them too. I've completed my Software Engineering internship and have one year of work experience with Tutopiya company.
            <br/>
            <br/>
            I love building things. While hard engineering problems are often intrinsically fun to tackle, I'm most attracted to solving real customer problems with a business justification. I have completed my higher education at Prince of Wales College & currently living in Piliyandala, Western Province, Sri Lanka. postal code - 10304. Looking forward to giving you many more IT solutions.
            <br/>
            <br/>
            Yes, a Martial Artist too ..
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