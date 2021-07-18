import React from "react";
import logo from "../images/Rick_and_Morty_-_logo.png";

const Header = () => {
  return (
    <>
      <h1 className="noSee">RICK Y MORTY</h1>
      <img className="log" src={logo} alt="Logo" title="Logo"></img>
    </>
  );
};

export default Header;
