import { testimonials } from '../../config/Data';
import Testimonial from 'react-testimonial';

export default function Testimonials() {
  var testimonial = new Testimonial('#testimonial-slider');
  return (
    <section id="testimonials" className="text-gray-400">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <h1 className="text-5xl font-medium title-font mb-4 text-white">
            Testimonials
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-lg font-bold text-text_dark">
            A bug is never just a mistake. It represents something bigger. An error of thinking. That makes you who you are
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          <Testimonial>
            {testimonials.map((testimonial) => (
              <div className="p-4 w-full mx-auto">
                <div className="h-full bg-gray-800 bg-opacity-40 p-8 rounded">
                  <p className="leading-relaxed mb-6 font-bold">"{testimonial.quote}"</p>
                  <div className="inline-flex items-center">
                    <img
                      alt="testimonial"
                      src={testimonial.image}
                      className="w-12 rounded-full flex-shrink-0 object-cover object-center"
                    />
                    <span className="flex-grow flex flex-col pl-4">
                      <span className="title-font font-medium font-bold text-text_dark">
                        {testimonial.name}
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </Testimonial>
        </div>
        <div className="sticky z-10 mx-auto mt-5 bg-gray-800 bg-opacity-40 p-10">
          <form>
            <label>
              Name:
              <input type="text" name="name" />
            </label>
            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    </section>
  );
}