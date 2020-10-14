// Shuffle the array

let array = []
for (let i = 1; i <= 25; i++) {
  array.push(i);
}
console.log("Standard array: " + array);

// Your function...
const shuffle = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array
}

let shuffledArray = shuffle(array);
console.log("Shuffled array: " + shuffledArray);
