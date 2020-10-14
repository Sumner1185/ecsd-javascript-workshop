// Function Declaration
function Dog() {};

// Prototype Extension - function 'woof' defined once in memory!
Dog.prototype.woof = () => {
	console.log("WOOF!!");
};

// Instantiations
const pooch = new Dog();
const woofers = new Dog();

// Call functions up prototype chain!
pooch.woof();
woofers.woof();

// Same reference!
console.log(pooch.woof === woofers.woof);
