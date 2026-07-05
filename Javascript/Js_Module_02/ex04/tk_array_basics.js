const array = ['Tomate', 'Lechuga', 'Zanahoria'];
const array2 = new Array(1,2,3);

console.log(`Array inicial: [ '${array.join("', '")}' ]`);
console.log(`Array constructor: [ '${array2.join("', '")}' ]`);
console.log(`Índice 0: ${array[0]}\n`);

array[1] = 'Pimiento';
console.log(`Modificado: [ '${array.join("', '")}' ]`);
array.push('Pepino');
console.log(`Tras push: [ '${array.join("', '")}' ]\n`);
array.pop();

array.splice(1, 0, "Manzana");
console.log(`Añadir: [ '${array.join("', '")}' ]`);
array.splice(1,1);
console.log(`Eliminar posición concreta: [ '${array.join("', '")}' ]`);
console.log(`Longitud: ${array.length}`);

