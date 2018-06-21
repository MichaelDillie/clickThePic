import React, { Component } from 'react';
import './App.css';
import NavBar from "./components/NavBar.js";
import Header from "./components/Header.js";
import ImageCard from "./components/ImageCard.js";

import pictures from "./pictures.json";

class App extends Component {

  state = {
    pictures
  }  

  imageClicked = id => {
    console.log(id);
  }

  render() {
    return (
      <div className="App">
        <NavBar />
        <Header />
        {this.state.pictures.map(picture => (
          <ImageCard
            imageClicked={this.imageClicked}
            key={picture.id}
            id={picture.id}
            image={picture.image}
            clicked={picture.clicked}
          />
        ))}
      </div>
    );
  }
}

export default App;