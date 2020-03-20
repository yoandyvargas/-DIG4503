import NameSearch from "../components/NameSearch";
import IdSearch from "../components/IdSearch";

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pokemon: []
    };
  }

  pokemonResult = results => {
    this.setState({ pokemon: results });
  };

  pokemonResultArea() {
    if (this.state.pokemon.error) {
      return <h1>{this.state.pokemon.error}</h1>;
    } else {
      return <h1>{this.state.pokemon.name}</h1>;
    }
  }

  render() {
    return (
      <div>
        <NameSearch callback={this.pokemonResult} />
        <IdSearch callback={this.pokemonResult} />
        {this.pokemonResultArea()}
      </div>
    );
  }
}

export default Home;
