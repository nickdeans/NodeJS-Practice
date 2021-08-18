// const amount = 12;

// if(amount < 10) {
//     console.log('small number')
// } else {
//     console.log('large number')
// }

// setInterval(() => {
//     console.log(`Working on practice Node tutorial`)

// }, 1000)

const path = require('path');

console.log(path.sep)

const filePath = path.join('/content', 'subfolder', 'test.txt')
console.log(filePath)

const base = path.basename(filePath)
console.log(base)

const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt');
console.log(absolute)