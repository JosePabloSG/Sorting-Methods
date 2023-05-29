Métodos de Ordenamiento
================
Las metodos de ordenación son algoritmos que realizan la acción de ordenar los registros de una tabla en algún orden secuencial. Un grupo de datos se ordena según el valor de un determinado campo tambien es imporante mencionar que tanto la ordenación iterativa como la recursiva son posibles.

### 1 - BubbleSort
Funciona comparando cada elemento de la lista a ordenar con el inmediatamente posterior y el inmediatamente anterior, ajustando sus posiciones si están en orden incorrecto (n>n+1).
(n>>n+1) orden. Este procedimiento debe realizarse repetidamente hasta que no sea necesario realizar más ajustes, momento en el que se dice que la lista está ordenada.
está ordenada.
## Rendimiento.
Bubble Sort es especialmente deficiente cuando se trata de conjuntos de datos grandes. A medida que el tamaño del conjunto de datos aumenta, el algoritmo puede volverse considerablemente lento.

Ejemplo JavaScript:

``` JavaScript
function bubbleSort(vectorbs) {
  // Imprimimos el vector obtenido al principio (Desordenado)
  console.log("El vector a ordenar es:", vectorbs);
  let n = vectorbs.length;

  // Iteramos sobre el vectorbs
  for (let i = 0; i < n - 1; i++) {
    // Iteramos sobre los elementos restantes en cada iteración
    for (let j = 0; j < n - i - 1; j++) {
      // Comparamos los elementos adyacentes
      if (vectorbs[j] > vectorbs[j + 1]) {
        // Intercambiamos los elementos si están en el orden incorrecto
        let temp = vectorbs[j];
        vectorbs[j] = vectorbs[j + 1];
        vectorbs[j + 1] = temp;
      }
    }
  }
  // Imprimimos el vector ordenado
  console.log("El vector ordenado por Bubble Sort es:", vectorbs);
}
// Creamos una lista base del 1 al 100
let listabs = Array.from({ length: 100 }, (_, i) => i + 1);
// Generamos un vector aleatorio con 8 elementos de la lista base
let vectorbs = listabs.sort(() => Math.random() - 0.5).slice(0, 8);
// Llamamos a la función bubbleSort pasando el vector a ordenar
bubbleSort(vectorbs);
```
