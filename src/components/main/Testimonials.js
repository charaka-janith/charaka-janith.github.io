import React, { Component } from "react";
import { testimonials } from '../../config/Data';
import Testimonial from 'react-testimonial';
import '../../config/Image_Uploader.css';
export class Testimonials extends Component {
state = {
  profileImg: "dark-sl/profile_img.gif"
};
imageHandler = e => {
  const reader = new FileReader();
  reader.onload = () => {
    if (reader.readyState === 2) {
      this.setState({ profileImg: reader.result });
    }
  };
  reader.readAsDataURL(e.target.files[0]);
};
  submitForm = e => {
    console.log(this.state);
  };
  render() {
    const {profileImg} = this.state;
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
            <div className="flex flex-wrap -m-4">
              <Testimonial>
                {testimonials.map((testimonial) => (
                    <div className="p-4 w-full mx-auto" key={testimonial.firstName}>
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
                        {testimonial.firstName} {testimonial.lastName}
                      </span>
                    </span>
                        </div>
                      </div>
                    </div>
                ))}
              </Testimonial>
            </div>
            <div className="sticky z-10 mx-auto mt-5 bg-gray-800 bg-opacity-40 p-10 pb-5">
              <form className="w-full">
                <div className="flex flex-wrap -mx-3">
                  <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
                           htmlFor="grid-first-name">
                      First name
                    </label>
                    <input
    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
    id="grid-first-name" type="text" placeholder="First Name" onChange={e => this.setState({firstName : e.target.value})}/>
                    <p className="text-white text-xs italic">Please fill out this field.</p>
                  </div>
                  <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
                           htmlFor="grid-last-name">
                      Last name
                    </label>
                    <input
    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
    id="grid-last-name" type="text" placeholder="Last Name" onChange={e => this.setState({lastName : e.target.value})}/>
                    <p className="text-white text-xs italic">Please fill out this field.</p>
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
                           htmlFor="grid-quote">
                      Testimonial
                    </label>
                    <input
    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
    id="grid-quote" type="text" placeholder="Testimonial" onChange={e => this.setState({quote : e.target.value})}/>
                    <p className="text-white text-xs italic">Make it as long and as crazy as you'd like</p>
                  </div>
                </div>
                <div className="-mx-3 mb-6 mx-auto text-white items-center">
                  <div className="img-container mb-6">
                    <h1 className="img-heading">Add your Image</h1>
                    <div className="img-holder mt-3 m-auto">
                      <img src={profileImg} alt="" id="img" className="img"/>
                    </div>
                    <input
                        type="file"
                        accept="image/*"
                        name="image-upload"
                        id="input"
                        onChange={this.imageHandler}
                    />
                    <div className="label">
                      <label className="image-upload font-bold duration-0.2 bg-hover_dark hover:bg-text_dark hover:text-bg_dark text-white neon_btn" htmlFor="input">
                        Choose your Photo
                      </label>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full px-3 flex justify-center">
                    <button
                        className="text-lg bg-hover_dark hover:bg-text_dark hover:text-bg_dark text-white py-1 px-2 rounded font-bold duration-0.2 neon_btn"
                        type="button"
                        onClick={this.submitForm}
                    >
                      Send Testimonial
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </section>
    );
  }
}
export default Testimonials;