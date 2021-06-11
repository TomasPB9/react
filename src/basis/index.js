//arrays
const array= [1,2,3,4];
// array.push(1);
// array.push(2);
// array.push(3);
// array.push(4);

//operador spread (extrae informacion y le une el nuevo elemento 5)
let array2 = [...array, 5]

// let array2 = array;
// array2.push(5);

//map crea un nuevo array, por lo tanto no afecta el array2
const array3 = array2.map(function(number) {
  return number*2;
});

console.log(array);
console.log(array2);
console.log(array3);