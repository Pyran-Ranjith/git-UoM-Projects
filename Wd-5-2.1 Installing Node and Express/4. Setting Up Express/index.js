// To install:
// cd "E:\Users\Public\PUBLIC.PREVIOUS\Public\MY\UoM Projects\Wd-5-2.1 Installing Node and Express\4. Setting Up Express"
// npm init -y
// npm i express
// To run:
// node index.js
// to see the web page:
// goto browse and type http://localhost:3000/hello

const express = require("express"); 
const app = express();
app.get("/hello", (req, res) => { 
    res.send("Hello World!");
});
app.listen(3000);
