//function

const saludar = function  (nombre) {
  return `Hola, ${nombre}`;
}

const saludar2 = (nombre)  => {
  return `Hola, ${nombre}`;
}

const saludar3 = (nombre)  =>
  `Hola, ${nombre}`;

const saludar4 = ()  =>
  `Hola Mundo !`;


// console.log(saludar('Carlos'));
console.log(saludar);
console.log(saludar2('Carlos'));
console.log(saludar3('Tomas'));
console.log(saludar4());

const getUser = () => {
  return {
    uid:'ABC123',
    userName: 'Carlos',
  }
}

//regresa el object sin tener que espicificar la palabra return
const getUser2 = () =>
  ({
    uid:'ABC123',
    userName: 'Carlos',
  })

console.log(getUser());
console.log(getUser2());

//1.-transormar a arrow function
//2.- retornar objeto implicito (sin la palabra return)
function getUserActive(nombre) {
  return {
    uid: 'ABC567',
    username: nombre,
  }
};

const userActive = getUserActive('Tomas');
console.log(userActive);

//solution
const getUserActive2 = (nombre) =>
  ({
    uid: 'ABC900',
    username: nombre,
  });

console.log(getUserActive2('Bolios'));