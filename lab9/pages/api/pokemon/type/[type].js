import getPokemon from "json-pokemon/getPokemon";

export default (req, res) => {
  let result = { error: "Could not find type." };

  console.log(pokemon);
  if (pokemon !== null) {
    result = pokemon;
  }

  res.json(result);
};
