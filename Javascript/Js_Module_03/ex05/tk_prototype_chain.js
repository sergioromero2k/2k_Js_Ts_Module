const vehicle = {
  canFly: function() {
    return this.name + " puede volar";
  }
};

const drone = Object.create(vehicle);
drone.autonomous = function () {
  return this.name + " es autónomo";
};

const deliveryDrone = Object.create(drone);
deliveryDrone.name = "deliveryDrone";
deliveryDrone.payload = function () {
  return this.name + " lleva paquetes";
};

console.log("=== Cadena completa ===");
console.log(deliveryDrone.canFly() + "       ← heredado de vehicle");
console.log(deliveryDrone.autonomous() + "       ← heredado de drone");
console.log(deliveryDrone.payload() + "    ← propio");


console.log("\n=== hasOwnProperty ===");
console.log(`¿payload es propio?    ${Object.prototype.hasOwnProperty.call(deliveryDrone, "payload")}`);
console.log(`¿autonomous es propio? ${Object.prototype.hasOwnProperty.call(deliveryDrone, "autonomous")} → heredado de drone`);
console.log(`¿canFly es propio?     ${Object.prototype.hasOwnProperty.call(deliveryDrone, "canFly")} → heredado de vehicle`);