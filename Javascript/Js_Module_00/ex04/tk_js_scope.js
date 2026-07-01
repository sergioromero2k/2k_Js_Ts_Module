/**
 * 
 */
function demostrarScope() {
  let externa = "Hola";
  console.log("=== Demostración de Scope ===");
  console.log("1. Variable externa ANTES del bloque: " + externa + "\n");
  { 
    console.log("--- Entrando al bloque ---");
    externa = "Hola con sueño...";
    console.log("   (modificando variable externa...)");
    console.log("   (creando variable interna con let...)");
    let interna = "adios";
    console.log("--- Saliendo del bloque ---");
  }
  console.log("2. Variable externa DESPUÉS del bloque: " + externa + "\n");
  console.log("3. Intentando acceder a variable interna fuera del bloque...");
  try {
    console.log(interna);
  } catch (error) {
    console.log("   Error capturado: ", error.message);
    console.log("   Confirmado: let respeta el scope de bloque");
  }
}

demostrarScope();