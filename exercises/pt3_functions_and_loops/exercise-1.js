// Function Code

// a) for loop

let array = [1, 5, 8, 9, 15];
console.log("a) Before function was called: " + array);

const f1 = (array) => {
    for (const index in array) {
        array[index]++
    }
    return array
}

f1(array);
console.log("After f1 was called: " + array);
console.log("\n");

// b) while

let array2 = [8, 2, 6, 20, 13];
console.log("b) Before function was called: " + array2);

const f2 = (array2) => {
    let i = 0
    while (i < array2.length) {
        array2[i]--
        i++
    }
    return array2
}

f2(array2);
console.log("After f2 was called: " + array2);
console.log("\n");

// c) forEach

let array3 = [425, 229, 182, 42, 390];
console.log("c) The values within array3: " + array3);

const f3 = (array3) => {
    newArray = []
    array3.forEach(item => { newArray.push(item * 2) })
    return newArray
}

console.log("The return of f3 on array3: " + f3(array3));
console.log("\n");

// d) map

let array4 = [800, 600, 1200, 2000, 400];
console.log("d) The values within array4: " + array4);

const f4 = (array4) => array4.map(elem => elem / 2)

console.log("The return of f4 on a array4: " + f4(array4));
console.log("\n");
