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
const fs = require('fs') //fs means files

const EventEmitter = require('events')
//above sets a EventEmitter Class !! coz it's uppercase
const emitter = new EventEmitter()

let totalMemory = os.totalmem();
let freeMemory = os.freemem();

console.log(`Total Memory: ${totalMemory}`)
console.log(`Free Memory: ${freeMemory}`)

//a fs read-directory function that takes 2 args
// first is the directory, 2nd is the callback function
// the call-back fn takes 2 args as well: err or the result
// the result is an array of strings shows the filenames.
fs.readdir('./', function(err, files){
  if(err) console.log("Error", err);
  else console.log("Result", files);
})

//Register a listener
emitter.on('messageLogging', function(){
  console.log("Listener called")
})

//Raise an event
//This has to go after the listener method, otherwise it won't work.
emitter.emit('messageLogging')