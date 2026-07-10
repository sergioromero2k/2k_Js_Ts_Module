const garden = {
  plants: 10,

  tradicional: function () {
    return this.plants;
  },

  arrow: () => {
    return this.plants;
  }
};

console.log("=== Método tradicional ===");
console.log(`Plantas: ${garden.tradicional()}`);

console.log("\n=== Arrow function ===");
console.log(`Plantas: ${garden.arrow()}`);
console.log("Razón: las arrow functions no tienen su propio this.");