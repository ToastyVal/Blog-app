import React from "react";
//use npm add use-sound in the terminal
// import useSound from 'use-useSound';
//import sounds from assets
import yeehaw from '../assets/yeehaw.wav'
import nope from '../assets/nope.ogg'



// extends Component which means it has to have a render method. To access props use "this.property"
class LikeButton extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        likes: 0,
        dislikes: 0
      };
    }
//function to call yeehaw sound
// Increments like by 1
    like() {
        this.setState({ likes: this.state.likes + 1 })
        new Audio(yeehaw).play()
    }
//function to call nope sound
// Increments dislikes by 1
    dislike() {
        this.setState({ dislikes: this.state.dislikes + 1 })
        new Audio(nope).play()
    }
  
  // onClick calls the dislike and like functions above.
    render() {
        return (
          <div>
            <button onClick={this.like.bind(this)}>Purdy! &#128077; {this.state.likes}</button>
            <button onClick={this.dislike.bind(this)}>What in tarnation!&#x1f44e; {this.state.dislikes}</button>
          </div>
        );
      }
  }

  export default LikeButton;