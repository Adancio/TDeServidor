const fs = require("fs");

const Logger = (function () {
  // Estado privado
  let nivelActual = "all";    // "all", "warn", "error"
  let outputActual = "console"; // "console", "file"
  let archivoSalida = "app.log";

  function debeLoguear(nivel) {
    if (nivelActual === "all") return true;
    if (nivelActual === "warn" && nivel !== "info") return true;
    if (nivelActual === "error" && nivel === "error") return true;
    return false;
  }

  function escribirMensaje(nivel, mensaje) {
    const linea = "[" + nivel.toUpperCase() + "] " + mensaje;

    if (outputActual === "console") {
      console.log(linea);
    } else {
      fs.appendFileSync(archivoSalida, linea + "\n");
    }
  }

  function info(mensaje) {
    if (debeLoguear("info")) {
      escribirMensaje("info", mensaje);
    }
  }

  function warn(mensaje) {
    if (debeLoguear("warn")) {
      escribirMensaje("warn", mensaje);
    }
  }

  function error(mensaje) {
    if (debeLoguear("error")) {
      escribirMensaje("error", mensaje);
    }
  }

  function configurar(opciones) {
    if (opciones.nivel !== undefined) {
      nivelActual = opciones.nivel;
    }
    if (opciones.output !== undefined) {
      outputActual = opciones.output;
    }
    if (opciones.archivo !== undefined) {
      archivoSalida = opciones.archivo;
    }
  }

  return {
    info: info,
    warn: warn,
    error: error,
    configurar: configurar,
  };
})();


// --- Pruebas ---

console.log("-- Nivel: all, output: console --");
Logger.info("Servidor iniciado");
Logger.warn("Memoria alta");
Logger.error("Error de conexión");

console.log("\n-- Nivel: warn (info no debe aparecer) --");
Logger.configurar({ nivel: "warn" });
Logger.info("Este mensaje no debe salir");
Logger.warn("Este sí debe salir");
Logger.error("Este sí debe salir");

console.log("\n-- Output: file --");
Logger.configurar({ nivel: "all", output: "file", archivo: "app.log" });
Logger.info("Guardado en archivo");
Logger.warn("Warning en archivo");
Logger.error("Error en archivo");

console.log("Contenido del archivo:");
console.log(fs.readFileSync("app.log", "utf8"));