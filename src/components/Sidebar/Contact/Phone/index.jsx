import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

import "../Phone/styles.css";

export default function Phone() {
  return (
    <p id="sidebar" className="mb-2">
      <p>
        <FontAwesomeIcon className="Phone" icon={faPhone}></FontAwesomeIcon>
        11-94548-7840
      </p>
    </p>
  );
}
