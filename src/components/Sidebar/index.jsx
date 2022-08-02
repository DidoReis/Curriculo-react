import React from "react";

import "../Sidebar/styles.css";
import Contact from "./Contact";
import Image from "./Imagem";
import Name from "./Name";
import Profession from "./Profession";

export default function Sidebar() {
  return (
    <div id="sidebar" className="linha col-12 col-md-4 col-lg-4">
      <aside className="sidebar text-center px-2 px-md-3 px-lg-5 py-4 py-md-5 rounded">
        <div className="sticky-wrap">
          <div className="user-info" id="user-info">
            <div className="about">
              <Image />
              <Name />
              <Profession />
              <Contact />
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
}
