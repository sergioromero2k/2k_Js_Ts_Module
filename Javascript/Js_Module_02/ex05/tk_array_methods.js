const array = [25, 38, 15, 42];

console.log("=== forEach ===");
array.forEach((temperatura, i) => {
    console.log(`Sensor ${i + 1}: ${temperatura}°C`);
});

console.log("\n=== map: Celsius a Fahrenheit ===");
const cel_far = array.map(c => c * 9 / 5 + 32);
console.log(cel_far);

console.log("\n=== filter: mayores de 30°C ===");
const mayores30 = array.filter(t => t > 30);
console.log(mayores30);