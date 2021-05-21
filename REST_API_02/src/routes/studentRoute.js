const express = require("express");
const Student = require("../models/student");

const router = new express.Router();

router.get('/', (req,res) => {
    res.send("Hello");
});

router.post('/student', (req,res) => {
    const user = new Student(req.body);
    user.save().then(() => {
        res.status(201).send(user);
    })
    .catch((err) => {
        res.status(400).send(err);
    })
});

router.get('/student', async (req,res) => {
    try{
        const users = await Student.find();
        res.status(201).send(users);
    }
    catch(err){
        res.status(400).send(err);
    }
});

router.get('/student/:id', async (req,res) => {
    const id = req.params.id;
    try{
        const userData = await Student.findById({_id: id});
        if(!userData){
            res.status(400).send("User not Found")
            return;
        }
        res.status(201).send(userData);
    }
    catch(err){
        res.status(400).send(err);
    }
});

router.delete('/student/:id', async (req,res) => {
    const id = req.params.id;
    try{
        const userData = await Student.findByIdAndDelete({_id: id});
        if(!userData){
            res.status(400).send("User not Found")
            return;
        }
        res.status(201).send("User Deleted");
    }
    catch(err){
        res.status(500).send(err);
    }
});

router.patch('/student/:id', async (req,res) => {
    const id = req.params.id;
    try{
        const userData = await Student.findByIdAndUpdate({_id: id}, req.body, { new: true });
        if(!userData){
            res.status(400).send("User not Found")
            return;
        }
        res.status(201).send(userData);
    }
    catch(err){
        res.status(500).send(err);
    }
});

router.delete("/student", async (req,res) => {
    try{
        const users = await Student.deleteMany();
        if(!users){
            return res.status(400).send("No Users Found");
        }
        res.status(201).send("All Users Deleted");
    }catch(err){
        res.status(500).send(err);
    }
})

module.exports = router;