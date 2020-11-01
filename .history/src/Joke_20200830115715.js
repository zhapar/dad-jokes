import React, { Component } from "react";
import "./Joke.css";

class Joke extends Component {
  getColor() {
    if (this.props.votes >= 15) {
      return "#4caf50";
    } else if (this.props.votes >= 12) {
      return "#8bc34a";
    } else if (this.props.votes >= 9) {
      return "#cddc39";
    } else if (this.props.votes >= 6) {
      return "#ffeb3b";
    } else if (this.props.votes >= 3) {
      return "#ffc107";
    } else if (this.props.votes >= 0) {
      return "#ff9800";
    } else {
      return "#f44336";
    }
  }

  render() {
    return (
      <div className="Joke">
        <div className="Joke-buttons">
          <i className="fas fa-arrow-up" onClick={this.props.upvote}></i>
          <span className="Joke-votes">{this.props.votes}</span>
          <i className="fas fa-arrow-down" onClick={this.props.downvote}></i>
        </div>
        <div className="Joke-text">{this.props.text}</div>
        <div className="Joke-smiley">
          <i
            class="em em-rolling_on_the_floor_laughing"
            aria-role="presentation"
            aria-label="ROLLING ON THE FLOOR LAUGHING"
          ></i>
        </div>
      </div>
    );
  }
}

export default Joke;
