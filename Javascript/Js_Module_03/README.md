## Teoria
---

## ex0
* Un **closure** ocurre cuando una función **recuerda las variables del scope en el que fue creada** incluso después de que ese scope haya terminado de ejecutarse. Es la combinación de una función junto con las variables de su entorno externo, empaquetadas juntas.
* **Hoisting** el motor de JS "eleva" declaraciones antes de ejecutar. Las **function declaration** se elevan completas.**var** se eleva pero vale **undefined** hasta su línea. **let/const** se elevan pero quedan en TDZ (Temporal Dead Zone) → error si los tocas antes de su línea.
* **"to hoist = izar, elevar (como izar una bandera)."** antes de ejecutar tu código, hace una pasada previa donde "registra" en memoria dónde están las declaraciones de variables y funciones, es decir **hoisting: la elevación de esa declaración**.

```js
function externa() {
  let mensaje = "hola";

  function interna() {
    console.log(mensaje);
  }

  return interna;
}

const f = externa();
f(); // "hola"
```

## ex1
* **factory function (función fábrica)** es una función que crea y devuelve otras funciones, cada una configurada con datos distintos. Es el mismo mecanismo de clousere que ya viste en el ejercicio  anterior, pero ahora el foco no es **"recordar un contador que cambia**, sino **"recordar una configuración fija que no cambia"**.

```js
// Como puedes observar no cambia el valor, como el anterior, siempre constante.
function crearSaludo(idioma) {
  return function(nombre) {
    if (idioma === "es") {
      return "Hola, " + nombre;
    } else {
      return "Hello, " + nombre;
    }
  };
}

const saludoEs = crearSaludo("es");
const saludoEn = crearSaludo("en");

console.log(saludoEs("Ana"));   // "Hola, Ana"
console.log(saludoEn("Ana"));   // "Hello, Ana"
```

## ex02
```js
// Función tradicional
const persona = {
  nombre: "Ana",
  saludo: function() {
    console.log(this.nombre);
  }
};

persona.saludo(); // Ana
```

```js
// Función arrow
const persona = {
  nombre: "Ana",
  saludo: () => {
    console.log(this.nombre);
  }
}

persona.saludo(); // undefined
```

## ex03
Ya viste que `this` en una función tradicional depende de cómo la llamas (`objecto.metodo()`).
Pero, ¿Qué pasa si tienes una función suelta, que no vive dentro de ningún objeto, y aun así quieres `this` apuntea un objeto especifico cuando la ejecutes?
Para eso existen `call`, `apply`, y `blind`, 3 **herramientas que te permiten forzar manualmente** a qué apuntan `this`, sin necesidad de que la función esté **colgada** de este objeto.

### call & apply
* Ejecuta la función al instante, indicando el ``this`` y los argumentos uno por uno.
* Antes dice para esta ejecución, `this` va a ser este objeto que te paso primero.
* Los argumentos después van en coma.
* El ``apply`` es lo mismo pero en vez de "," es un array.

```js
funcion.call(objetoParaThis, arg1, arg2, arg3);
funcion.apply(objetoParaThis, [arg1, arg2, arg3]);


const persona = { nombre: "Ana"};
function presentar() {
  console.log("Soy " + this.nombre);
}
presenta.call(persona); // "Soy Ana"

function presentar(ciudad, edad) {
  console.log(`Soy ${this.nombre}, vivo en ${ciudad}, tengo ${edad} años`);
}

presentar.call(persona, "Madrid", 30);
presentar.apply(persona, ["Madrid", 30]);
```

### bind
* Te devuelve una función nueva ya "atada", es decir no ejecuta nada en el momento.
* Esto tiene al `this` fijado permanentemente al objeto que le pasaste, puedes guardarla, pasarla por ahí, y ejecutarla más tarde cuando quieras.
* `bind`  es muy parecido conceptualmente a las **factory functions** que ya viste: te da una función nueva, "preconfigurada", que puedes reutilizar todas las veces que quieras. La diferencia es que aquí lo que "fijas de antemano" no es un parámetro cualquiera, sino específicamente el valor de `this`.
```js
const persona = { nombre: "Ana" };

function presentar() {
  console.log("Soy " + this.nombre);
}

const presentarAna = presentar.bind(persona); // NO se ejecuta todavía

presentarAna(); // AHORA sí se ejecuta: "Soy Ana"
presentarAna(); // "Soy Ana" — puedes llamarla las veces que quieras, siempre con el mismo this
```

## ex04
* Js no tiene "clases de verdad" por debajo.
* En lenguajes como **Java o C++**, los objetos se crean a partir de "planos" (clases) que son entidades separadas del objeto.
* Javascript **no funciona así internamente** los objetos heredan directamente de otros objetos, no de "clases" -> **Herencia prototípica(prototype-based)**.
* Los objetos heredan directamente de otros objetos, **no de "clases"**, esto se llama **herencia prototípica(prototype-based)**.
* Todo **objeto** en JS tiene un conexión interna oculta hacia **otro objeto**, llamado su **prototipo**, cuando buscas una propiedad que el objeto no tiene, JS automáticamente sigue esa conexión y busca en el prototipo. Si tampoco está ahí, sigue subiendo al prototipo del prototipo, y así sucesivamente — esto se llama la cadena de prototipos (prototype chain).
* Puedes usar **hasOwnProperty** para verificar si una propiedad vive directamente en el objeto o si viene heredada del prototipo.

```js
// objetoHijo -> prototipo (objetoPadre) -> prototipo del padre -> ... -> null
```

* `Object.create()` - crear un objeto con un prototipo específico.
```js
const nuevoObjeto = Object.create(objetoQueSeraElPrototipo);
// Crea un objeto nuevo y vacío, pero le dice explicítamente "tu prototipo va a ser este objeto que te paso".
// Cuando dices "el hijo hereda del padre" en JS, el padre no es una clase - es otro objeto normal y corriente, del mismo tipo que cualquier objeto que ya conoces ({}).
const animalBase = {
  hacerSonido: function() {
    console.log(this.nombre + " hace un sonido");
  }
};

const perro = Object.create(animalBase);
perro.nombre = "Rex";

perro.hacerSonido();
```
* Un objeto es básicamente **una estructura de datos** una colección de pares `clave-valor`.
* Esto es un objeto, tal cual. No hace falta ninguna "clase" para crearlo, lo escribes directamente con `{}` y ya es un objeto usable.
* En lenguajes como java, para crear un objeto necesitas obligatoriamente una clase primero. ("objeto" = instancia de una clase). En js no es obligatorio esto, se puede crear objetos directamente, sin ninguna clase de por medio.
```js
const persona = {
  nombre: "Ana",
  edad: 30
};
```

## ex05
* Ya sabes cómo un objeto hereda de otro con `Object.create`.
* Este ejercicio simplemente **encadena ese mismo 2 veces**: un 3er objeto que hereda de un segundo, que asu vez hereda de un primero.
```js
// vehicle -> drone -> deliveryDrone
const vehicle = {
  encender: function() {
    return this.nombre + " está encendido";
  }
};

const drone = Object.create(vehicle);
drone.volar = function() {
  return this.nombre + " está volando";
};

const deliveryDrone = Object.create(drone);
deliveryDrone.nombre = "Drone-X1";
deliveryDrone.entregar = function() {
  return this.nombre + " está entregando el paquete";
};

console.log(deliveryDrone.encender());  // "Drone-X1 está encendido" — viene de VEHICLE (2 niveles arriba)
console.log(deliveryDrone.volar());     // "Drone-X1 está volando" — viene de DRONE (1 nivel arriba)
console.log(deliveryDrone.entregar());  // "Drone-X1 está entregando el paquete" — es PROPIO de deliveryDrone
```
* Fíjate que ``deliveryDrone`` puede usar ``encender()``, que ni siquiera está definido en drone (su padre inmediato) — está dos niveles más arriba, en vehicle. 
* JS no le importa cuántos niveles tenga que subir, sigue buscando hasta encontrarlo o llegar al final de la cadena.

## ex06
* `map` transforma cada elemento.
* `filter` selecciona elementos.
* `reduce` es distinto: en vez de darte un array como resultado, recorre todo el array y lo "reduce" a un único valor final.
```js
array.reduce(function(acumulador, elementoActual) {
  return nuevoAcumulador;
}, valorInicial);
``