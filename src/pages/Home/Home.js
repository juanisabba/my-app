import React from "react";
import "./styles.css";
import logo from "../../images/logo.png";
import flowers from '../../images/flores.svg'

export default function Home() {
  
  return (
      <div className="Home">
        <div className="name">
          <h1>HI, I'M JUANI SABBATINI</h1>
          <p>Frontend Developer with a great passion for web development.</p>
          <a href="file:///C:/Users/Juani/Downloads/juani-sabbatini-cv.pdf"><button>See my CV</button></a>
        </div>
        <img src={logo} className="developer" alt="Developer" />
      <img className="flowers" src={flowers} alt="Flowers"/>
      </div>
  );
}
