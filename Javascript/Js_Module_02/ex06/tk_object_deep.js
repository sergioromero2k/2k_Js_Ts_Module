const pod = {
    name: "api_service",
    memory: 90,
    replicas: 3,
    status: "running"
}

console.log("\n=== Dot notation ===");
console.log("Nombre: " + pod.name);

console.log("\n=== Bracket notation ===");
console.log("Nombre: " + pod.memory);

console.log("\n== Modificar propiedad ===");
pod.memory = 90
console.log("Memoria actualizada: " + pod.memory) ;


console.log("\n=== Nueva propiedad === ");
pod.region = "eu-west-1";
console.log("Region añadida: " + pod.region);

console.log("=== Delete ===");
delete pod.region;
console.log("Propiedad region eliminada ");

console.log("\n=== for...in ===");
for (const key in pod) {
    console.log(`${key}: ${pod[key]}`);
}

