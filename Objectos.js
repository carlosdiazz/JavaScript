const persona = {
    _nombre: 'Juan',
    _apellido: 'Perez',
    edad: 30,
    direccion: {
        calle: 'Calle falsa 123',
        ciudad: 'Ciudad falsa',
        pais: 'Pais falso'
    },

    saludar(){
        console.log(`Hola, me llamo ${this._nombre} ${this._apellido}`);
    }
};

//persona.saludar()

const perro = {
    _nombre: 'Firulais',
    _raza: 'Pastor Aleman',

    get nombre(){
        return this._nombre;
    },

    set nombre(nombre){
        this._nombre = nombre;
    }
}

// Metodos Get y Set
//?Metodo Get: Obtiene el valor de una propiedad
console.log(perro.nombre);


//?Metodo Set: Cambia el valor de una propiedad
perro.nombre = 'Firulais 2';
console.log(perro.nombre);

//? Objectos construstores
//? Crear un objeto con un constructor

const persona2 =(nombre, apellido, edad) => {
    return {
        _nombre: nombre,
        _apellido: apellido,
        _edad: edad,
        saludar(){
            console.log(`Hola, me llamo ${this._nombre} ${this._apellido}`);
        }
    }
}

//?Ejemplos

const carlos = persona2('Carlos', 'Gomez', 30);
const juan = persona2('Juan', 'Perez', 30);
const ana = persona2('Ana', 'Gomez', 30);

carlos.saludar()
juan.saludar()
ana.saludar()

//? Metodos para Objectos

const persona3 = {
    nombre: 'Juan',
    apellido: 'Perez',
    edad: 30,
}

//! Object.keys()
    const claves = Object.keys(persona3);
    console.log(claves);

//! Object.values()
    const valores = Object.values(persona3);
    console.log(valores);

//! Object.entries()
    const entradas = Object.entries(persona3);
    console.log(entradas);

//Ejemplo con get y set

const menu = {
    _categoria: [],
    _platillo: [],

    get categoria(){
        return this._categoria
    },

    set categoria(categoria){
        this._categoria.push(categoria)
    }

}

console.log(menu.categoria);
menu.categoria = 'Carnes';
console.log(menu.categoria);