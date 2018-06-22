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
    highScore: 0,
    message: "Click a Pic to Start"
  }

  componentDidMount() {
    console.log(this.state.pictureObj);
  }

  imageClicked = (id, clicked) => {
    console.log("CLICKED");
    console.log(this.state.pictureObj);
    if(clicked) {
      if(this.state.score > this.state.highScore) {
        this.setState({highScore: this.state.score});
      }
      this.setState({message: "Wrong Guess"});
      this.shufflePics(this.state.pictureObj);
      this.setState({score: 0});
    } else {
      this.setState({score: this.state.score + 1});
      this.setState({message: "Correct Keep Going"});
      this.shufflePics(this.state.pictureObj);
    }
  }

  shufflePics = arrayOfPicObjs => {
    for (let i = arrayOfPicObjs.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = arrayOfPicObjs[i];
      arrayOfPicObjs[i] = arrayOfPicObjs[j];
      arrayOfPicObjs[j] = temp;
    }    
  };

  render() {
    return (
      <div className="App">
        <NavBar 
          score={this.state.score}
          message={this.state.message}
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