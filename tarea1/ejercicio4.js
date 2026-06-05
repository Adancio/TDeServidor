// Genera un arreglo de numeros del 1 al n
function generarDatos(n) {
  const arreglo = [];
  for (let i = 1; i <= n; i++) {
    arreglo.push(i);
  }
  return arreglo;
}

// Obtener el doble de los numeros pares con filter y map
function conFilterMap(datos) {
  const pares = datos.filter(function (n) {
    return n % 2 === 0;
  });
  const dobles = pares.map(function (n) {
    return n * 2;
  });
  return dobles;
}

// Obtener el doble de los numeros pares con reduce
function conReduce(datos) {
  return datos.reduce(function (acumulador, n) {
    if (n % 2 === 0) {
      acumulador.push(n * 2);
    }
    return acumulador;
  }, []);
}

// Obtener el doble de los numeros pares con for
function conForLoop(datos) {
  const resultado = [];
  for (let i = 0; i < datos.length; i++) {
    if (datos[i] % 2 === 0) {
      resultado.push(datos[i] * 2);
    }
  }
  return resultado;
}

// Mide cuanto tarda una funcion en ejecutarse
function medir(nombre, funcion, datos) {
  const inicio = performance.now();
  funcion(datos);
  const fin = performance.now();
  const tiempo = (fin - inicio).toFixed(4);
  console.log(nombre + ": " + tiempo + " ms");
}

// Correr el benchmark con distintos volumenes
const volumenes = [1000, 10000, 100000, 1000000];

for (let i = 0; i < volumenes.length; i++) {
  const n = volumenes[i];
  const datos = generarDatos(n);

  console.log("\n--- " + n.toLocaleString() + " elementos ---");
  medir("filter + map", conFilterMap, datos);
  medir("reduce      ", conReduce,    datos);
  medir("for loop    ", conForLoop,   datos);
}