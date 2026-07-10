const objetoA = {
  Pod: "api-service",
  Memoria: "85%"
};
const objetoB = {
  Pod: "auth-service",
  Memoria: "40%"
};

const objetoC = {
  Pod: "db-proxy",
  Memoria: "92%"
};

/**
 *
 */
function functionExterna(){
  console.log(`Pod: ${this.Pod} | Memoria: ${this.Memoria}`);
}

console.log("=== call ===");
functionExterna.call(objetoA);
console.log();

console.log("=== apply ===");
functionExterna.apply(objetoB);
console.log();

console.log("=== bind ===");
console.log("Función vinculada a db-proxy");
const functionBind = functionExterna.bind(objetoC);
functionBind();