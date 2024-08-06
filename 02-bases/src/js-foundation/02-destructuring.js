console.log(process.env);


const { SHELL, HOMEBREW_CELLAR } = process.env

console.table({SHELL,HOMEBREW_CELLAR});

const characters = ['Flash', 'Superman', 'Batman'];
const [, __, batman] = characters;

console.log(batman)