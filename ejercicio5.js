// Eliminar duplicados por propiedad
/* Escriba una función que reciba un arreglo de objetos y elimine duplicados basándose en una
propiedad específica. */

const elementos = [
    { id: 1, nombre: 'A' },
    { id: 2, nombre: 'B' },
    { id: 1, nombre: 'A' }
];
    
const eliminarDuplicados = (arreglo, propiedad) => {
    const vistos = new Set()
    return arreglo.filter(elemento => {
        const valor = elemento[propiedad]
        if (vistos.has(valor)) {
            return false // Si ya existe se elimina
        }
        vistos.add(valor)
        return true // Si es nuevo se mantiene
    });
}

const resultado = eliminarDuplicados(elementos, 'id')
console.log(resultado)
