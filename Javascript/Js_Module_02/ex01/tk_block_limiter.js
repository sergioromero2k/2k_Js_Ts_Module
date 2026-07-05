/**
 * 
 */
function probando() {
    if (true) {
        var x = "soy var, escapé";
        let y = "soy let, no escapé";
    }

    console.log("var fuera del bloque:", x);

    try {
        console.log("let fuera del bloque:", y);
    } catch (error) {
        console.log("let fuera del bloque:", error.name + " - " + error.message);
    }

    console.log("Confirmado: var ignora el bloque, let lo respeta");
}

probando();