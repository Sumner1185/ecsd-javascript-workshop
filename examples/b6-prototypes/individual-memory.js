// Function with own meow function property
function Cat() {
  this.meow = () => {
    console.log("meow~");
  };
};

// Instantiations
const bux = new Cat();
const felix = new Cat();

// Have different references, separate pieces of memory!
console.log(bux.meow === felix.meow);
