import React, { Component } from "react";
import Cat from "./Cat";

class MouseWithCat extends Component {
  state = {
    x: 0,
    y: 0,
  };
  render() {
    return (
      <React.Fragment>
        <div style={{ height: "100vh" }} onMouseMove={this.handleMove}>
          <Cat mousePosition={this.state} />
        </div>
      </React.Fragment>
    );
  }

  handleMove = (event) => {
    this.setState({ x: event.clientX, y: event.clientY });
  };
}

export default MouseWithCat;
