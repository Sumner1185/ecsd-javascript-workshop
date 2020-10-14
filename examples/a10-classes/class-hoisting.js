const p = new Person("Lucy");
p.printName();

class Person {
  constructor(name) {
    this._name = name;
  }

  printName() {
    console.log(this._name);
  }
}
