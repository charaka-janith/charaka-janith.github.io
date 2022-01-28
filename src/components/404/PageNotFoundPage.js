import React, {Component} from 'react';

export default class PageNotFoundPage extends Component {

  componentDidMount () {
    const script = document.createElement("script");

    script.src = "./Tadpoles.js";
    script.async = true;

    document.body.appendChild(script);
  }

  render() {
    return(
      <div>
        <canvas id='paper-canvas' resize='true' className='w-full h-full bg-black'/>
      </div>
    );
  }
}