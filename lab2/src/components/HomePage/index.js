import React from "react";

class HomePage extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello, my name is {this.props.firstName}.</h1>
      </div>
    );
  }
}

export default HomePage;
