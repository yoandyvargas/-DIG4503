import React from "react";

class Search extends React.Component {
  render() {
    return (
      <div>
        <form onSubmit={this.props.searchValue}>
          <input type="text" id="inputValue"></input>
          <button>Search</button>
        </form>
        <button onClick={this.props.random}>random</button>
      </div>
    );
  }
}

export default Search;
