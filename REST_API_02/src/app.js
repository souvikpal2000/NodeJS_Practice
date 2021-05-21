const express = require("express");
const app = express();
require("./db/conn");
const studentRouter = require("./routes/studentRoute");

app.use(express.json());
app.use(studentRouter);


const port = 3000;
app.listen(port, (err) => {
    if(err){
        console.log("Something went Wrong");
    }
    else{
        console.log(`Server Listening at port ${port}`);
    }
})