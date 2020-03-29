class IdSearch extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pokemon: []
    };
  }
  readId = event => {
    event.preventDefault();
    let input = document.getElementById("pokemonID").value;

    fetch(`/api/pokemon/id/${input}`)
      .then(res => {
        return res.json();
      })
      .then(results => {
        this.setState({ pokemon: results });
      });
  };

  pokemonResultArea() {
    if (this.state.pokemon.error) {
      return <h1>{this.state.pokemon.error}</h1>;
    } else {
      return <h1>Name: {this.state.pokemon.name}</h1>;
    }
  }
  render() {
    return (
      <div>
        <form onSubmit={this.readId}>
          <input type="text" id="pokemonID" defaultValue="Enter Pokemon ID" />
          <button>Enter</button>
        </form>
        {this.pokemonResultArea()}
      </div>
    );
  }
}
export default IdSearch;
