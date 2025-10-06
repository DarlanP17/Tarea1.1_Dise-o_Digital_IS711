// Promesas encadenadas
/* Escribe una función obtenerUsuario(id) que simule una llamada asíncrona con setTimeout y
retorne una promesa que se resuelve con un objeto { id, nombre }. Encadena dos llamadas
para obtener los nombres de dos usuarios diferentes y mostrar el mensaje:
"Usuarios cargados: Juan y María" */

const usuarios = {
    1: { id: 1, nombre: 'Juan' },
    2: { id: 2, nombre: 'María' },
    3: { id: 3, nombre: 'Carlos' },
    4: { id: 4, nombre: 'Ana' }
}

function obtenerUsuario(id) {
    return new Promise((resolve, reject) => {
        // Simular una llamada asíncrona con setTimeout
        setTimeout(() => {
            const usuario = usuarios[id]
            if (usuario) {
                resolve(usuario)
            } else {
                reject(new Error(`Usuario con ID ${id} no encontrado`))
            }
        }, 1000) // 1 segundo de retraso para simular la llamada asíncrona
    })
}

Promise.all([obtenerUsuario(1), obtenerUsuario(2)])
    .then(([usuario1, usuario2]) => {
        console.log(`Usuarios cargados: ${usuario1.nombre} y ${usuario2.nombre}`)
    })
    .catch(error => {
        console.error('Error:', error.message)
    })