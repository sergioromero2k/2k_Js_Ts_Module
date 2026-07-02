const info = process.argv[2];
const input = process.argv[3];
const fecha = new Date();

const anio = fecha.getFullYear();
const mes = String(fecha.getMonth() + 1).padStart(2, "0");
const dia = String(fecha.getDate()).padStart(2, "0");

if (process.argv.length < 4) {
  console.log("Uso: node tk_log_formatter.js <level> <message>");
  process.exit(1);
}

switch(info.toUpperCase()) {
case "INFO":
  console.log(`[INFO] - ${anio}-${mes}-${dia}: ${input}`);
  break;
case "WARN":
  console.log(`[WARN] - ${anio}-${mes}-${dia}: ${input}`);
  break;
case "ERROR":
  console.log(`[ERROR] - ${anio}-${mes}-${dia}: ${input}`);
  break;
default:
  console.log(`Error: level no válido. Usa: info, warn, error`);
  break;
}
