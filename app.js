//used const to set the variable for a required file
//so that we don't overwrite it.
const logger = require('./logger')

//see what logger is in the console.
console.log(logger)
//it returns this, it has a function called log
// { log: [Function: log] }

// try it out
logger.log("Amy, how are you!")
