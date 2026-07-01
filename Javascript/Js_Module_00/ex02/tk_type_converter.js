/**
 *
 */
function tk_type_converter(value) {
  if(Number.isNaN(value)) {return "Nan";}
  if(value == null) {return "null";}
  if(Array.isArray(value)) {return "array";}
  return value + " is a " + typeof value;
}

console.log(tk_type_converter(42));
console.log(tk_type_converter("Hola"));