// Reading user input with 'readline'
// Check out the Documentation if interested
// https://nodejs.org/api/readline.html

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const password = "pass123";

rl.question('Enter password to login.\n', (enteredPassword) => {

  if (enteredPassword === password) {
    console.log("Successfully Authenticated.");
  } else {
    console.log("Failed to Authenticate. Access denied.");
  }

  rl.close();
});
