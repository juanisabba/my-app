import React from "react";
import "./styles.css";
import covidApi from "../../images/covidapi.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default function CovidApi() {
  return (
    <div className="Project">
      <img src={covidApi} alt="Covid API" className="project-image" />
      <div className="project-info">
        <h3 className="project-text">
          Covid19 Live Data is a website that shows all the information about the covid in every country in real time
          using the Covid19 API.
          <br />
          <br />
          <span className="languages">HTML</span>
          <span className="languages">CSS</span>
          <span className="languages">JavaScript</span>
        </h3>
        <div className="buttons-project">
          <button>
            See it on GitHub{" "}
            <FontAwesomeIcon
              icon={faGithub}
              aria-hidden="true"
              className="button-icon"
            />
          </button>
          <button>
            See the Website{" "}
            <FontAwesomeIcon
              icon={faExternalLinkAlt}
              aria-hidden="true"
              className="button-icon"
            />
          </button>
        </div>
      </div>
    </div>
  );
}
