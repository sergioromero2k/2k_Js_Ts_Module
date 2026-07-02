if (!process.env.MEMORY_USAGE || !process.env.REPLICA_COUNT) {
  console.log("Error: define MEMORY_USAGE y REPLICA_COUNT");
  console.log("Ejemplo: MEMORY_USAGE=85 REPLICA_COUNT=1 node ft_k8s_health.js");
  process.exit(1);
}

const memory = Number(process.env.MEMORY_USAGE);
const count = Number(process.env.REPLICA_COUNT);

if (memory > 80) {
  if(count < 2) {
    console.log("CRITICAL - Memoria alta y sin réplicas suficientes. Escalar ahora.");
  }else {
    console.log("WARNING - Memoria alta, pero carga distribuida en 3 réplicas.");
  }
}else {
  console.log("OK - Pod funcionando con normalidad.");
}