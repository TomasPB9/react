//destructuracion objetos
//o
//asginacion desestructuracion

const persona = {
  nombre : 'Carlos',
  edad: 34,
  clave: 'Cruz azul',
};

//se obtiene cada propiedad que indiquemos del objeto persona
const {nombre, edad, clave} = persona;
console.log(nombre);
console.log(edad);
console.log(clave);

//obtiene valores de las propiedades del objeto persona y los guarda en otras variables con distintos nombres
const {
//llaveDelObjeto: nuevaVariableConElValorDeEseObjeto
  nombre:miNombre,
  edad:miEdad,
  clave:miClave
} = persona ;

console.log(miNombre);
console.log(miEdad);
console.log(miClave);

// console.log(persona.nombre);
// console.log(persona.edad);
// console.log(persona.clave);

const retornaPersona = (usuario) => {
  const { nombre, edad, clave } = usuario;
  console.log(nombre, edad, clave);
  console.log(usuario);
}
retornaPersona(persona)

//desestructuracion directamente en el argumento
const retornaPersona2 = ({nombre, edad}) => {
  console.log(nombre, edad);
}

retornaPersona2(persona);

//desestructuracion directamente en el argumento y valores por defecto
const retornaPersona3 = ({ nombre, edad, rango = 'Delantero' }) => {
  console.log(nombre, edad, rango);
}
retornaPersona3(persona);

//otro ejemplo der asginacion destructurativa
const ejemplo = ({ clave, nombre, edad, rango = 'Delantero' }) => {
  return {
    nombreClave: clave,
    anios: edad,
    latlng: {
      lat:123.4343,
      lng:345.345
    }
  }
}

//extrae valores de objetos anidados
const {nombreClave, anios, latlng: {lat, lng}} = ejemplo(persona);
console.log(nombreClave, anios);
//valores de objetos anidados
console.log(lat , lng);