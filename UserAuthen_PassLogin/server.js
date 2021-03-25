const express = require('express');
const app = express();
const bcrypt = require('bcrypt');

app.use(express.json());

const users = [];

app.get('/users', (req,res) => {
    res.status(200).json(users);
})

app.post('/users', async (req,res) => {
    try{
        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(req.body.password, salt);
        //console.log(salt);
        //console.log(hashedPassword);
        const user = {
            name: req.body.name,
            password: hashedPassword
        }
    
        users.push(user);
        res.status(201).send("User is Saved");
    }
    catch(err){
        res.status(500).json({ message: err.message });
    }
})

app.post('/users/login', async (req,res) => {
    let flag=0;
    var password;
    users.forEach((user) => {
        if(user.name == req.body.name){
            password = user.password;
            flag = 1;
        }
    })
    if(flag == 0)
    {
        return res.status(400).send("User not Found");
    }
    try{
        if(await bcrypt.compare(req.body.password, password)){
            res.status(200).send("Logged In");
        }
        else{
            res.send("Password Incorrect");
        }
    }
    catch(err){
        res.status(500).json({ message: err.message });
    }
})

app.listen(3000, (err) => {
    if(err){
        console.log("Something went Wrong");
    }
    else{
        console.log("Server is Listening");
    }
});