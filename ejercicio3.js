//  Calcular promedio ponderado
// Dado un arreglo de objetos con valores y pesos, calcula el promedio ponderado.

const notas = [
    { valor: 90, peso: 0.5 },
    { valor: 80, peso: 0.3 },
    { valor: 70, peso: 0.2 }
]

const promedioPonderado = (notas) => {
    const total = notas.reduce((acumulador, nota) => {
        return acumulador + nota.valor * nota.peso
    }, 0)
    const totalPesos = notas.reduce((acumulador, nota) => {
        return acumulador + nota.peso
    }, 0)
    return total / totalPesos
}

const resultado = promedioPonderado(notas)
console.log(resultado)