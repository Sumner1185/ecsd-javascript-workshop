const f1 = (factor) => {
  const consoleMarker = `With factor ${factor}`;

  console.time(consoleMarker);

  const map = [];

  for (let i = 0; i < factor; i++) {
    map[i] = [];
    for (let j = 0; j < factor; j++) {
      map[j] = [];
      for (let k = 0; k < factor; k++) {
        map[k] = i + j + k;
      }
    }
  }

  console.timeEnd(consoleMarker);
}

f1(10);
f1(100);
f1(1000);
