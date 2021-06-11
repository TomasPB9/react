//objetos literales

const persona = {
  nombre: 'Carlos',
  lastName: 'Bolio',
  edad: 45,
  direccion: {
    ciudad: 'Celaya',
    pais: 'Mexico',
    cp: '56040'
  }
};

//crea nuevo objeto con el nombre de persona del objeto de persona creado anteriormente
// console.log({ persona });
console.log(persona);

//clona objeto (copia referencia osea su espacio en memoria de ese objeto)
const persona2 = persona;
persona2.nombre = 'Tomas';

//plancha valores por la copia de la referencia
console.log(persona);
console.log(persona2);

//operador spread (extrae propiedades y las asigna al nuevo objeto que estoy creando)
const persona3 = {...persona};
console.log(persona3);
