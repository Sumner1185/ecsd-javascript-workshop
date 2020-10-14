// Narrow down the scope to where it is necessary
f1 = () => {
  let var1 = 0;
  const arr = ["a", "b", "c", "d"];

  // CHANGE var2
  for (let var2 of arr) {
    var1++;
  }

  try {
    throw new Error();
  } catch (e) {
    // TESTING CODE
    try {
      let scoper = var3;
      console.log("var3 isn't correct!");
    } catch (e) {
      console.log("var3 √");
    }
    // TESTING CODE
  }

  // TESTING CODE
  try {
    scoper = var2;
    console.log("var2 isn't correct!");
  } catch (e) {
    console.log("var2 √");
  }
  // TESTING CODE

}

// Method Call
f1();

// TESTING CODE
try {
  scoper = var1;
  console.log("var1 isn't correct!");
} catch (e) {
  console.log("var1 √");
}
// TESTING CODE
