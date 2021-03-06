import React, {Component} from "react";
import '../../config/Image_Uploader.css';
import swal from 'sweetalert';
// firebase
import {db, storage} from '../../Firebase';
import {addDoc, collection} from "firebase/firestore";

export class AddTestimonials extends Component {
  state = {
    profileImg: "/profile_img.gif",
    firstName: '',
    lastName: '',
    quote: '',
    testimonials: []
  };
  imageHandler = e => {
    /*const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        this.setState({ profileImg: reader.result });
      }
    };
    reader.readAsDataURL(e.target.files[0]);*/
    const image = e.target.files[0];
    this.setState({profileImg: image});
  };
  submitForm = async () => {
    swal("Thank You!", "Should I give you a kiss! ❤️", "success");
    // console.log('start of upload')
    // async magic goes here...
    if(this.state.profileImg === '' ) {
      console.error(`not an image, the image file is a ${typeof(this.state.profileImg)}`)
    }
    const uploadTask = storage.ref(`/testimonials/${this.state.profileImg.name}`).put(this.state.profileImg)
    // initiates the firebase side uploading
    uploadTask.on('state_changed',
      (snapShot) => {
        // takes a snap shot of the process as it is happening
        // console.log(snapShot)
      }, (err) => {
        // catches the errors
        console.log(err)
      }, () => {
        // gets the functions from storage refences the image storage in firebase by the children
        // gets the download url then sets the image from firebase as the value for the imgUrl key:
        storage.ref('testimonials').child(this.state.profileImg.name).getDownloadURL()
          .then(fireBaseUrl => {
            this.setState({ profileImg: fireBaseUrl });
            // Add a new document with a generated id.
            addDoc(collection(db, "testimonials"), {
              firstName: this.state.firstName
              , lastName: this.state.lastName
              , quote: this.state.quote
              , profileImg: this.state.profileImg
            });
          })
      })
  };
  render() {
    const {profileImg} = this.state;
    return (
      <section className="text-gray-400">
        <div className="container px-5 py-10 mx-auto text-center lg:px-40">
          <div className="mx-auto mt-5 bg-gray-900 bg-opacity-40 p-10 pb-5">
            <form className="w-full">
              <div className="flex flex-wrap -mx-3">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
                         htmlFor="grid-first-name">
                    First name
                  </label>
                  <input
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 sticky z-10"
                      id="grid-first-name" type="text" placeholder="First Name"
                    onChange={e => this.setState({firstName: e.target.value})}/>
                  <p className="text-white text-xs italic">Please fill out this field.</p>
                </div>
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
                         htmlFor="grid-last-name">
                    Last name
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 sticky z-10"
                    id="grid-last-name" type="text" placeholder="Last Name"
                    onChange={e => this.setState({lastName: e.target.value})}/>
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
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 sticky z-10"
                    id="grid-quote" type="text" placeholder="Testimonial"
                    onChange={e => this.setState({quote: e.target.value})}/>
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
                    <label
                        className="image-upload font-bold duration-0.2 bg-text_dark hover:bg-hover_dark hover:text-bg_dark text-white neon_btn sticky z-10 cursor-pointer"
                        htmlFor="input">
                      Choose your Photo
                    </label>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3 flex justify-center">
                  <button
                      className="text-lg bg-text_dark hover:bg-hover_dark hover:text-bg_dark text-white py-1 px-2 rounded font-bold duration-0.2 neon_btn w-full sticky z-10"
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

export default AddTestimonials;