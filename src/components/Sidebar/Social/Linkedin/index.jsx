import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import React from "react";

import "../Linkedin/styles.css";

export default function Linkedin() {
  return (
    <li id="sidebar">
      <a
        href="https://www.linkedin.com/in/edivando-reis-de-siqueira-1236aa190/"
        target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
      </a>
    </li>
  );
}
