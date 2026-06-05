const usuarios = [
  { id: 1, name: "Ana",  roles: ["admin", "editor"] },
  { id: 2, name: "Luis", roles: ["editor"] },
  { id: 1, name: "Ana",  roles: ["viewer"] },
];

function normalizarUsuarios(arreglo) {
  const resultado = {};

  for (let i = 0; i < arreglo.length; i++) {
    const usuario = arreglo[i];
    const id = usuario.id;

    // Si el usuario no existe en resultado, lo agregamos
    if (resultado[id] === undefined) {
      resultado[id] = {
        id: usuario.id,
        name: usuario.name,
        roles: [],
      };
    }

    // Agregamos los roles que no estén ya en el arreglo
    for (let j = 0; j < usuario.roles.length; j++) {
      const rol = usuario.roles[j];

      if (resultado[id].roles.includes(rol) === false) {
        resultado[id].roles.push(rol);
      }
    }
  }

  return resultado;
}

const salida = normalizarUsuarios(usuarios);
console.log(salida);