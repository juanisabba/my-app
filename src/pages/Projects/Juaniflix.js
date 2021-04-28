import React from "react";
import "./styles.css";
import juaniflix from "../../images/juaniflix.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Juaniflix() {
  return (
    <div className="Project">
      <img src={juaniflix} alt="Juaniflx" className="project-image" />
      <div className="project-info">
        <h3 className="project-text">
          Juaniflix it´s a Netflix clone created with React js and Omdb Api
            <br />
            <br />
          <span className="languages">React</span>
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
