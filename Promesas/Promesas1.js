const {chequearInventario, procesarPago, enviarPedido} = require('./Funciones_TIenda');

const order = {
    items: [['manzana',5],['pera',15]],
    balanceDisponible: 500
}


chequearInventario(order)
    .then((valor)=>{
        return procesarPago(valor)
    })
    .then((valor)=>{
        return enviarPedido(valor)
    })
    .then((listo)=>{
        console.log(listo)
    })

    .catch((e)=>console.log(e))