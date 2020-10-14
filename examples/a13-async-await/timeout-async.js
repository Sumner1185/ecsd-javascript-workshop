const longProcess = (duration) => new Promise((res, rej) => {
  setTimeout(() => {
    res(`Waited ${duration}ms`);
  }, duration);
});

const callingProcess = async () => {
  console.log(await longProcess(1000));
  console.log(await longProcess(2500));
  console.log(await longProcess(5000));
}

callingProcess();
