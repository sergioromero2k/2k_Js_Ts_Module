const convertidorTipo = require("./tk_type_converter2");

/**
 *
 */
function sanitizar (value) {
  if (value == "true") {return true;}
  if( value == "false") {return false;}

  const num = Number(value);
  if (!Number.isNaN(num)) {return num;}

  return value;
}

console.log("============================================");
console.log("PROCESS MASTER - Analizador argv      ");
console.log("============================================");

if ((process.argv).length > 2) {
  console.log("Argumentos recibidos: ", (process.argv).length-2);
  console.log("");
  for(let i = 2; i < (process.argv).length; i++ ){
    const valorConvertido = sanitizar(process.argv[i]);
    console.log("[",i-2,"] Valor: ",valorConvertido, "  | Tipo detectado: ", convertidorTipo(valorConvertido));
  };
} else {
  console.log(" Uso: node tk_process_master.js <arg1> <arg2> ...");
}

console.log("============================================");
console.log("Análisis completado.            ");
console.log("============================================");
