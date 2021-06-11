//destructuracion de arrays
//o
//asignacion destructurantes

const personajes = ['goku', 'vegeta', 'nemo'];
// console.log(personajes[0]);
// console.log(personajes[1]);
// console.log(personajes[2]);

//ignora los primeros 2 elementos de array y solo nos trae el p3 osea nemo
const [, ,p3] = personajes;
console.log(p3);

//otra destructuracion
const retornaArreglo = () => {
  return ['ABC', 123];
}
const [letras, numeros] = retornaArreglo();
console.log(letras, numeros);

const ejemplo = (valor) => {
  return [valor, ()=>{console.log('Hola Mundo')}];
}

//1.- El primer valor del arreglo se llamara nombre
//2.- Y el segundo se llamara setNombre
const [nombre, setNombre] = ejemplo('Goku');
console.log(nombre);
setNombre();
//retorna la funcion y entra al valor que retorna la funcion con los ()
