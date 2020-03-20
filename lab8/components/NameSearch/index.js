class NameSearch extends React.Component {
  readName = event => {
    event.preventDefault();
    let input = document.getElementById("pokemonName").value;

    fetch(`/api/pokemon/name/${input}`)
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
