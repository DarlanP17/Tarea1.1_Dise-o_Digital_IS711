// Combinar dos listas sin repetir elementos
// Crea una función que reciba dos arreglos y devuelva un nuevo arreglo que contenga todos los
// elementos sin repetir.

const lista1 = ['manzana', 'pera', 'banana'];
const lista2 = ['pera', 'uva', 'manzana', 'sandía'];

const combinarListasSinRepetir = (lista1, lista2) => {
    const conjunto = new Set([...lista1, ...lista2]);
    return Array.from(conjunto);
}

const resultado = combinarListasSinRepetir(lista1, lista2);
console.log(resultado);