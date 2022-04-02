// firebase
import {db} from '../../Firebase';
import React from "react";

export default function ViewTestimonials() {
  const [testimonials, setTestimonials] = React.useState([]);
  const [index, setIndex] = React.useState(0);
  React.useEffect(() => {
    if (0 === testimonials.length) {
      const fetchData = async () => {
        await db.collection("testimonials").get().then((data) => {
          setTestimonials(data.docs.map(doc => doc.data()));
        })
      }
      fetchData().then(r => {})
    }
    setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
        ),
      20000
    );
    return () => {
    };
    // eslint-disable-next-line
  }, [index]);
  return (
    <section id="testimonials" className="text-gray-400">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <h1 className="text-5xl font-medium title-font mb-4 text-white">
            Testimonials
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-lg font-bold text-text_dark">
            A bug is never just a mistake. It represents something bigger. An error of thinking. That makes you who
            you are
          </p>
        </div>
        <div className="flex flex-wrap">
          {
            0 < testimonials.length ? (
              (
                <div className="p-4 w-full mx-auto">
                  <div className="h-full bg-gray-800 bg-opacity-40 p-8 rounded">
                    <p className="leading-relaxed mb-6 font-bold">"{testimonials[index].quote}"</p>
                    <div className="inline-flex items-center">
                      <img
                        alt="testimonial"
                        src={testimonials[index].profileImg}
                        className="w-12 rounded-full flex-shrink-0 object-cover object-center"
                      />
                      <span className="flex-grow flex flex-col pl-4">
                    <span className="title-font font-medium font-bold text-text_dark">
                      {testimonials[index].firstName} {testimonials[index].lastName}
                    </span>
                  </span>
                    </div>
                  </div>
                </div>
              )
            ) : null
          }
        </div>
      </div>
    </section>
  );
}