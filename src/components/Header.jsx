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
        <Link to="/">
          <li>Home</li>
        </Link>

        <Link to="/about">
          <li>About</li>
        </Link>

        <Link to="/contact">
          <li>Contact Us</li>
        </Link>
      </ul>
    </div>
  );
};

export default Header;
