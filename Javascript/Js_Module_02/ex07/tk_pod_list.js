const pod = [
    {
        name : "api-service",
        memory: 85,
        replicas: 4,
        status: "running"
    },
    {
        name : "auth-service",
        memory: 40,
        replicas: 3,
        status: "pending"
    },
    {
        name : "db-proxy",
        memory: 92,
        replicas: 2,
        status: "running"
    },
        {
        name : "cache",
        memory: 60,
        replicas: 6,
        status: "running"
    }
]

console.log("=== Pods con memoria alta ===");
const alta = pod.filter(a => a.memory > 80);
console.log(alta);

console.log("\n=== Solo nombres ===");
const names = pod.map((a) => a.name);
console.log(names);

console.log("\n=== Buscar pod por nombre ===");
const exacto = pod.filter((a) => a.name=="auth-service");
console.log(exacto);