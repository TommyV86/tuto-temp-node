const http = require('http');
const server = http.createServer((request, response) => {
    if(request.url === "/"){
        response.end("homepage")
    } 
    if(request.url ==="/about"){
        response.end("about")
    }
})

server.listen(8080)