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

    let input = document
      .getElementById("inputValue")
      .value.replace(/[^a-zA-Z ]/g, "");

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
              define: [""],
            });
          }
        }
      );
  };

  render() {
    return (
      <div className="App">
        <div className="app-container">
          <div className="header-elements">
            <h1>Wordbook</h1>
            <p>
              Search for the definition of a word, or hit the randomzier to
              learn some new ones.
            </p>
          </div>
          <Search
            className="main-1"
            searchValue={this.searcher}
            random={this.randomizer}
            search={this.searcher}
          />
          <Results
            className="main-2"
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
