const waitAndLog = (duration) => new Promise((res, rej) => {
  setTimeout(() => {
    res(`Waited ${duration}ms`);
  }, duration);
});

waitAndLog(1000).then(console.log);
waitAndLog(2500).then(console.log);
waitAndLog(5000).then(console.log);
