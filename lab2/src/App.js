import React from "react";
import HomePage from "./components/HomePage/index.js";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <HomePage firstName="Yoandy" />
      </div>
    );
  }
}

export default App;
