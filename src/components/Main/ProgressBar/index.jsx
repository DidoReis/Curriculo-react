import React from "react";

import "../ProgressBar/styles.css";

export default function Progress() {
  return (
    <div id="skills" className="section mt-3 mt-md-5 p-3 p-md-5 rounded">
      <h3 id="skills" className="mb-3 text-uppercase">
        Skills
      </h3>
      <div id="skills" className="row">
        <div id="skills" class="col-12 col-md-6">
          <div id="skills" class="progress mt-4">
            <div
              id="skills"
              className="progress-bar w-100 bg-progress progress-bar-striped progress-bar-animated"
            >
              HTML
            </div>
          </div>
          <div id="skills" class="progress mt-4">
            <div
              id="skills"
              className="progress-bar w-100 bg-progress progress-bar-striped progress-bar-animated"
            >
              CSS
            </div>
          </div>
          <div id="skills" class="progress mt-4">
            <div
              id="skills"
              className="progress-bar w-100 bg-progress progress-bar-striped progress-bar-animated"
            >
              Javascript
            </div>
          </div>
        </div>
        <div id="skills" className="col-12 col-md-6">
          <div id="skills" class="progress mt-4">
            <div
              id="skills"
              className="progress-bar w-100 bg-progress progress-bar-striped progress-bar-animated"
            >
              SQL
            </div>
          </div>
          <div id="skills" class="progress mt-4">
            <div
              id="skills"
              className="progress-bar w-100 bg-progress progress-bar-striped progress-bar-animated"
            >
              Node.Js
            </div>
          </div>
          <div id="skills" class="progress mt-4">
            <div
              id="skills"
              className="progress-bar w-100 bg-progress progress-bar-striped progress-bar-animated"
            >
              React.js
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
