//this file is dedicated to the server, and allow the app to connect to the backend.

require("dotenv").config();

const PORT = process.env.PORT;
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

//import routes
const authRoute = require('./Routes/auth.cjs');


//SETUP
const app = express();
app.use(cors());

app.use(express.json());
app.use(express.urlencoded());

//API
/*
app.get('/api/member', (req, res) => {
    res.status(200).send({
        name: 'greg',
        age: 29
    })
});

app.post('/api/member/:id', (req, res) => {
    const id = req.params;
    const name = req.body.name;

    if(!name){
        res.status(418).send({message: 'Name is missing.'});
    }

    const age = req.body.age;

    res.send({
        member: `name is ${name}, ${age} years old.`
    })
});

app.post('/api/newmember', (req, res) => {
    if(!req.body.name){
        return res.status(400).json({error: "No name provided"});
    }
    
    return res.json({
        name: req.body.name
    });

});*/

//connect

app.use("/api/auth", authRoute);

mongoose
    .connect(process.env.MONGO_URI)
        .then( () => {
            console.log('Connected to Database');

                
            app.listen(PORT, () => {
                console.log(`it's alive on http://localhost:${PORT}`);
            });
        }).catch((error) => {
            console.log(error);
        });



/*const PORT = 8000;

const express = require('express');
const app = express();

app.use(express.json());

app.get("/members", (req, res) => {
    res.send("This is the server HYPERS");
});

app.listen(PORT, () => {
    console.log(`it's alive on http://localhost:${PORT}`);
})*/