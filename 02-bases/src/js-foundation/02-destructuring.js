console.log(process.env);


const { SHELL, HOMEBREW_CELLAR } = process.env

console.table({SHELL,HOMEBREW_CELLAR});

const characters = ['Flash', 'Superman', 'WonderWoman','Batman'];
const [, ,__, batman] = characters;

// console.log(batman);