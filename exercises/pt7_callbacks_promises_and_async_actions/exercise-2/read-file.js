// Should read from file which is passed in execution of file
const fs = require('fs')
const file = process.argv[2]

fs.readFile(file, 'utf8', (err, fileData) => {
    if (err) {
        console.log('Error!')
        return
    }
    console.log(fileData)
})