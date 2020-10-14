// Difference between var and let
// Let's take a look at the difference between 'var' and ES6's variable
// declaration 'let'. let has slightly different scoping properties to var,
// one can see this when using a for loop.

{
  for (let i = 0; i < 3; i++) {
      // Run code!
  }

  console.log("i = " + i);
}

// i cannot be accessed from outside the loop. This is not the case with 'var'
// declared variables.

{
  for (var i = 0; i < 3; i++) {
      // Run code!
  }

  console.log("i = " + i);
}
