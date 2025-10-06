// Eliminar duplicados por propiedad
/* Escriba una función que reciba un arreglo de objetos y elimine duplicados basándose en una
propiedad específica. */

const elementos = [
    { id: 1, nombre: 'A' },
    { id: 2, nombre: 'B' },
    { id: 1, nombre: 'A' }
];

function eliminarDuplicados(arreglo, propiedad) {
    const vistos = new Set();
    return arreglo.filter(elemento => {
        const valor = elemento[propiedad];
        if (vistos.has(valor)) {
            return false; // Ya existe, eliminar duplicado
        }
        vistos.add(valor);
        return true; // Primera vez que lo vemos, mantenerlo
    });
}

const resultado = eliminarDuplicados(elementos, 'id');
console.log(resultado);
