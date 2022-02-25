const frutas = ['Manzana', 'Pera', "Naranja", "Platano", "Mango"];


//? foreach(), ejecutará el mismo código para cada elemento de una matriz.
frutas.forEach(fruta => console.log(`Me gusta comer ${fruta}`));

//? map(), crea una nueva matriz con los resultados de la función que se le pasa.
const frutas2 = frutas.map(fruta => `${fruta}+`);
console.log(frutas2);

//? filter(), crea una nueva matriz con los elementos que cumplan la condición.
const frutas3 = frutas.filter(fruta => fruta.length > 6);
console.log(frutas3);

//? find(), devuelve el primer elemento que cumpla la condición.
const frutas4 = frutas.find(fruta => fruta.length > 6);
console.log(frutas4);

//? reduce(), devuelve un valor único.
const frutas5 = frutas.reduce((acumulador, fruta) => `${acumulador} ${fruta}`);
console.log(frutas5);

//? some(), devuelve true si alguno de los elementos cumple la condición.
const frutas6 = frutas.some(fruta => fruta.length > 6);
console.log(frutas6);

//? every(), devuelve true si todos los elementos cumplen la condición.
const frutas7 = frutas.every(fruta => fruta.length > 6);
console.log(frutas7);

//? filter(), crea una nueva matriz con los elementos que cumplan la condición.
const frutas8 = frutas.filter(fruta => fruta.length > 6);
console.log(frutas8);

//? includes(), devuelve true si el elemento está en la matriz.
const frutas9 = frutas.includes("Naranja");
console.log(frutas9);

//? sort(), Devuelve los elementos de una matriz en su lugary devuelve la matriz ordenada.

//? findIndex(), devuelve el índice del primer elemento que cumpla la condición. o -1 si no lo encuentra.
const frutas10 = frutas.findIndex(fruta => fruta.length > 6);
console.log(frutas10);