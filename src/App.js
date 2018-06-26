import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Nav from "./components/Nav";
import Container from "./components/Container";
import Column from "./components/Column";
import Row from "./components/Row";




import friends from "./friends.json";
import "./App.css";



//Randomize existing array

let shuffle = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1)); //make sure that 0 is not an option
    [array[i], array[j]] = [array[j], array[i]];
  }
  console.log(array);
  return array;
  
}



class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends: friends,
    clicked: [],
    currentScore: 0,
    topScore: 0,
    winlose: ""
  };


  //shuffles clickedArray and modifies the indices to be random
 
handleShuffle = () => {
    let shuffledFriends = shuffle(friends);
    this.setState({ friends: shuffledFriends });
  };

//Score handler function for when a tile is clicked

scoreHandler = () => {
    const newScore = this.state.currentScore +1;
    this.setState({
      currentScore: newScore,
      winlose: ""
    
    });
    
    if (newScore >= this.state.topScore) {
      this.setState({ topScore: newScore });
    } 
  }

// Runs if all 12 tiles were guessed correctly

winCheck = () => {
  if(this.state.currentScore >= 11) {
    this.setState({winlose: "Aye It's Lit!",
    currentScore: 0,
    topScore: 0,
    clicked: []
  
  });    
  }  
}

//Triggers when else statement in clickedFriend occurs

lose = () => {
    this.setState({winlose: "You Lose!"});
    this.tryAgain();
  

//Changes state back to it's original settings (except TopScore) and shuffles the board
}

tryAgain = () => {
    this.setState({
      currentScore: 0,
      topScore: this.state.topScore,
      clicked: []
    });
    this.handleShuffle();
  }
 

  //On click, checks to see if an id exists in the clicked Array. this.state.clicked.indexOf(id) returns '-1'-> 
  //which means that the selected id is not in the Array hence the game can continue. 
  //Else: If '0' this means that the id exists in the array, signaling the end of the game
  clickedFriend = id => {
   console.log(this.state.clicked.indexOf(id))
    if (this.state.clicked.indexOf(id) === -1) {
      this.scoreHandler();
      this.setState({ 
        winlose: "",
        clicked: this.state.clicked.concat(id) 
      });
      this.winCheck();
      this.handleShuffle();
    } else {
      this.lose();
    }
  };


  

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title/> 
        <Nav
          score={this.state.currentScore}
          winlose={this.state.winlose}
          topScore={this.state.topScore}
        />

        <Container>
        <Row>
        {this.state.friends.map(friend => (
          <Column size="md-3 sm-6">
          <FriendCard
            clickedFriend={this.clickedFriend}
            id={friend.id}
            key={friend.id}
            image={friend.image}
          />
          </Column>
        ))}
        </Row>
        </Container>
      </Wrapper>
    );
  }
}

export default App;
