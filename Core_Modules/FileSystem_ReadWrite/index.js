const fs = require('fs');

//Create a Folder - Root
//After Creating Folder comment out the command
fs.mkdirSync('Root');

//Create New File - Bio.txt
fs.writeFileSync('./Root/Bio.txt', "My name is Souvik Pal");

//Append Data into Bio.txt
fs.appendFileSync('./Root/Bio.txt', "Welcome Everyone");

//Read Data without getting buffer
const data = fs.readFileSync('./Root/Bio.txt','utf8');
console.log(data);

//Rename File
fs.renameSync('./Root/Bio.txt', './Root/NewBio.txt');

//Delete File
fs.unlinkSync('./Root/NewBio.txt');

//Delete Folder
fs.rmdirSync('Root');