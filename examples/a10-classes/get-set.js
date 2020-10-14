class Person {
	constructor(name) {
		this._name = name;
	}

	get name() {
		return this._name;
	}

	set name(newName) {
		this._name = newName;
	}
}

const david = new Person("David");
david.name = "Davidson";
console.log(david.name);
