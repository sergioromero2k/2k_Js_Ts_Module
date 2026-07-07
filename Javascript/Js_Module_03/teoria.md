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