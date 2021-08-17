// const amount = 12;

// if(amount < 10) {
//     console.log('small number')
// } else {
//     console.log('large number')
// }

// setInterval(() => {
//     console.log(`Working on practice Node tutorial`)

// }, 1000)

// Modules
const names = require('./4-names')
const sayHi =  require('./5-utils')
const data = require('./6-alternative-flavor')
require('./7-mind-grenade')
// console.log(data)

// local
sayHi(names.john);
sayHi(names.joe);
sayHi('Susan');
