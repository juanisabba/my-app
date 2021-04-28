import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";


import Home from "./pages/Home/Home";
import AboutMe from "./pages/AboutMe/AboutMe";
import Projects from "./pages/Projects/Projects";
import Contact from "./pages/Contact/Contact";
import Juaniflix from "./pages/Projects/Juaniflix";
import MarioLuigi from "./pages/Projects/MarioLuigi";
import SimonSays from "./pages/Projects/SimonSays";
import CovidApi from "./pages/Projects/CovidApi";

export default function App() {
  const [showMenu, setShowMenu] = useState(false);
  let movilMenu;

  if (showMenu) {
    movilMenu = (
      <div className="movil-menu">
      <ul>
        <li onClick={()=> setShowMenu(false)}>
          <Link to="/" className="link">
            HOME
          </Link>
        </li>
        <li onClick={()=> setShowMenu(false)}>
          <Link to="/about-me" className="link">
            ABOUT ME
          </Link>
        </li>
        <li onClick={()=> setShowMenu(false)}>
          <Link to="/projects" className="link">
            PROJECTS
          </Link>
        </li>
        <li onClick={()=> setShowMenu(false)}>
          <Link to="/contact" className="link">
            CONTACT
          </Link>
        </li>
      </ul>
      </div>
    );
  }

  return (
    <Router>
      <div className="App">
        <div className="Header">
          <ul className="menu">
            <li>
              <Link to="/" className="link">
                HOME
              </Link>
            </li>
            <li>
              <Link to="/about-me" className="link">
                ABOUT ME
              </Link>
            </li>
            <li>
              <Link to="/projects" className="link">
                PROJECTS
              </Link>
            </li>
            <li>
              <Link to="/contact" className="link">
                CONTACT
              </Link>
            </li>
          </ul>
        </div>
        <FontAwesomeIcon icon={faBars} size="2x" aria-hidden="true" className="bars" onClick={()=> setShowMenu(!showMenu)} />
        <FontAwesomeIcon icon={faTimes} size="2x" aria-hidden="true" className="times" onClick={()=> setShowMenu(false)} />

        {movilMenu}

        <Route exact path="/" component={Home} />
        <Route exact path="/about-me" component={AboutMe} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/projects/juaniflix" component={Juaniflix} />
        <Route exact path="/projects/mario-vs-luigi" component={MarioLuigi} />
        <Route exact path="/projects/simon-says" component={SimonSays} />
        <Route exact path="/projects/covid-live-data" component={CovidApi} />
        <Route exact path="/contact" component={Contact} />
      </div>
    </Router>
  );
}
