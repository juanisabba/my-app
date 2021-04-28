import React from "react";
import "./styles.css";
import marioLuigi from "../../images/mario-luigi.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default function MarioLuigi() {
  return (
    <div className="Project">
      <img
        src={marioLuigi}
        alt="Mario vs Luigi Pong"
        className="project-image"
      />
      <div className="project-info">
        <h3 className="project-text">
          Mario vs Luigi Pong is my adaptation of the famous game. It consist in
          a 1 vs 1 game created with HTML, CSS and JavaScript <br />
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
