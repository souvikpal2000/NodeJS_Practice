const fs = require('fs');

//Make Folder - Root
//Comment Out after creating Folder
/*fs.mkdir('Root', (err) => {
	if(err){
		console.log(err);
	}else{
		console.log("Folder Created");
	}
});*/

//Create File
fs.writeFile('./Root/bio.txt', "Hello Everyone", (err) => {
	if(err){
		console.log(err);
	}else{
		console.log("File Created");
	}
});

//Append Data
fs.appendFile('./Root/bio.txt', "Hiiii!!!", (err) => {
	if(err){
		console.log(err);
	}else{
		console.log("Data Appended");
	}
});

//Read File
fs.readFile('./Root/bio.txt', "UTF-8", (err, data) => {
	if(err){
		console.log(err);
	}else{
		console.log(data);
	}
});

//Rename File
fs.rename('./Root/bio.txt', '/Root/myBio.txt', (err) => {
	if(err){
		console.log(err);
	}else{
		console.log("File Renamed");
	}
});

//Delete File
fs.unlink('./Root/myBio.txt', (err) => {
	if(err){
		console.log(err);
	}else{
		console.log("File Deleted");
	}
});

//Delete Folder
fs.rmdir('Root', (err) => {
	if(err){
		console.log(err);
	}else{
		console.log("Folder Deleted");
	}
})