function crearContador() {
  let cuenta = 0;

  function incrementar() {
    cuenta = cuenta + 1;
  }

  function disminuir() {
    cuenta = cuenta - 1;
  }

  function reset() {
    cuenta = 0;
  }

  function obtenerCuenta() {
    return cuenta;
  }

  return {
    incrementar: incrementar,
    disminuir: disminuir,
    reset: reset,
    obtenerCuenta: obtenerCuenta,
  };
}

const contador = crearContador();

contador.incrementar();
contador.incrementar();
contador.incrementar();
contador.disminuir();

console.log("Cuenta:", contador.obtenerCuenta()); // 2

contador.reset();

console.log("Después de reset:", contador.obtenerCuenta()); // 0

// "cuenta" no es accesible desde afuera gracias al closure
console.log("Acceso directo:", contador.cuenta); // undefined