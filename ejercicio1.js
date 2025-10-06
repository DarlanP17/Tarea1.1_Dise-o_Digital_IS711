// Agrupar elementos por propiedad
// Dado un arreglo de objetos, agrúpelos por el valor de una propiedad específica.

const datos = [
    { categoria: 'fruta', nombre: 'manzana' },
    { categoria: 'verdura', nombre: 'zanahoria' },
    { categoria: 'fruta', nombre: 'banana' },
    { categoria: 'verdura', nombre: 'lechuga' }
]

function agruparPorPropiedad(datos, categoria) {
    return datos.reduce((grupo, elemento) => {
        const clave = elemento[categoria]
        grupo[clave].push(elemento)
        return grupo;
    }, {})
}

const resultado = agruparPorPropiedad(datos, 'categoria')
console.log(resultado)