class IdSearch extends React.Component {
  readId = event => {
    event.preventDefault();
    let input = document.getElementById("pokemonID").value;

    fetch(`/api/pokemon/id/${input}`)
      .then(res => {
        return res.json();
      })
      .then(results => {
        this.props.callback(results);
      });
  };

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
