// === 1. Destructuring de array ===
console.log("=== Array ===");
const verduras = ["Tomate", "Lechuga"];
const [primero, segundo] = verduras;
console.log(`Primero: ${primero} | Segundo: ${segundo}`);

// === 2. Destructuring de objeto ===
console.log("\n=== Objeto ===");
const pod = { name: "api-service", memory: 85 };
const { name, memory } = pod;
console.log(`Nombre: ${name} | Memoria: ${memory}`);

// === 3. Destructuring en parámetros de función ===
console.log("\n=== En parámetros ===");
function mostrarPod({ name, memory }) {
  console.log(`Pod: ${name} consume ${memory}% de memoria`);
}
mostrarPod(pod);

// === 4. Rest en destructuring ===
console.log("\n=== Rest ===");
const verdurasRest = ["Tomate", "Lechuga", "Zanahoria", "Pepino"];
const [primeroRest, ...resto] = verdurasRest;
console.log(`Primero: ${primeroRest}`);
console.log("Resto:", resto);

// === 5. Alias (renombrar variables) ===
console.log("\n=== Alias ===");
const podAlias = { name: "auth-service", memory: 40 };
const { name: nombrePod, memory: memoriaPod } = podAlias;
console.log(`Alias -> nombrePod: ${nombrePod} | memoriaPod: ${memoriaPod}`);

// === 6. Valores por defecto ===
console.log("\n=== Valores por defecto ===");
const podSinReplicas = { name: "cache", memory: 60 };
const { replicas = 1 } = podSinReplicas;
console.log(`Replicas (por defecto): ${replicas}`);