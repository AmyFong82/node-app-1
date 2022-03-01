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