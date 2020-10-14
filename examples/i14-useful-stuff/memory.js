// node --expose-gc memory.js
let mData = process.memoryUsage();
console.log(mData);

// rss: resident set size, total memory allocated for process execution
// heapTotal: total size of the allocated heap
// heapUsed: actual memory used during the execution

const arr = [];

for (let i = 0; i < 1000; i++)
  arr[i] = i;

const shuffle = (arr) => {
  const shuffledArr = [];
  let randomNum;

  for (let i = arr.length - 1; i >= 0; i--) {
    randomNum = Math.floor(Math.random() * arr.length);
    shuffledArr[randomNum] = arr[i];
  }

  return shuffledArr;
}

const shuffledArr = shuffle(arr);

mData = process.memoryUsage();
mbUsed = mData.heapUsed / 1000000;
console.log(`Memory used by script: ${Math.round(mbUsed * 100) / 100}MB`);
