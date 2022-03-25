//!Numero binario Encriptado

const res_dividir = numero => numero%2
const dividir = numero => Math.floor(numero/2)

const encriptar_binario = numero => {

    let arr = []
    let nume = 0

    if(numero<=0){
        return [0]
    }else{
        while(numero>=1){

            nume = res_dividir(numero)
            numero = dividir(numero)
            arr.push(nume)
        }
        return arr.reverse()
    }

}

const encriptar_encadena = (binario,cad_0,cad_1) => {
    return binario.map(lista => {
        if(lista === 0){
            return cad_0
        }else{
            return cad_1
        }
    })
}

const desecptrar_cadena = (cadena,cad_0,cad_1) =>{
    return cadena.map(cad=>{
        if(cad === cad_0){
            return 0
        }else{
            return 1
        }
    })
}

//const main = numero => encriptar_encadena(encriptar_binario(numero),"-","=").join("")

console.log(encriptar_binario(11))
console.log(encriptar_encadena(encriptar_binario(11), "*", "-"))
console.log(desecptrar_cadena([ '-', '*', '-', '-' ],"*","-"))

const par = nume => {
    if(nume%2 === 0 ){
        return "Es par"
    }else{
        return "Es impar"
    }
}

console.log(par(45))