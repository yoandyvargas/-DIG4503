import React from "react";

class IdSearch extends React.Component {
  readId(event) {
    event.preventDefault();

    let input = document.getElementById("pokemonID").value;

    fetch(`/ID/${input}`)
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
        <form onSubmit={this.readId}>
          <input type="text" id="pokemonID" defaultValue="Enter Pokemon ID" />
          <button>Enter</button>
        </form>
      </div>
    );
  }
}

export default IdSearch;
