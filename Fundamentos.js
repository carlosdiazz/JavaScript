//?Variables

const numero = 10;
const cadena = "Hola";
const booleano = true;
const arreglo = [1, 2, 3, 4, 5];
const objeto = {
    nombre: "Juan",
    apellido: "Perez",
    edad: 30
};

//?COndicionales
if(true){
    console.log("first");
}else{
    console.log("second");
}

if(numero > 0){
    console.log("El numero es mayor que cero");
}else if(numero < 0){
    console.log("El numero es menor que cero");
}else{
    console.log("El numero que ingresaste es cero");
}

//Switch
switch(numero){
    case 1:
        console.log("El numero es 1");
        break;

    case 2:
        console.log("El numero es 2");
        break;

    case 3:
        console.log("El numero es 3");
        break;

    default:
        console.log('Otro numero')
}

//?Asignacion de valores
//Si no agrego un valor a una variable, se le asigna el valor que coloque luego de ||
let nombre = "" || "Nombre Por Defecto";


//?Operador Ternario
numero > 10 ? console.log("Es mayor a 10") : console.log("Es menor a 10");

booleano === true ? console.log("Es verdadero") : console.log("Es falso");