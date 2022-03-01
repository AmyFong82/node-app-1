let url = 'http://mylogger.io.log'

function log(msg) {
  //Send an HTTP request
  console.log(msg)
}

//This is how to export something inside a module.
// A js file in node is a module.
module.exports.log = log