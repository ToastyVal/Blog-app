import React from "react";
import { renderMatches } from "react-router-dom";
import yeehaw from "../../assets/yeehaw.wav";
import "./search.css";

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      button: 0,
    };
  }
  button() {
    new Audio(yeehaw).play();
  }

  render() {
    return (
      <>
        <form id="searchBar">
          <label for="searchCowFolk">Search</label>
          <input
            type="text"
            placeholder="Search cowfolk"
            id="searchCowFolk"
          ></input>
          <button onClick={this.button.bind(this)}>Yeehaw!</button>
        </form>
      </>
    );
  }
}

export default Search;
