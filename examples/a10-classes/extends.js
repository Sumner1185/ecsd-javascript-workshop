class Vehicle {
    constructor (type) {
        this._type = type;
    }
    get type(){
        return this._type;
    }
}

class Car extends Vehicle {
    constructor(){
        super('Car');
    }
}

const car = new Car();
console.log(car.type);
