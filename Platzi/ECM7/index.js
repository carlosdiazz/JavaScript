//! Async Await

const holaMundo = () => {
    return new Promise((resolve, reject) => {

        (true)
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