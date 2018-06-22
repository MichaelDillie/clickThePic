import React from "react";

const NavBar = props => (
  <nav className="navbar fixed-top navbar navbar-dark bg-dark">
    <span>Click The Pic</span>
    <span>
      <span>Score: {props.score}</span>
      <span>   |    </span>
      <span>High Score: {props.highScore}</span>
    </span>
  </nav>
);

export default NavBar;