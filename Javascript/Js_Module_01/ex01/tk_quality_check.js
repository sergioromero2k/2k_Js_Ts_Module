const input = process.argv[2];
const number = Number(input);

if (input === undefined || Number.isNaN(number)) {
  console.log("Error: invalid input");
}
else if (number >= 0 && number<= 68) {console.log("Discard");} 
else if (number >= 70 && number<= 89) {console.log("Standard");} 
else if (number >= 90 && number<= 100) {console.log("Premium");}
else {console.log("Error: value out of range");}
