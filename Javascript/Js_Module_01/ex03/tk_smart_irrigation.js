const isSunny = process.argv[2] === "true";
const soilDry = process.argv[3] === "true";
const isRainy = process.argv[4] === "true";

if (process.argv.length < 5) {
  console.log("Uso: node tk_smart_irrigation.js <isSunny> <soilDry> <isRainy>");
  console.log("Ejemplo: node tk_smart_irrigation.js true true false");
  process.exit(1);
}

const deboRegar = (soilDry && !isRainy) || (soilDry && isSunny);
console.log(deboRegar ? "REGAR": "NO REGAR");

