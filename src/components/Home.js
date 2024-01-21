import React from "react";
import "./Home.css";
import Photo from "./photo.png";
import Typed from "typed.js";
import Resume from './nitin_kumar_vasdhani_resume.pdf';

function Home() {
  // Create reference to store the DOM element containing the animation
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Programmer","MERN Stack and React Native Developer"],
      typeSpeed: 100,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  },[]);
  return (
    <div id="home">
      <div id="home1">
        <h1>
          Hello, I am
          <br />
          Nitin Kumar Vasdhani
        </h1>
        <div ref={el} />
        <p>I am a MERN Stack and React Native Developer. I have acquired the skills and Knowledge to make your project a success.</p>
        <a
        href={Resume}
        download="Resume"
        target="_blank"
        rel="noreferrer"
      >
        <button>Download Resume</button>
      </a>
      </div>
      <div id="home2">
        <div className="photo">
          <img src={Photo} alt="" className="image"></img>
        </div>
      </div>
    </div>
  );
}

export default Home;
