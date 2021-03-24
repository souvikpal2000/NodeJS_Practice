require('dotenv').config();

const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });

const db = mongoose.connection;
db.on('error', (error) => {
	console.error(error);
}); // On Error
db.once('open', () => {
	console.log('Connected to Database');
}); //Once we Connect

app.use(express.json());

const subscribersRouter = require('./routes/subscribers');
app.use('/subscribers', subscribersRouter);

app.listen(3000, (error) => {
	if(error){
		console.log("Something went Wrong");
	}
	else{
		console.log("Server Started");
	}
})