import React from "react";
import Phone from "./Phone";
import Email from "./Email";
import Social from "../Social";

import "../Contact/styles.css";

export default function Contact() {
  return (
    <div className="contact-info mt-5" id="contact-info">
      <Phone />
      <Email />
      <Social />
    </div>
  );
}
