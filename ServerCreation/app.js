const http = require('http');
const fs = require('fs');
const port = 3000;

const server = http.createServer((req,res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    fs.readFile('index.html', function(error,data){
        if(error){
            res.writeHead(404);
            res.write('Error: File not Found');
        }
        else{
            res.write(data);
        }
        res.end();
    });
    //res.write("Hello Node");
    //res.end();
});

server.listen(port, function(error){
    if(error){
        console.log("Something went Wrong ",error);
    }
    else{
        console.log("Server is listening on port "+port);
    }
});