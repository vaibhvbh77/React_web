import React from "react";
import { Link } from "react-router-dom";
import Title from "./Title";
const Header = () => {
  return (
    <div className="header">
      <Title />
      <br />
      <div className="title"> Welcome to Swiggy !</div>
      <ul className="nav">
        <li>Home</li>
        <li>About</li>
        <li>Contact Us</li>
      </ul>
    </div>
  );
};

export default Header;
