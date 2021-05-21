const eventListener = require('events');

const event = new eventListener();

event.on("sayMyName", (statusCode, message) => {
	console.log(`Page Status : ${statusCode} ${message}`);
});

event.on("sayMyName", () => {
	console.log("My Name is Souvik Pal");
});

event.emit("sayMyName", 200, "ok");