import React from "react";
import './App.css';
import Routes from './Routes';
// firebase
import firebase from './Firebase';

function App () {
  const [testimonials, setTestimonials] = React.useState([]);
  React.useEffect (() => {
    const fetchData = async () => {
      const db = firebase.firestore();
      const data = await db.collection("testimonials").get();
      setTestimonials(data.docs.map(doc => doc.data()));
    }
    fetchData();
  }, []);
  return (
      <ul>
        {testimonials.map(testimonial => (
            <li key={testimonial.firstName}>{testimonial.quote}</li>
        ))}
      </ul>
  );
}

export default App;
