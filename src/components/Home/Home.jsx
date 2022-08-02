import React, { useEffect } from "react";
import "./home.css";

import Sidebar from "../Sidebar/index";
import Main from "../Main";
import scrollreveal from "scrollreveal";

export default function Home() {
  useEffect(() => {
    const Animations = () => {
      const sr = scrollreveal({
        origin: "bottom",
        distance: "90px",
        duration: 2000,
        reset: false,
      });

      sr.reveal(
        `#sidebar, #maincontent ,#education, #certification, #experience, #skills`,
        {
          opacity: 0,
          interval: 200,
        }
      );
    };

    Animations();
  });
  return (
    <div className="container my-3 my-md-5">
      <div className="row">
        <Sidebar />
        <Main />
      </div>
    </div>
  );
}
