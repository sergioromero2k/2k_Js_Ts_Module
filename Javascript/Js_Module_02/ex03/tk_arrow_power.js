function calcularArea(radio) {
    return Math.PI * radio * radio
}

const calcularArea2 = (radio) => {
    return Math.PI * radio * radio;
};

const calcularArea3 = radio => (Math.PI * radio * radio).toFixed(2);

const radios = [5,3,7];
const calcularAreas = (radios) => radios.map(calcularArea3);
const areas = calcularAreas(radios);

console.log(`Función tradicional    → Área de radio 5: ${calcularArea(5).toFixed(2)} `);
console.log(`Arrow function         → Área de radio 5: ${calcularArea2(5).toFixed(2)} `);
console.log(`Arrow con array        → [ ${areas.join(", ")} ]`);
