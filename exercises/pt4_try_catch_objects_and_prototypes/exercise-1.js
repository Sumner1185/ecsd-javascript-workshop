// Try and Catch

// a)

const f1 = () => {
  try {
    while (counter < 10) {
      console.log("Counter number is: " + counter);
      counter++;
    }
  } catch (error) {
    console.log("I am the error", error)
  }
}

f1();

// b)

const f2 = () => {
  throw new Error("What a dangerous function!");
}

const myFunc = (funcArg) => {
  try {
    funcArg()
  } catch (error) {
    console.log(error)
  }
}

myFunc(f2)
