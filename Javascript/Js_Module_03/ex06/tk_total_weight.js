if (process.argv.length < 3) {
  console.log("Uso: node tk_total_weight.js <peso1> <peso2> ...");
  console.log("Ejemplo: node tk_total_weight.js 20 35 50 15");
} else {
  console.log("=== Cosecha Total ===");

  try {
    const pesos = process.argv.slice(2).map(n => {
      const peso = parseInt(n, 10);
      if (isNaN(peso)) {
        throw new Error(`"${n}" no es un número válido.`);
      }
      return peso;
    });

    console.log(`Pesos registrados: ${pesos}`);

    const pesoContenedor = 100;
    const pesoTotal = pesos.reduce((acc, actual) => acc + actual, pesoContenedor);

    console.log(`Peso total: ${pesoTotal}`);

  } catch (error) {
    console.error("Error:", error.message);
  }
}
