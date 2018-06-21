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

  render() {
    return (
      <div className="App">
        <NavBar />
        <Header />
        {this.state.pictures.map(picture => (
          <ImageCard
            key={picture.id}
            image={picture.image}
          />
        ))}
      </div>
    );
  }
}

export default App;