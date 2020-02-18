import React from "react";

class NameSearch extends React.Component {
  readName(event) {
    event.preventDefault();

    let input = document.getElementById("pokemonName").value;

    fetch(`/name/${input}`)
      .then(res => {
        return res.json();
      })
      .then(results => {
        let update = document.getElementById("reportingArea");
        if (results.error) {
          update.innerHTML = results.error;
        } else {
          update.innerHTML = results.name;
        }
      });
  }
  render() {
    return (
      <div>
        <form onSubmit={this.readName}>
          <input
            type="text"
            id="pokemonName"
            defaultValue="Enter Pokemon Name"
          />
          <button>Enter</button>
        </form>
      </div>
    );
  }
}

export default NameSearch;
