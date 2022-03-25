const {productos} = require('./productos_tiendas.js')


const chequearInventario = order => {
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{

            const items = order.items;
            let inStock = items.every(item => productos[item[0]].invetario >= item[1]  )

            if(inStock){
                let total = 0;
                items.forEach(element => {
                    total += element[1] * productos[element[0]].precio
                });

                console.log(`Todos los productos estan en el carrito, con un costo de $ ${total}`)
                resolve([order,total])
            }else{
                reject("Algunos productos estan agotados")
            }
        },2000)
    }
    );
}


const procesarPago = order => {
    const orden = order[0]
    const total = order[1]

    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            let hayDinero = orden.balanceDisponible > total

            if(hayDinero){
                console.log('Hay dinero suficiente, se esta generando el codigo')
                resolve([order, Date.now()])
            }else{
                reject('No tiene balance suficiente para efectuar el apgo')
            }
        },3000)
    })
}

const enviarPedido = order => {
    const orden = order[0]
    const shiping = order[1]

    return new Promise((resolve,reject) =>{
        setTimeout(()=>{
            resolve(`El pedido se ha enviado correctamente, su numero de pedido es: ${shiping}`)
        },1500)
    })
}

const chequearDisponibilidad = () => {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{

            if(randomPosibilidades()){
                resolve('Esta disponible')
            }else{
                reject('No esta disponible')
            }

        },2000)
    })
}

const randomPosibilidades = () => Math.random() > .2

console.log(randomPosibilidades())

module.exports = {  chequearInventario, procesarPago, enviarPedido }