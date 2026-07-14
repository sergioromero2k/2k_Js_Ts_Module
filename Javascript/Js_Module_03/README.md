### ex0
Un closure ocurre cuando una función **recuerda las variables del scope en el que fue creada** incluso después de que ese scope haya terminado de ejecutarse. Es la combinación de una función junto con las variables de su entorno externo, empaquetadas juntas.

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

### ex1
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

### ex02
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