require("dotenv").config();

const PORT = process.env.PORT;

const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded());

app.get('/member', (req, res) => {
    res.status(200).send({
        name: 'greg',
        age: 29
    })
});

app.post('/member/:id', (req, res) => {
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

app.post('/newmember', (req, res) => {
    if(req.body.name){
        return res.json({
            name: req.body.name
        });
    }

    return res.status(400).json({error: "No name provided"});
});


app.listen(PORT, () => {
    console.log(`it's alive on http://localhost:${PORT}`);
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