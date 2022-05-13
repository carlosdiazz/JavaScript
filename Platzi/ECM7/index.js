//! Async Await

const holaMundo = () => {
    return new Promise((resolve, reject) => {

        (false)
        ? setTimeout(() => resolve('Hola Mundo'), 3000)
        : reject(new Error('Test Error'))
    });
}


const holaMundoAsync = async () => {
    try {
        const hola = await holaMundo()
        console.log(hola)
    }catch(error){
        console.log(error)
    }

}

holaMundoAsync()


holaMundo()
    .then(response => console.log(response))
    .catch(error => console.log(error))
    .finally(() => console.log('Finalizado'))


//! Flat en arreglos
const arreglo = [1,2,3,[1,2,3,[1,2,3]]]

//! Aqui convierto arreglos en un solo arreglo
console.log(arreglo.flat(2))

const arreglo2 = [1,2,3,4,5,6,7,8,9,10]
//! Aqui puedo recorrer un arreglo y aplicar una funcion a cada elemento
console.log(arreglo2.flatMap(numero => [numero, numero * 2]))

