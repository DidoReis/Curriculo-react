import React from "react";

import "../Main/styles.css";
import About from "./About";
import Certification from "./Certification";
import Education from "./Education";
import Experience from "./Experience";
import Progress from "./ProgressBar";

export default function Main() {
  return (
    <div id="sidebar" className="col-12 col-md-8 col-lg-8">
      <main className="content ml-0 ml-md-2 mr-0">
        <div id="about" className="section mt-3 mt-md-0 p-3 p-md-5 rounded">
          <About />
        </div>
        <Education />
        <Certification />
        <Experience />
        <Progress />
      </main>
    </div>
  );
}
