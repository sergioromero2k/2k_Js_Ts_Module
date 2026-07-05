console.log(`Declaración antes de definirla: ${sumar(7,8)} `);
try {
    console.log(sum(5, 10));
} catch (error) {
    console.log(`Expresión antes de definirla: ${error.name} - ${error.message}`);
}
/**
 * La declaración de función (function declaration) se eleva
 * completamente durante el hoisting, por lo que puede invocarse
 * antes de aparecer en el código.
 */
function sumar(a, b) {
    return a + b;
}
/**
 * La expresión de función (function expression) se asigna a una
 * variable declarada con const. Aunque la variable se eleva,
 * permanece en la Temporal Dead Zone (TDZ) hasta su inicialización.
 * Intentar usarla antes produce un ReferenceError.
 */
const sum = (a,b) => a+b;

console.log(`\nDeclaración después: ${sumar(7,8)}`);
console.log(`Expresión después: ${sum(5,10)}`);
