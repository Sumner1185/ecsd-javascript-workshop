const chopAndProcess = (array) => Promise.resolve(array)

const array = ['a', 'b', 'c', 'd', 'e', 'f'];

chopAndProcess(array)
  .then(function(arr) {
    arr.pop()
    console.log(arr)
    return arr
  })
  .then(function(arr) {
    arr.pop()
    console.log(arr)
    return arr
  })
  .then(function(arr) {
    arr.pop()
    console.log(arr)
    return arr
  })
  .then(function(arr) {
    arr.pop()
    console.log(arr)
  })
  .then(function() {
    console.log("FINISHED!")
  })
