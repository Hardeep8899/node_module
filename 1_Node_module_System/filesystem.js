const fs = require('fs');

/* let aa = fs.readFileSync('./file/f1.txt')

//fs.writeFileSync('./file/f1.txt', aa + ' hello')

fs.appendFileSync('./file/f1.txt', ' new world')
console.log(aa)

fs.unlinkSync('./file/f1.txt') */

//fs.mkdirSync('assets')

let dirContent = fs.readdirSync('file')

console.log(' read dir ', dirContent)