import React from "react";
import "./styles.css";
import simonSays from "../../images/simon-says.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default function SimonSays() {
  return (
    <div className="Project">
      <img
        src={simonSays}
        alt="Mario vs Luigi Pong"
        className="project-image"
      />
      <div className="project-info">
        <h3 className="project-text">
          The popular game where you have to remember the color and it's order.
          Created with HTML, CSS and JavaScript <br />
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
