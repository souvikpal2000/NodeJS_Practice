const bioData = {
	name : "Souvik Pal",
	age : 21,
	college : "JIS College of Engineering"
}

const jsonData = JSON.stringify(bioData); // Object to JSON Conversion
console.log(jsonData);

const objData = JSON.parse(jsonData);
console.log(objData);
console.log(objData.college);