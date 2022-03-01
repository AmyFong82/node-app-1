const http = require('http')

const server = http.createServer((request, response) => {
  if(request.url === '/'){
    //the brower will show "Hello Amy"
    response.write("Hello Amy!")
    response.end()
  }
})
server.listen(3000)
//console.log to show the server is up.
console.log('Listening on port 3000')