function Factory(blueprint) {
  return buildBlueprint(blueprint)
}

function buildBlueprint(blueprint) {
  return new blueprint()
}

function Car() {
  this.drive = () => {
    console.log("The car drove.");
  }
}

function Ship() {
  this.sail = () => {
    console.log("The boat sailed.");
  }
}

function Plane() {
  this.fly = () => {
    console.log("The plane flew.");
  }
}

// Write code here to test your implementation of the Factory Prototype.
const car = Factory(Car)
car.drive()

const ship = Factory(Ship)
ship.sail()

const plane = Factory(Plane)
plane.fly()