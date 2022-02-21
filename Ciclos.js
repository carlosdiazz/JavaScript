const persona = {
    nombre: 'Juan',
    apellido: 'Perez',
    edad: 30,
}


//? Ciclo For Basico
console.log("Ciclo For Basico");
for(let i = 0 ; i < 10 ; i++ ){
    console.log(i);
}

//? Ciclo For In
console.log("Ciclo For In");
for(let i in persona){
    console.log(persona[i]);
}

//? Ciclo For Of
console.log("Ciclo For Of");
let arreglo=["uno","dos","tres", "cuatro"];
for(let i of arreglo){
    console.log(i);
}


//? Ciclo While
console.log("While");
let i = 0;
while(i < 10){
    console.log(i);
    i++;
}

//? Ciclo Do While
console.log("Do While");
let j = 5;
do{
    console.log(j);
    j++;
}while(j < 6);