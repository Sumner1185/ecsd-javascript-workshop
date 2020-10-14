// There are cases where it is beneficial to name your functions even if assigning.
// See the example below which uses recursion by calling itself.

const myFunction = function toTen(number) {

  number += (number > 10 ? -1 : 1);

  console.log(number);

  if (number != 10) {
    toTen(number);
  }
}

myFunction(6);

// You could choose to call the myFunction variable here instead and keep an anonymous function.
// However, this would mean your function relies on a variable myFunction existing,
// where as with the named example; the function toTen is independent of global conditions.
