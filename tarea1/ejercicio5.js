const usuarios = [
  { id: 1, nombre: "Ana",    correo: "ana@mail.com"    },
  { id: 2, nombre: "Luis",   correo: "luis@mail.com"   },
  { id: 3, nombre: "María",  correo: "maria@mail.com"  },
  { id: 4, nombre: "Carlos", correo: "carlos@mail.com" },
  { id: 5, nombre: "Sofía",  correo: "sofia@mail.com"  },
];

const correoBuscado = "maria@mail.com";
//loop
function buscarConFor(arreglo, correo) {
  for (let i = 0; i < arreglo.length; i++) {
    if (arreglo[i].correo === correo) {
      return arreglo[i];
    }
  }
  return null;
}
//find
function buscarConFind(arreglo, correo) {
  const encontrado = arreglo.find(function (usuario) {
    return usuario.correo === correo;
  });

  if (encontrado !== undefined) {
    return encontrado;
  }
  return null;
}
//indice
function crearIndice(arreglo) {
  const indice = {};
  for (let i = 0; i < arreglo.length; i++) {
    const correo = arreglo[i].correo;
    indice[correo] = arreglo[i];
  }
  return indice;
}

function buscarEnIndice(indice, correo) {
  if (indice[correo] !== undefined) {
    return indice[correo];
  }
  return null;
}

// --- Pruebas ---
console.log("Buscando:", correoBuscado);
console.log("\n[A] for loop:");
console.log(buscarConFor(usuarios, correoBuscado));

console.log("\n[B] .find():");
console.log(buscarConFind(usuarios, correoBuscado));

console.log("\n[C] Indice precalculado:");
const indice = crearIndice(usuarios);
console.log(buscarEnIndice(indice, correoBuscado));

console.log("\nBuscando correo que no existe:");
console.log(buscarConFor(usuarios, "noexiste@mail.com"));    
console.log(buscarConFind(usuarios, "noexiste@mail.com"));   
console.log(buscarEnIndice(indice, "noexiste@mail.com"));    

/*
  DIFERENCIAS ENTRE LOS 3 ENFOQUES:
.

  El loop y find hacen lo mismo basicamente pero recorren el arreglo
  hasta encontrar el resutlado, find simplemente lo hace mas corto 
  y facil de leer


  El indice construte un objeto dnde la llave es el correo, 
  se busca directamente el objeto por la llave

  RECOMENDACION:

    Si solo buscas pocos datos, find es buena idea porque es mas corto
    Si vas a buscar muchos datos, es recomendable usar el indice, el problema 
    es construirlo
    El loop es util cuando hay algo que no puedas encontrar con el find
*/