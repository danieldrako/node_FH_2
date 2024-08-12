const {getPokemonById} = require('./js-foundation/06-promises');

getPokemonById(1)
  .then((pokemon) => console.log({pokemon}))
  .catch((err) => console.log('Intente de nuevo'))
  .finally(() => console.log('Finalmente'));
