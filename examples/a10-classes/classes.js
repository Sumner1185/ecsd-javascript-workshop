class Person {
	constructor(name) {
		this._name = name;
	}

	getName() {
		return this._name;
	}
}

const barry = new Person("barry");

console.log(barry.getName());
