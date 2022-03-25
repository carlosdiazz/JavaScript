class Dog {
    constructor(name,age) {
        this._name = name;
        this._age = age;
    }

    get age(){
        return this._age;
    }

    get name(){
        return this._name;
    }

    masEdad(){
        this._age++;
    }
}

const rubi = new Dog('RUbi',1)

console.log(rubi.name)
console.log(rubi.age)
rubi.masEdad()
rubi.masEdad()
rubi.masEdad()
console.log(rubi.age)