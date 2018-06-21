import React from "react";

class NavBar extends React.Component {

  state = {
    score: 0,
    highScore: 0
  };

  render() {
    return (
      <nav className="navbar fixed-top navbar navbar-dark bg-dark">
        <span>Click The Pic</span>
        <span>
          <span>Score: {this.state.score}</span>
          <span>   |    </span>
          <span>High Score: {this.state.highScore}</span>
        </span>
      </nav>
    );
  };

};

export default NavBar;