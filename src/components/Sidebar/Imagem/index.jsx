import React from "react";
import Img from "../../../assets/image/profile.png";

import "../Imagem/styles.css";

export default function Image() {
  return (
    <img
      id="sidebar"
      src={Img}
      className="profile-pic  rounded-circle"
      alt="Profile"
    />
  );
}
