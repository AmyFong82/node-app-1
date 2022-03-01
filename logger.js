console.log(__filename); //filename of this file, 
// above line actually shows the complete path of the file
console.log(__dirname) //path of this file

let url = 'http://mylogger.io.log'

function log(msg) {
  //Send an HTTP request
  console.log(msg)
}

//This is how to export something inside a module.
// A js file in node is a module.
//Exporting as an object:
module.exports.log = log

//Exporting as a single function:
module.exports = log