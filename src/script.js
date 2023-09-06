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
let vectorbs = [64, 34, 25, 12, 22, 11, 90];

bubbleSort(vectorbs);

function insertionSort(vectoris) {
  // Imprimimos el vector obtenido al principio (Desordenado)
  console.log("El vector a ordenar es:", vectoris);
  let n = vectoris.length;

  // Iteramos sobre el vectoris
  for (let i = 1; i < n; i++) {
    let current = vectoris[i];
    let j = i - 1;
    // Movemos los elementos del vectoris[0..i-1], que son mayores que la clave, a una posición adelante de su posición actual
    while (j > -1 && current < vectoris[j]) {
      vectoris[j + 1] = vectoris[j];
      j--;
    }
    vectoris[j + 1] = current;
  }
  // Imprimimos el vector ordenado
  console.log("El vector ordenado por Insertion Sort es:", vectoris);
}
let vectoris = [70, 50, 30, 10, 20, 40, 60];
// Llamamos a la función insertionSort pasando el vector a ordenar
insertionSort(vectoris);

function selectionSort(vectorss) {
  // Imprimimos el vector obtenido al principio (Desordenado)
  console.log("El vector a ordenar es:", vectorss);
  let n = vectorss.length;

  // Iteramos sobre el vectorss
  for (let i = 0; i < n - 1; i++) {
    // Encontramos el elemento mínimo en el vectorss sin ordenar
    let min = i;
    for (let j = i + 1; j < n; j++) {
      if (vectorss[j] < vectorss[min]) {
        min = j;
      }
    }
    // Intercambiamos el elemento mínimo encontrado con el primer elemento
    let temp = vectorss[min];
    vectorss[min] = vectorss[i];
    vectorss[i] = temp;
  }
  // Imprimimos el vector ordenado
  console.log("El vector ordenado por Selection Sort es:", vectorss);
}
let vectorss = [64, 25, 12, 22, 11];
// Llamamos a la función selectionSort pasando el vector a ordenar
selectionSort(vectorss);

function shellSort(vectorsls) {
  // Imprimimos el vector obtenido al principio (Desordenado)
  console.log("El vector a ordenar es:", vectorsls);
  let n = vectorsls.length;

  // Inicializamos la brecha
  for (let gap = Math.floor(n / 2); gap > 0; gap = Math.floor(gap / 2)) {
    // Realizamos el ordenamiento por inserción
    for (let i = gap; i < n; i += 1) {
      let temp = vectorsls[i];
      let j;
      for (j = i; j >= gap && vectorsls[j - gap] > temp; j -= gap) {
        vectorsls[j] = vectorsls[j - gap];
      }
      vectorsls[j] = temp;
    }
  }
  // Imprimimos el vector ordenado
  console.log("El vector ordenado por Shell Sort es:", vectorsls);
}
let vectorsls = [12, 34, 54, 2, 3];
// Llamamos a la función bubbleSort pasando el vector a ordenar
shellSort(vectorsls);

function mergeSort(vectorms) {
  let n = vectorms.length;

  // Si el vector tiene un solo elemento, lo devolvemos
  if (n === 1) {
    return vectorms;
  }

  // Encontramos el punto medio del vector
  const mid = Math.floor(n / 2);
  const left = vectorms.slice(0, mid);
  const right = vectorms.slice(mid);

  // Usamos la recursividad para combinar los dos vectores divididos
  return merge(mergeSort(left), mergeSort(right));
}

// Función para combinar dos vectores divididos
function merge(left, right) {
  let result = [];
  let i = 0;
  let j = 0;

  // Combinamos los dos vectores en uno
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i++]);
    } else {
      result.push(right[j++]);
    }
  }
  // Combinamos los vectores restantes
  return result.concat(left.slice(i)).concat(right.slice(j));
}

let vectorms = [12, 11, 13, 5, 6, 7];
// Imprimimos el vector obtenido al principio (Desordenado)
console.log("El vector a ordenar es:", vectorms);

// Llamamos a la función mergeSort pasando el vector a ordenar
console.log("El vector ordenado por Merge Sort es:", mergeSort(vectorms));

function quickSort(vectormqs) {
  let n = vectormqs.length;

  // Si el vector tiene un solo elemento, lo devolvemos
  if (n < 2) {
    return vectormqs;
  }

  // Definimos el pivote
  const pivot = vectormqs[Math.floor(Math.random() * n)];

  // Definimos los vectores menores y mayores
  const less = vectormqs.filter((value) => value < pivot);
  const greater = vectormqs.filter((value) => value > pivot);

  // Usamos la recursividad para combinar los dos vectores divididos
  return [...quickSort(less), pivot, ...quickSort(greater)];
}

let vectormqs = [10, 7, 8, 9, 1, 5];
// Imprimimos el vector obtenido al principio (Desordenado)
console.log("El vector a ordenar es:", vectormqs);

// Llamamos a la función quickSort pasando el vector a ordenar
console.log("El vector ordenado por Quick Sort es:", quickSort(vectormqs)); 