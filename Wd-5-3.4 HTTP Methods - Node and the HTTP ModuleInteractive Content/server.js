/* Go to Postman and try Get, Put, Post and Delete */
var express = require("express");
var app = express();
var HTTP_PORT = 8000;

    app.listen(HTTP_PORT, () => {
        console.log("Server running on port %PORT%".replace("%PORT%", HTTP_PORT));
    });

    app.get('/', (req, res) => { //Some code to create data
        res.send("Geting some data");
        });

    app.post('/', (req, res) => { 
        //Some code to create data
        res.send("Posting some data");
        });

    app.put('/', (req, res) => {
        //Some code to update data res.send("Putting some data");
        res.send("Puting some data");
    });

    app.delete('/', (req, res) => {
    //some-code-to-delete-data
        res.send("Deleting some data");
    });
