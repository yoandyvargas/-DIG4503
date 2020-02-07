const express = require("express");
const chalk = require("chalk");
const pokemons = require("json-pokemon");
const app = express();
const port = 80;
const pokemon = pokemons[0];

app.get("/id/:id", (req, res) => {
  let result = { error: "Invalid route." };
  pokemons.forEach(value => {
    if (value.id == req.params.id) {
      res.send(value);
      console.log(chalk.green(req.path));
      result = value;
    }
  });
  if (result.error) {
    console.log(chalk.red(req.path));
    res.send(result);
  }
});

app.get("/name/:name", (req, res) => {
  let result = { error: "Invalid route." };
  pokemons.forEach(value => {
    if (value.name == req.params.name) {
      res.send(value);
      console.log(chalk.green(req.path));
      result = value;
    }
  });
  if (result.error) {
    console.log(chalk.red(req.path));
    res.send(result);
  }
});

app.listen(port, () => console.log(`Server running on ${port}`));
