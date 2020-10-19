// Classes and Inheritance

// a) setters and getters.

class Animal {
  #name;
  #age;
  constructor(name, age) {
    this.#name = name,
    this.#age = age
  }

  get name() {
    return this.#name
  }

  get age() {
    return this.#age
  }

  set name(name) {
    this.#name = name
  }
}

// Uncomment to test
const animal = new Animal("Rex", 8);
console.log("Name: " + animal.name);
console.log("Age: " + animal.age);
animal.name = "Oura";
console.log("New Name: " + animal.name);

// b) Inheritance

class Dog extends Animal {
  woof = () => {
    return "Woof, woof"
  }
}

class Cat extends Animal {
  meow = () => {
    return "Meow, meow"
  }
}

// Uncomment to test

const dog = new Dog("Axe", 6);
console.log("Dog Name: " + dog.name);
console.log("Dog Age: " + dog.age);
dog.name = "New Axe";
console.log("New Dog Name: " + dog.name);
console.log(dog.woof());

const cat = new Cat("Napster", 3);
console.log("Cat Name: " + cat.name);
console.log("Cat Age: " + cat.age);
cat.name = "New Nap";
console.log("New Cat Name: " + cat.name);
console.log(cat.meow());
