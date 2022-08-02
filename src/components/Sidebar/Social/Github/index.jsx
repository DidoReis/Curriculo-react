import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import "../Github/styles.css";
import React from "react";

export default function Git() {
  return (
    <li id="sidebar">
      <a href="https://github.com/DidoReis" target="_blank" rel="noreferrer">
        <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
      </a>
    </li>
  );
}
