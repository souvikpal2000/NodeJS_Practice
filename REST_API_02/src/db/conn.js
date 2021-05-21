const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/student-api", { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true, useFindAndModify: false }).then(() => {
    console.log("Connected to MongoDB");
})
.catch((err) => {
    console.log("Not Connected to MongoDB");
});