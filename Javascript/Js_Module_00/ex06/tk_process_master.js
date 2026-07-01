const convertidorTipo = require("./tk_type_converter2");

console.log("============================================");
console.log("PROCESS MASTER - Analizador argv      ");
console.log("============================================");

if ((process.argv).length > 2) {
  console.log("Argumentos recibidos: ", (process.argv).length-2);
  console.log("");
  for(let i = 2; i < (process.argv).length; i++ ){
    console.log("[",i,"] Valor: ",process.argv[i], "  | Tipo detectado: ", convertidorTipo(process.argv[i]));
  };
} else {
  console.log(" Uso: node tk_process_master.js <arg1> <arg2> ...");
}

console.log("============================================");
console.log("Análisis completado.            ");
console.log("============================================");
