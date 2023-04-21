import React, { Component } from "react";
class Cat extends Component {
  render() {
    console.log(this.props);
    const { mousePosition } = this.props;
    return (
      <React.Fragment>
        <img
          src={require("../images/3.png")}
          style={{
            position: "absolute",
            left: mousePosition.x,
            top: mousePosition.y,
          }}
          width="50"
          height="50"
        />
      </React.Fragment>
    );
  }
}

export default Cat;
