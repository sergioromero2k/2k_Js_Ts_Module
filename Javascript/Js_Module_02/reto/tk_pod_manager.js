const pods = [
  { name: "api-service",  memory: 85, replicas: 2, status: "running" },
  { name: "auth-service", memory: 40, replicas: 3, status: "running" },
  { name: "db-proxy",     memory: 92, replicas: 1, status: "critical" },
  { name: "cache",        memory: 30, replicas: 2, status: "running"  },
];

if (process.argv.length < 3) {
    console.log("Uso: node tk_pod_manager.js <list|health|filter|find>");
    console.log("Ejemplos:");
    console.log("node tk_pod_manager.js list");
    console.log("node tk_pod_manager.js find api-service");
    console.log("node tk_pod_manager.js filter high-memory");
} else {
    const args = process.argv.slice(2);
    const comando = args[0];
    console.log(comandos);

    if (comando === "list") {
        console.log("=== POD MANAGER ===");
        pods.forEach((e, idx) => {
            console.log(`[${idx + 1}] ${e.name}  | Memory: ${e.memory}% | Status: ${e.status}`);
        });
    } else if (comando === "health") {
        let ok = 0, warning = 0, critical = 0;
        pods.forEach(function(pod) {
        if (pod.status === "critical") {
            critical++;
        } else if (pod.memory > 80) {
            warning++;
        } else {
            ok++;
        }
        });
    } else if(comando ===