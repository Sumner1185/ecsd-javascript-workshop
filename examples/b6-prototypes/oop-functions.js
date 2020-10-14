// Function declaration
function fn() {
	this.pi = 3.14;
};

// Instantiation
const obj = new fn();

// Reference to property
console.log(obj.pi);

// Looking up the prototype chain
console.log(obj.__proto__ === fn.prototype);
