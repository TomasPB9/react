//import, export y funciones de arreglos

import heroes from "./data/heroes";

//using find

const getHeroeById = (id) => {
  return heroes.find((heroe) => heroe.id === id);
}

console.log(getHeroeById(2));

//using filter
const getHeroeByOwner = (owner) => {
  return heroes.filter(heroe => heroe.owner===owner)
}

console.log(getHeroeByOwner('DC'));