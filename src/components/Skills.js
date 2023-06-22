import React from "react";
import "./Skills.css";

function Skills() {
  return (
    <div id="skill">
        <h1>Skills</h1>
        <div className="skill-container">
        <h4>Development and Programming Skills</h4>
            <div className="progress">
                <div className="progress1">
                    <span>HTML : </span>
                    <span>CSS : </span>
                    <span>Javascript : </span>
                    <span>Bootstrap : </span>
                    <span>React JS : </span>
                    <span>C++ : </span>
                    <span>DSA : </span>
                </div>
                <div className="progress2">
                    <div>
                    <progress value="80" max="100">{" "}80%{" "}</progress><span>80%</span></div>
                    <div><progress value="70" max="100">{" "}70%{" "}</progress><span>70%</span></div>
                    <div><progress value="65" max="100">{" "}65%{" "}</progress><span>65%</span></div>
                    <div><progress value="50" max="100">{" "}50%{" "}</progress><span>50%</span></div>
                    <div><progress value="40" max="100">{" "}40%{" "}</progress><span>50%</span></div>
                    <div><progress value="80" max="100">{" "}80%{" "}</progress><span>80%</span></div>
                    <div><progress value="60" max="100">{" "}60%{" "}</progress><span>60%</span></div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Skills;
