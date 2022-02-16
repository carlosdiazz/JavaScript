
//?Funcion de FLecha
const saludar3 = name => `Hola ${name}`;

const sumar3= (nu1,nu2) => nu1 + nu2;

//?Funcion ES6
const saludar2 = function(name){
    return `Hola ${name}`;
}

const sumar2 = function(nu1,nu2){
    return nu1 + nu2;
}

//?Funcion Basica
function holaMundo() {
    console.log("Hola Mundo");
}

function sumar(numero1, numero2) {
    return numero1 + numero2;
}

function saludar (name='Nombre por Defecto'){
    return `Hola ${name}`;
}