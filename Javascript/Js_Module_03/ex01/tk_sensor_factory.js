const tk_sensor_factory = (type) => (valor) => `[${type}]: ${valor}`;

const temp = tk_sensor_factory("Temperature");
console.log(`${temp(25)}ºC`);

const hum = tk_sensor_factory("Humidity");
console.log(`${hum(80)}%`);

const pre = tk_sensor_factory("Pressure");
console.log(`${pre(101.3)}hPa`);