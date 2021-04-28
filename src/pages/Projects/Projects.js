import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";
import juaniflix from '../../images/juaniflix.png'
import simonSays from '../../images/simon-says.png'
import marioLuigi from '../../images/mario-luigi.png'
import covidApi from "../../images/covidapi.png";

export default function Projects() {
  return (
    <div className="Projects">
      <div className="container">
        <div className="card">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <div className="content">
            <h2>01</h2>
            <h3>JUANIFLIX</h3>
            <img src={juaniflix} alt="Juaniflix"/>
            <p>Juaniflix is a Netflix clone created with React js and Omdb Api</p>
            <Link to="/portfolio/projects/juaniflix">
                SEE MORE
              </Link>

          </div>
        </div>
        <div className="card">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <div className="content">
            <h2>02</h2>
            <h3>MARIO VS LUIGI</h3>
            <img src={marioLuigi} alt="Mario vs Luigi Pong"/>
            <p>Mario vs Luigi Pong is my adaptation of the famous game. It consist in a 1 vs 1 game created with
                HTML, CSS and JavaScript
            </p>
            <Link to="/portfolio/projects/mario-vs-luigi">
                SEE MORE
              </Link>
          </div>
        </div>
        <div className="card">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <div className="content">
            <h2>03</h2>
            <h3>SIMON SAYS</h3>
            <img src={simonSays} alt="Simon Says"/>
            <p>The popular game where you have to remember the color and it's order. Created with HTML, CSS and JavaScript</p>
            <Link to="/portfolio/projects/simon-says">
                SEE MORE
              </Link>
          </div>
        </div>
        <div className="card">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <div className="content">
            <h2>04</h2>
            <h3>COVID LIVE DATA</h3>
            <img src={covidApi} alt="Covid Live Data"/>
            <p>Covid19 Live Data is a website that shows all the information about the covid in every country in real time
          using the Covid19 API.</p>
            <Link to="/portfolio/projects/covid-live-data">
                SEE MORE
              </Link>
          </div>
        </div>

      </div>

    </div>
  );
}
