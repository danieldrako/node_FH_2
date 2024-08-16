const { http } = require("../plugins/http-client.plugin");


const getPokemonById = async (id) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`

  const pokemon = await http.get(url);

  // throw new Error('Pokmeon no existe');

  return pokemon.name

  // return fetch(url)
  // .then( (response) =>  response.json())
  // .then( (pokemon) => pokemon.name);

}


module.exports = {
  getPokemonById,
};





