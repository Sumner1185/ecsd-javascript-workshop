// Create a map building Functions

// a) Function which builds a square Map and returns it
// example; buildMap(2) would return [['0,0', '1,0'],['0,1', '1,1']]

const buildMap = (dimensions) => {
    let myMap = new Array(dimensions)
    let index = 0
    for (let i = 0; i < dimensions; i++) {
        myMap[i] = new Array()
        for (let j = 0; j < dimensions; j++) {
            myMap[i].push(`${j},${index}`)
        }
        index++
    }
    return myMap
}

let squareMap = buildMap(5);

// b) Function to build a rectangular Map and return it

const buildMap2 = (x, y) => {
    let myMap = new Array(y)
    let index = 0
    for (let i = 0; i < y; i++) {
        myMap[i] = new Array()
        for (let j = 0; j < x; j++) {
            myMap[i].push(`${j},${index}`)
        }
        index++
    }
    return myMap
}

let recMap = buildMap2(3, 7);

// c) Function to output built map nicely into the console

const prettyMap = (map) => {
    console.log(map)
}

prettyMap(squareMap);
prettyMap(recMap);
