// cd "E:\Users\Public\PUBLIC.PREVIOUS\Public\MY\UoM Projects\Wd-5-2.1 Installing Node and Express\4. Setting Up Express"
// go to google "express basic routing"
// app.METHOD(PATH, HANDLER)

const express = require("express"); 
const app = express();
app.get("/a/cool/route/path", function(req, res){
    // console.log("The user visited /a/cool/route/path PATH")
    res.send(" You acccessed the path /a/cool/route/path1");
});
app.listen(3000);
// To run:
// node route_demo_1.js
// to see the web page:
// goto browse and type http://localhost:3000/a/cool/route/path
// to see the output:
// on the terminal required output will be displayed
