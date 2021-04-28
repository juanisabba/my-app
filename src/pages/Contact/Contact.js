import React from "react";
import "./styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faWhatsapp,
  faGithub,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

export default function Contact() {
  return (
    <div className="Contact">
      <h1 className="title">CONTACT ME</h1>
      <ul className="icons-list">
        <li>
          <a
            href="mailto:juanisabbatini@hotmail.com"
            target="_blank"
            rel="noreferrer"
            className="email-link"
            onMouseEnter={() => {
              document.querySelector('.title').textContent = "EMAIL";
              document.querySelector('.title').style.color = "blue";
            }}
            onMouseLeave={() => {
              document.querySelector('.title').textContent = "CONTACT ME";
              document.querySelector('.title').style.color = "#000";
            }}
          >
            <div className="line line1"></div>
            <FontAwesomeIcon
              icon={faEnvelope}
              size="6x"
              aria-hidden="true"
              className="icon"
            />
          </a>
        </li>

        <li>
          <a
            href="https://api.whatsapp.com/send?phone=5491138649922"
            target="_blank"
            rel="noreferrer"
            className="whatsapp-link"
            onMouseEnter={() => {
              document.querySelector('.title').textContent = "WHATSAPP";
              document.querySelector('.title').style.color = "#00bb2d";
            }}
            onMouseLeave={() => {
              document.querySelector('.title').textContent = "CONTACT ME";
              document.querySelector('.title').style.color = "#000";
            }}
          >
            <div className="line line2"></div>
            <FontAwesomeIcon
              icon={faWhatsapp}
              size="6x"
              aria-hidden="true"
              className="icon"
            />
          </a>
        </li>

        <li>
          <a
            href="https://github.com/juanisabba"
            target="_blank"
            rel="noreferrer"
            className="github-link"
            onMouseEnter={() => {
              document.querySelector('.title').textContent = "GITHUB";
              document.querySelector('.title').style.color = "#fff";
            }}
            onMouseLeave={() => {
              document.querySelector('.title').textContent = "CONTACT ME";
              document.querySelector('.title').style.color = "#000";
            }}
                  

            >
            <div className="line line3"></div>
            <FontAwesomeIcon
              icon={faGithub}
              size="6x"
              aria-hidden="true"
              className="icon"
            />
          </a>
        </li>

        <li>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="linkedin-link"
            onMouseEnter={() => {
              document.querySelector('.title').textContent = "LINKEDIN";
              document.querySelector('.title').style.color = "#1664b1";
            }}
            onMouseLeave={() => {
              document.querySelector('.title').textContent = "CONTACT ME";
              document.querySelector('.title').style.color = "#000";
            }}

          >
            <div className="line line4"></div>
            <FontAwesomeIcon
              icon={faLinkedin}
              size="6x"
              aria-hidden="true"
              className="icon"
            />
          </a>
        </li>

        <li>
          <a
            href="https://www.instagram.com/juanisabbatini/"
            target="_blank"
            rel="noreferrer"
            className="instagram-link"
            onMouseEnter={() => {
              document.querySelector('.title').textContent = "INSTAGRAM";
              document.querySelector('.title').style.color = "#be1b85";
            }}
            onMouseLeave={() => {
              document.querySelector('.title').textContent = "CONTACT ME";
              document.querySelector('.title').style.color = "#000";
            }}

          >
            <div className="line line5"></div>
            <FontAwesomeIcon
              icon={faInstagram}
              size="6x"
              aria-hidden="true"
              className="icon"
            />
          </a>
        </li>
      </ul>
    </div>
  );
}
