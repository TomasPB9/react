//promesas (son por naturaleza tareas asincronas)
//primero se ejectua todo el codigo que es sincrono(secuencial) y cuando termina con lo sincrono
//ejecuta las promises

import {getHeroeById, getHeroeByOwner} from './basis/import-export';

// const promesa = new Promise( (resolve, reject) => {
//   setTimeout( () => {
//     //termina la tarea y llama el resolve y notifica a todas las persona que esten esuchando el then
//     //y se ejecuta
//     const p1 = getHeroeById(2);
//     //resolve transfiere el valor de los argumentos al then
//     resolve( p1 );
//     // reject(' No se pudo encontar el heroe ');
//   }, 2000);
// });

// //maneja el resolve (si se soluciono bien)
// promesa.then( (p1) => {
//   console.log('Heroe', p1);
// })
// //maneja el reject (si se encuentra un error)
// .catch(error => console.warn(error));

const getHeroeByIdAsync = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      //termina la tarea y llama el resolve y notifica a todas las persona que esten esuchando el then
      //y se ejecuta
      const p1 = getHeroeById(id);
      //resolve transfiere el valor de los argumentos al then
      p1  ? resolve(p1) : reject('No se encontro el heroe');
    }, 2000);
  });
}

getHeroeByIdAsync(1)
  // .then(heroe => console.log('Heroe', heroe))
  //hace exactamente lo mismo porque console.log es una funcion que recibe como argumento el primer argumento
  //que sea el que reciba el then
  .then( console.log)
  // .catch(error => console.warn(error))
  //hace exactamente lo mismo porque console.warn es una funcion que recibe como argumento el primer argumento
  //que sea el que reciba el catch
  .catch( console.warn);