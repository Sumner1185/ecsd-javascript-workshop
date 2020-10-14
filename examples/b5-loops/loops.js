// Standard for loop
for (let i = 0; i < 3; i++) {
  console.log(i);
}

// For In
{
  const animals = ["Dog", "Cat", "Rabbit"];

  for (const index in animals) {
    console.log("For In Loop: " + animals[index]);
  }
}

// For Of - The preferred array looping approach.
{
  const animals = ["Snake", "Turtle", "Lizard"];

  for (const animal of animals) {
      console.log("For Of Loop: " + animal);
  }
}

// For Each Loop
// An Array function which can be called, it is passed a callback function as
// an argument, each item is passed from the array to the callback function.
// The callback includes the process which should be carried out on each item of the array.
{
  const animals = ["Goldfish", "Koi"];

  // ES5 Function
  animals.forEach(function (animal) {
      console.log("ES5 Loop: " + animal);
  });

  // ES6 Function
  animals.forEach(animal => console.log("ES6 Loop: " + animal));
}
