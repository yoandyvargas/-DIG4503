import getPokemon from "json-pokemon/getPokemon";

export default (req, res) => {
  let result = { error: "Could not find type." };

  let pokemon = getPokemon().filter(function(search) {
    if (search.typeList.includes(req.query.type)) {
      return search;
    } else {
      return 0;
    }
  });

  if (pokemon != 0) {
    result = pokemon;
  }

  res.json(result);
};
