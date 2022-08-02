import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

import "./styles.css";

export default function Phone() {
  return (
    <p id="sidebar" className="mb-2">
      <p>
        <FontAwesomeIcon className="Phone" icon={faEnvelope}></FontAwesomeIcon>
        djdidoreis@gmail.com
      </p>
    </p>
  );
}
