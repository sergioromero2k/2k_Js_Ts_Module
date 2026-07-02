const name = process.argv[2];
const qty = process.argv[3];

if (!name || !qty) {
  console.log("Uso: node tk_secure_input.js <nombre> <cantidad>");
} 
else if (Number.isNaN(Number(qty))) {
  console.log("Error: la cantidad debe ser un número válido.");
  console.log("Uso: node tk_secure_input.js <nombre> <cantidad>");
} 
else {
  const cultivo = { name: name, qty: Number(qty) };
  console.log(`Cultivo registrado: {name: '${cultivo.name}', qty: ${cultivo.qty} }`);
}