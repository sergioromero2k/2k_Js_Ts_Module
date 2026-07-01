/**
 *
 */
function tk_type_converter(value) {
  if(Number.isNaN(value)) {return "Nan";}
  if(value == null) {return "null";}
  if(Array.isArray(value)) {return "array";}
  return value + " is a " + typeof value;
}

if (require.main == module) {
  console.log(tk_type_converter(42));
  console.log(tk_type_converter("Hola"));
}

module.exports = tk_type_converter;
