import React from "react";
import swal from "sweetalert";
import {addDoc, collection} from "firebase/firestore";
import {db} from "../../Firebase";
import {AnimationOnScroll} from 'react-animation-on-scroll';
export default function ContactMe() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");
  const handleSubmit = async function() {
    swal("Thank You!", "Message sent successfully!️", "success");
    // Add a new document with a generated id.
    await addDoc(collection(db, "messages"), {
      name,
      email,
      message
    });
  }
  return (
    <section id="contact" className="relative">
      <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
        <AnimationOnScroll className="lg:w-2/3 md:w-1/2 bg-bg_dark rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative sticky z-10" animateIn="animate__fadeInLeftBig">
        <div >
          <iframe
            width="100%"
            height="100%"
            title="map"
            className="absolute inset-0"
            frameBorder={0}
            marginHeight={0}
            marginWidth={0}
            style={{ filter: "opacity(0.7)" }}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d990.4094596541062!2d79.95406582918733!3d6.813828999692221!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwNDgnNDkuOCJOIDc5wrA1NycxNi42IkU!5e0!3m2!1sen!2slk!4v1635593428474!5m2!1sen!2slk"
          />
          <div className="bg-bg_dark relative flex flex-wrap py-6 rounded shadow-md">
            <div className="lg:w-1/2 px-6">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                ADDRESS
              </h2>
              <p className="mt-1 text-text_dark font-bold">
                No. 62/D,<br />
                School lane,<br />
                Sangarama,
                Siddamulla,
                Piliyandala,<br />
                Colombo district,<br />
                Western province,<br />
                Sri Lanka.<br />
                10304
              </p>
            </div>
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                EMAIL
              </h2>
              <a className="text-indigo-400 leading-relaxed sticky z-10" href={'mailto:charaka.janith.bandarawaththa@gmail.com'}>
                charaka.janith.<br/>bandarawaththa<br/>@gmail.com
              </a>
              <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">
                PHONE
              </h2>
              <p className="leading-relaxed text-text_dark font-bold">+94 7-118-18-119</p>
            </div>
          </div>
        </div>
        </AnimationOnScroll>
        <form className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
          <AnimationOnScroll animateIn="animate__fadeInRightBig">
          <h2 className="text-white sm:text-4xl text-3xl mb-1 font-medium title-font">
            Hire Me
          </h2>
          <p className="leading-relaxed mb-5 text-text_dark font-bold">
            When you hire me, you hire a nut who is going to work 24 hours a day for you and never, ever burn his respect
          </p>
          </AnimationOnScroll>
          <div className="relative mb-4">
            <label htmlFor="name" className="leading-7 text-sm uppercase text-white font-bold">
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Name"
              name="name"
              className="w-full rounded text-base py-1 px-3 leading-8 transition-colors duration-200 ease-in-out sticky z-10 focus:outline-none focus:bg-white focus:border-gray-500 bg-gray-200 text-gray-700 border border-gray-200"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm uppercase text-white font-bold">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="E - mail"
              name="email"
              className="w-full rounded text-base py-1 px-3 leading-8 transition-colors duration-200 ease-in-out sticky z-10 focus:outline-none focus:bg-white focus:border-gray-500 bg-gray-200 text-gray-700 border border-gray-200"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="message"
              className="leading-7 text-sm uppercase text-white font-bold">
              Message
            </label>
            <textarea
              id="message"
              placeholder="Message"
              name="message"
              className="w-full bg-gray-200 text-gray-700 border border-gray-200 rounded h-32 text-base focus:outline-none focus:bg-white focus:border-gray-500 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out sticky z-10"
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <button
              className="text-lg bg-hover_dark hover:bg-text_dark hover:text-bg_dark text-white py-2 px-6 rounded font-bold duration-0.2 neon_btn sticky z-10"
              type="button"
              onClick={handleSubmit}
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}