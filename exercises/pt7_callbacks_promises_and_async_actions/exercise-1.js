// When do I run?

console.log("I RUN: 1st");

const f = () => {
  console.log("I RUN: 2nd");
  setTimeout(() => {
    console.log("I RUN: 5th");
  }, 500);
  console.log("I RUN: 3rd");
}

f();

console.log("I RUN: 4th");
