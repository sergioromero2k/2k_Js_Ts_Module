## ex00
* Cuando el motor de JS ejecuta tu código, antes de correrlo línea por línea hace una **"pasada previa"** donde registra en memoria todas las **declaraciones de funciones** y **variables**. 
* Es como si "elevara" (hoisting = izar) esas declaraciones hasta arriba del scope donde viven. Pero no todo se eleva igual. 
* Ahí está la clave de tu ejercicio.

Tienes razón en que JavaScript ejecuta el código de arriba hacia abajo. Pero antes de ejecutar, hace una **pasada de compilación** donde **"escanea"** todo el scope buscando declaraciones. 

Son 2 fases distintas:
* **Fase de compilación** → el motor recorre el código y registra dónde hay var, let, const, function.
* **Fase de ejecución** → ahora sí, corre línea por línea, de arriba a abajo.

### Casos
* **Las function declarations (function nombre() {})** se elevan completas, con cuerpo y todo, no solo el nombre.
* **var** se eleva, pero solo la declaración, no la asignación.
* **const** y **let** también se elevan (técnicamente), pero quedan en un estado especial llamado **Temporal Dead Zone (TDZ)**: existen en el scope, pero el motor las bloquea hasta que la línea de declaración se ejecuta de verdad. 

### ¿Por qué te hacen aprender esto si "total da error"?
Porque el problema no es que dé error — es que a veces **NO da error** y te confunde igual. 

## ex02
### Function Declaration (declaración de función)
Se reconoce porque empieza directamente con la palabra function, tiene nombre, y no está siendo asignada a nada.
```
function sumar(a, b) {
  return a + b;
}
```
### Function Expression (expresión de función)
Aquí la función es un valor, literalmente igual que si escribieras const numero = 5.
La función no tiene por qué llevar nombre (puede ser anónima), y lo que importa es que se está asignando a una variable (const, let o var).
```
function sumar(a, b) {
  return a + b;
}
const sumar = (a, b) => a + b;
```

## ex03
### Función tradicional (punto de partida)
```js
function calcularArea(radio) {
  return Math.PI * radio * radio;
}
```
### Convertirla a arrow function
```js
const calcularArea = (radio) => {
  return Math.PI * radio * radio;
};
```
### Retorno implícito
```js
const calcularArea = (radio) => Math.PI * radio * radio;
```
Aquí está la magia del ejercicio. Cuando quitas las llaves {}, JavaScript entiende que todo lo que sigue después de => es el valor que se devuelve automáticamente, sin que tengas que escribir return. Es literalmente "lo que hay a la derecha de la flecha, es el resultado".
Reglas para que esto funcione:
* Sin llaves {} → hay retorno implícito
* Con llaves {} → NO hay retorno implícito, necesitas return explícito (si no, la función devuelve undefined)

* **.map()** recorre un array, aplica una función a cada elemento, y devuelve un array nuevo con los resultados (no modifica el original).
* Ejecuta la función para cada elemento, y con lo que devuelva esa función (return), construye un array nuevo del mismo tamaño
* Transformar, y devolver un array nuevo.

```js
const nuevoArray = array.map(function(elemento) {
  return elementoTransformado;
});
```
## ex05
`forEach` - recorrer, sin devolver nada.
* Se usa cuando quieres efectos secundarios (imprimir, guardar en una base de datos, modificar una variable externa), no cuando quieres producir un nuevo array.
```js
array.forEach(function(elemento, indice, arrayCompleto){})
```
### Ejemplos
```js
const frutas = ["manzana", "pera", "uva"];

frutas.forEach(function(fruta) {
  console.log(fruta);
});
// manzana
// pera
// uva

// Con arrow function (más común en código moderno)
frutas.forEach(fruta => console.log(fruta));

```

`filter` - seleccionar, y devolver un array(posiblemente mas corto).
* ejecuta la función para cada elemento. 
* Si la función devuelve true, el elemento se queda en el array nuevo. 
* Si devuelve false, se descarta. 
* El resultado es un array que puede ser más corto que el original (o incluso vacío)

```js
const nuevoArray = array.filter(function(elemento) {
  return condicionBooleana;
});

```js
// Ejemplos
```js
const numeros = [1, 2, 3, 4, 5, 6];

const pares = numeros.filter(function(n) {
  return n % 2 === 0;
});

console.log(pares); // [2, 4, 6]

const pares = numeros.filter(n => n % 2 === 0);
```
* Los 3 métodos son **no destructivos** (a diferencia de push/pop que si modifican el array original).
* Los 3 métodos se pueden concatenar.

## ex08
Destructurin es una sintaxis que te permite "desempacar" valores de un array o de un objeto y guardarlos directamente en variables
en una sola línea, sin tener que acceder elemento por elemento manualmente.

### Destructuring de arrays
```js
const frutas = ["Manzana", "Pera", "Uva"];

const [a, b, c] = frutas;

console.log(a); // "Manzana"
console.log(b); // "Pera"
console.log(c); // "Uva"
```

### Destructuring de objetos
Clave: en objetos, el destructuring se basa en el nombre de la clave, no en la posición. Por eso las variables que creas deben llamarse igual que las claves del objeto (name, memory), sino no encuentran nada.
```js
const pod = { name: "api-service", memory: 85, status: "running" };

const { name, memory } = pod;

console.log(name);   // "api-service"
console.log(memory); // 85
```

### Destructuring en parámetros de función
```js
function mostrarPod({ name, memory }) {
  console.log(`Pod: ${name} consume ${memory}% de memoria`);
}

mostrarPod({ name: "api-service", memory: 85 });
```

### Rest (...) en destructuring
```js
const verduras = ["Tomate", "Lechuga", "Zanahoria", "Pepino"];

const [primero, ...resto] = verduras;

console.log(primero); // "Tomate"
console.log(resto);   // ["Lechuga", "Zanahoria", "Pepino"]
```

### Diferencia entre rest (...resto) y spread (...algo)
```js
// Rest: agrupa
const [a, ...resto] = [1, 2, 3]; // resto = [2, 3]
// Spread: expande
const nuevo = [...resto, 4]; // nuevo = [2, 3, 4]
```
