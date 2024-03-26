// To run:
// cd "E:\Users\Public\PUBLIC.PREVIOUS\Public\MY\UoM Projects\Wd-5-2.1 Installing Node and Express - Copy\2. Setting Up a Simple http Server in NodeJS"
// node my-first-node-code.js
// type "localhost:8000" on the browser
//_____________________________________
const http = require("http");
const server = http.createServer((req, res) => {
res.end("Hello World");
});
server.listen(8000, "localhost", () => {
console.log("Node JS is now Listening on localhost:8000");
});

