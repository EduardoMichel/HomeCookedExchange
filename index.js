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

http.createServer(requestHandler).listen(process.env.port || 5000);