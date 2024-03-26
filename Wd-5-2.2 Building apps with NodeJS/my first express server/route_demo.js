const express = require("express");
const app = express();

//app.METHOD(PATH, HANDLER)
app.get("/a/cool/route/path", function(req, res){
    /* 1. just to visit page and msg to console log */
    //console.log("The user visited /a/cool/route/path");

    /* 2. send a msg to web page */
    //res.send("You accessed to path /a/cool/route/path");
});





app.listen(3000);