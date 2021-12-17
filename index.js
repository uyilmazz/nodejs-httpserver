const http = require('http');
const fs = require('fs');
const server = http.createServer((req,res) => {

    const url = req.url;
    console.log(url);
    if(url === '/'){

    res.writeHead(200,{'Content-Type' : 'text/html'});
    res.write('<h2>Welcome to Home Page</h2>')

    }else if (url === '/about'){
        res.writeHead(200,{'Content-Type' : 'text/html'});
        res.write('<h2>Welcome to About us Page</h2>')

    }else if(url === '/contact'){
        res.writeHead(200,{'Content-Type' : 'text/html'});
        res.write('<h2>Welcome to Contact Page</h2>')
    }else{
        res.writeHead(404,{'Content-Type' : 'text/html'});
        res.write('<h2>404 Page Not Found</h2>')
    }

    res.end();

});

const port = 5000;

server.listen(port,() => {
    console.log('Server initialized');
});