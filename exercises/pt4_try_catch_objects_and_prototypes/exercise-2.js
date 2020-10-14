try {
    throw new Error("I am the try")
} catch (e) {
    console.log('I am an error')
    // return "Hello"
} finally {
    console.log('I should always be printed')
}

console.log("I am after")
