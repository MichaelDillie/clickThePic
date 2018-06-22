import React from "react";

class Header extends React.Component {

  render() {
    return (
      <div className="header-wrapper">
        <h1 className="start-game-header-text">Click On An Image To Start</h1>
        <br />
        <h4>The goal of the game is to click on all of the pictures but no more than once</h4>
      </div>
    );
  }

}

export default Header;