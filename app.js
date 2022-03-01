//used const to set the variable for a required file
//so that we don't overwrite it.
const log = require('./logger')

//see what logger is in the console.
// console.log(log)
//when it's exported as an object, it looks like this:
// It has a function called log
// { log: [Function: log] }

//When it's exported as a single function, it looks like this:
// [Function: log]

// try it out
// log("Amy, how are you!")

//requiring the built-in "path" & 'os' modules from node
const path = require('path')
const os = require('os')

let totalMemory = os.totalmem();
let freeMemory = os.freemem();

console.log(`Total Memory: ${totalMemory}`)
console.log(`Free Memory: ${freeMemory}`)
