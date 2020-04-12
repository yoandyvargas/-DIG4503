import React from "react";
import Results from "../src/components/Results";
import Search from "../src/components/Search";
var Owlbot = require("owlbot-js");
var client = Owlbot("cc79e2f4add1dac1bdd8949cbfb560bd3bc12ba5");
var wordsData = require("./words.json");

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      words: "",
      pronunciation: "",
      define: [],
      hasError: "",
    };
  }

  componentDidMount() {
    window.addEventListener("load", this.randomizer);
  }

  componentWillUnmount() {
    window.removeEventListener("load", this.randomizer);
  }

  randomizer = () => {
    let result = Math.floor(Math.random() * 2466);
    const newWord = wordsData.data[`${result}`];
    let input = newWord;

    client
      .define(`${input}`)
      .then((res) => {
        return res;
      })
      .then(
        (results) => {
          this.setState({
            words: results.word,
            pronunciation: results.pronunciation,
            define: results.definitions,
            hasError: "",
          });
        },
        (error) => {
          if (error) {
            this.setState({
              hasError: "Word could not be found, try another.",
              words: "",
              pronunciation: "",
              define: [],
            });
          }
        }
      );
  };

  searcher = (event) => {
    event.preventDefault();

    let input = document.getElementById("inputValue").value;

    client
      .define(`${input}`)
      .then((res) => {
        return res;
      })
      .then(
        (results) => {
          console.log(results.words);
          this.setState({
            words: results.word,
            pronunciation: results.pronunciation,
            define: results.definitions,
            hasError: "",
          });
        },
        (error) => {
          if (error) {
            this.setState({
              hasError: "Word could not be found, try another.",
              words: "",
              pronunciation: "",
              define: [],
            });
          }
        }
      );
  };

  /*            <form onSubmit={this.testing}>
              <input type="text" id="testing"></input>
              <button>Get Weather</button>
            </form>
            <h1>hi</h1> <p>{this.state.words}</p>
            <ul>
              {this.state.define.map((item, index) => (
                <li key={item.definition}>
                  <p>
                    {item.definition} {item.emoji}
                  </p>
                  <p>{item.type}</p>
                  <p>{item.example}</p>
                  <img src={item.image_url} />
                </li>
              ))}
            </ul>
            <p>{this.state.pronunciation}</p>




          <form onSubmit={this.testing}>
            <input type="text" id="testing"></input>
            <button>Get Weather</button>
          </form>



            */
  render() {
    return (
      <div className="App">
        <div>
          <Search searchValue={this.searcher} random={this.randomizer} />
          <Results
            word={this.state.words}
            error={this.state.hasError}
            pronunciation={this.state.pronunciation}
            define={this.state.define}
          />
        </div>
      </div>
    );
  }
}

export default App;
