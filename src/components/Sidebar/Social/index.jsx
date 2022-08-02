import React from "react";
import Git from "./Github";
import Linkedin from "./Linkedin";

export default function Social() {
  return (
    <div className="social-icons">
      <ul className="list-unstyled mb-0">
        <Git />
        <Linkedin />
      </ul>
    </div>
  );
}
