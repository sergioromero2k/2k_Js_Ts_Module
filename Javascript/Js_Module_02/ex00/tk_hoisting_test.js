/**
* las declaraciones de funciones son elevados(hoisting),
* por lo que pueden llamarse antes de aparecer en el código.
*/
console.log("Función ejecutada antes de su declaración: " + probando())



/**
 * Las variables declaradas con var también son elevadas,
 * pero únicamente su declaración. Su valor inicial es undefined.
 */
console.log("var antes de declarar:", x);

/**
 * Las variables declaradas con const se elevan, pero permanecen en la
 * Temporal Dead Zone(TDZ) hasta que se ejecute su declaración.
 * Acceder a ellas antes produce en ReferenceError.
 */
try {
    console.log("const antes de declarar: ", y)
} catch (error) {
    console.log(
        "const antes de declarar:",
        error.name + " - " + error.mesage
    );
}

var x = 10;
const y = 20;

function probando() {
    return "2K";
}
