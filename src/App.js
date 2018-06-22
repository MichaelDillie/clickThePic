import React, { Component } from 'react';
import './App.css';
import NavBar from "./components/NavBar.js";
import Header from "./components/Header.js";
import ImageCard from "./components/ImageCard.js";

import pictures from "./pictures.json";

class App extends Component {

  state = {
    pictureObj: pictures,
    score: 0,
    highScore: 0
  }

  imageClicked = (id, clicked) => {
    if(clicked) {
      console.log("Loss");
      if(this.state.score > this.state.highScore) {
        this.setState({highScore: this.state.score});
      }
    } else {
      console.log("Good, Now set clicked to true");
      this.setState({ score: this.state.score + 1});
      this.shufflePics(this.state.pictureObj);
    }
  }

  shufflePics = arr => {
    for (let i = arr.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }    
  };

  render() {
    return (
      <div className="App">
        <NavBar 
          score={this.state.score}
          highScore={this.state.highScore}
        />
        <Header />
        <main className="container">
        {this.state.pictureObj.map(picture => (
          <ImageCard
            imageClicked={this.imageClicked}
            key={picture.id}
            id={picture.id}
            image={picture.image}
            clicked={picture.clicked}
          />
        ))}
        </main>
      </div>
    );
  }
}

export default App;