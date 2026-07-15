const podBase = {
  service: function () {
    return this.name + " está " + this.status;
  }
};

const pobA = Object.create(podBase);
pobA.name = "api-service";
pobA.status = "running";

console.log("=== Objeto base ===");
console.log(pobA.service());

const pobB = Object.create(podBase);
pobB.name = "db-proxy";
pobB.status = "critical";

console.log("\n=== Objeto heredado ===");
console.log(pobB.service());

if (!Object.prototype.hasOwnProperty.call(pobB, "service")) {
  console.log(pobB.name+" hereda el método de podBase");
}

console.log("\n=== Cadena de prototipos ===");
console.log(`${pobB.name} tiene su propio nombre: ${Object.prototype.hasOwnProperty.call(pobB, "name")}`);
console.log(`${pobB.name} tiene su status propio: ${Object.prototype.hasOwnProperty.call(pobB, "status")} -> lo hereda de pobBase`);