class TypeSearch extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pokemon: []
    };
  }
  readType = event => {
    event.preventDefault();
    let input = document.getElementById("pokemonType").value;

    fetch(`/api/pokemon/type/${input}`)
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
      this.items = this.state.pokemon.map((item, key) => (
        <li key={item.id}>{item.name}</li>
      ));
      return <p>{this.items}</p>;
    }
  }
  render() {
    return (
      <div>
        <form onSubmit={this.readType}>
          <input
            type="text"
            id="pokemonType"
            defaultValue="Enter Pokemon Type"
          />
          <button>Enter</button>
        </form>
        {this.pokemonResultArea()}
      </div>
    );
  }
}
export default TypeSearch;
