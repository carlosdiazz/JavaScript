//! Parametros por defecto
const saludar = (nombre = 'amigo') => {
    console.log(`Hola ${nombre}`)
}
saludar('Carlos')
saludar()


//! Estructurar Datos
const perro = {
    nombre: 'Pancho',
    edad: 2,
    raza: 'Labrador',
}
const {nombre, edad, raza} = perro
console.log(nombre)


//! Object Values
const claves = Object.keys(perro)
console.log(claves)
const values = Object.values(perro);
console.log(values);



//! Spread Operator ---> Al poner los 3 puntos, me copio el array
const names = ['Carlos', 'Juan', 'Pedro', 'Mateo', 'Lucas', 'Luis', 'Manuel', 'Gabriel', 'Pablo']
const apellidos = ['Perez', 'Gonzalez', 'Lopez', 'Gomez', 'Sanchez', 'Gutierrez', 'Martinez', 'Hernandez', 'Ruiz']
const Names_Apellidos = [...names, ...apellidos]
console.log(Names_Apellidos)


//! Arrow Functions
const names_Y_Apellidos= names.map((name,index) => `${name} ${apellidos[index]}`)


//! Promesas
const espar = number => number % 2 === 0 ? 'Es Par' : 'Es impar'
const sabe_Numero = (numero) => {
    return new Promise((resolve, reject) => {
        if(typeof numero === 'number'){
            resolve(espar(numero))
        }else{
            reject('No es un numero')
        }
    })
}
sabe_Numero(46.0)
    .then(response => console.log(response))
    .catch(error => console.log(error))


//! Clases y Objetos
class calculator {
    constructor() {
        this.value = 0;
    }
    sum(value) {
        this.value += value;
    }
    rest(value) {
        this.value -= value;
    }
    multiply(value) {
        this.value *= value;
    }
    divide(value) {
        this.value /= value;
    }
    reset() {
        this.value = 0;
    }
}
const Calculo = new calculator();
console.log(Calculo.value);
Calculo.sum(5)
console.log(Calculo.value);

//! Includes
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

if(numeros.includes(15)){
    console.log('Si contiene 5');
}else{
    console.log('No contiene 5');
}