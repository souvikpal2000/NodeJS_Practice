const http = require('http');
const url = require('url');

const server = http.createServer((req,res) => {
	//console.log(req.url);
	if(req.url == '/'){
		res.end("Home Page");
	}
	else if(req.url == '/aboutus'){
		res.end("About Us Page");
	}
	else if(req.url == '/contactus'){
		res.end("Contact Us Page");
	}
	else{
		res.writeHead(404, { "Content-Type": "text/html" });
		res.end("<h1>404 Error : Page not Found<h1>");
	}
});

server.listen(3000, (err) => {
	if(err){
		console.log("Something went Wrong");
	}else{
		console.log("Server listening at port 3000");
	}
});