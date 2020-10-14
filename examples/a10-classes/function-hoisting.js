Person.prototype.printName = function() {
  console.log(this._name);
}

const person = new Person("Tom");
person.printName();

function Person (name) {
    this._name = name;
}
