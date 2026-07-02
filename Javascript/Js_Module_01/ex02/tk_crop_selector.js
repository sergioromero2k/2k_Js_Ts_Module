const input = process.argv[2];

if(input == undefined) {console.log("Error: invalid input");}
else {
  switch(input.toLowerCase()) {
  case "tomate":
    console.log("Tomate | 75 días | Verano");
    break;
  case "lechuga":
    console.log("Lechuga | 45 días | Primavera");
    break;
  case "zanahoria":
  case "patata":
    console.log(`${input} | 90 días | Otoño`);
    break;
  default:
    console.log("Error: Unknown crop");
    break;
  }
}
