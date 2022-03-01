console.log(__filename); //filename of this file, 
// above line actually shows the complete path of the file
console.log(__dirname) //path of this file

const EventEmitter = require('events')
//above sets a EventEmitter Class !! coz it's uppercase

let url = 'http://mylogger.io.log'

class Logger extends EventEmitter{

  //when a function is inside a class, it's called a method.
  log(msg) {
    //Send an HTTP request
    console.log(msg)
  
    //Raise an event
    //This has to go after the listener method, otherwise it won't work.
    //the emit method can take more than 1 arg, like this example below,
    // it takes an object as a second arg.
    this.emit('messageLogging', {id: 1, url: "http://"})
  }

}


//This is how to export something inside a module.
// A js file in node is a module.
//Exporting as an object:
// module.exports.log = log

//Exporting as a single function:
module.exports = Logger