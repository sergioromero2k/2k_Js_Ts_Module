/**
 *
 */
function tk_counter() {
  let contador = 0;
  return function aumentar() {
    contador += 1;
    return contador;
  };
}

let contador1 = tk_counter();
let contador2 = tk_counter();
console.log(`Contador 1: ${contador1()}`);
console.log(`Contador 1: ${contador1()}`);
console.log(`Contador 1: ${contador1()}`);
console.log("=============");
console.log(`Contador 2: ${contador2()}`);
console.log("=============");
console.log(`Contador 1: ${contador1()}`);
console.log(`Contador 1: ${contador1()}`);
