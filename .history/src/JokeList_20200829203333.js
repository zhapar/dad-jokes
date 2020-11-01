import React, { Component } from "react";

class JokeList extends Component {
  static defaultProps = {
    numJokesToGet: 10,
  };

  componentDidMount() {}
  render() {
    return <h1>JokeList!</h1>;
  }
}

export default JokeList;
