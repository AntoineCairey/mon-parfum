import React from "react";
import { Link } from "react-router-dom";
import "./header.css";
import Mer from "../assets/mer.png";
import Fleur from "../assets/fleur.png";
import Group from "../assets/Group.png";
import Fragrance from "../assets/Fragrance.png";

export default function Header() {
  return (
    <div className="header-container">
      <div className="logo-container">
        <Link to="/" className="logo">
          <img src={Fragrance} alt="logooo" />
        </Link>
      </div>
      <div className="images-header">
        <img className="sea" src={Mer} alt="" />
        <img className="flower" src={Fleur} alt="" />
        <img className="mountain" src={Group} alt="" />
      </div>
    </div>
  );
}
