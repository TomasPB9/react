//template strings

const name = 'Carlos';
const lastName = 'Posada';

const nameComplete = `
${name}
${lastName}
`;

console.log(nameComplete);

function getSaludo(name) {
  return 'Hola ' + name;
}

console.log(`Este es un texto: ${ getSaludo(name)}`);