// "use strict" sets the context of your script execution to script mode.
// Catching mistakes in your code such as undeclared variables and resulting
// in thrown exceptions.

// "use strict" can be applied to a whole file by denoting it at the top of your
// file, or alternatively within a single function.

// Not strict...

u1 = 5000;
console.log(`Undeclared variable in non strict context: ${u1}`);

function strictF() {
  // Strict...
  "use strict"

  u2 = 1000; // Throw exception!
}

// Not strict again...

u3 = 2500;
console.log(`Undeclared variable in non strict context again: ${u3}`);

strictF();
