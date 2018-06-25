import React, { Component } from "react";

class Spaceship extends Component {
  render() {
    return (
      <div>
        <div>{this.props.name}</div>
        <div>{this.props.speed}</div>
        <div>{this.props.hasRockets}</div>
        <ul>{this.props.colors.map(color => <li>{color}</li>)}</ul>
      </div>
    );
  }
}

Spaceship.defaultProps = {
  speed: "slow",
  hasRockets: false,
  colors: ["black", "red"]
};

export default Spaceship;
