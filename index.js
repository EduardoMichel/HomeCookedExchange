var http = require('http');
var fs = require('fs');



const requestHandler = (request, response) => {
    response.writeHead(200);
    console.log("Attempting to read File");
    fs.readFile("index.html", function (errors, content) {
        console.log("File read.");
        console.log(content);
        if (errors)
        {
            return console.log(errors);
        }
        response.write(content);
        response.end();
    });
};

const server = http.createServer(requestHandler);

server.listen(8080);