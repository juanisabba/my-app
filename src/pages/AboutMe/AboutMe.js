import React from "react";
import "./styles.css";
import profile from "../../images/profile-pic.jpg";

export default function AboutMe() {
  return (
    <div className="About-me">
      <div className="about-me-grid">
      <div className="juani-info">
        <div className="information">
          <h1>About me</h1>
          Hello, my name is Juan Ignacio Sabbatini. I'm a 21 years old Frontend
          Developer from Argentina, currently living in ... I'm an autodidact
          student looking for my first job as a developer to improve my skills
          and learn more every day. Despite my strength is the frontend
          development, I also have knowledge in programs like Photoshop and
          Figma.
        </div>
        <div className="skills">
          <h1>My skills</h1>
          <div className="skills-list">
            <ul>
              <li>HTML5</li>
              <li>CSS3</li>
              <li>SASS</li>
            </ul>
            <ul>
              <li>JavaScript</li>
              <li>React JS</li>
              <li>Git / GitHub</li>
            </ul>
            <ul>
              <li>Figma</li>
              <li>Photoshop</li>
            </ul>
          </div>
        </div>
      </div>
      <img className="profile-pic" src={profile} alt="" />
    </div>
    </div> 
  );
}
