//this file is dedicated to the server, and allow the app to connect to the backend.

require("dotenv").config();

const PORT = process.env.PORT;
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

//import routes
const authRoute = require('./Routes/auth.cjs');


//SETUP
const app = express();
app.use(cors());

app.use(express.json());
app.use(express.urlencoded());

//connect

app.use("/api/auth", authRoute);


app.use(express.static(path.resolve(__dirname, './client/build')));
app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, './client/build', 'index.html'));
});

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