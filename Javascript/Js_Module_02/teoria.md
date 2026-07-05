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