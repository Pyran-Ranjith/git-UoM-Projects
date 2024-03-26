const express = require("express"); 
const app = express();
//app.METHOD (PATH, HANDLER)
app.get("/a/cool/route/path", function (req, res) { 
    /// 1. First check if run ok. . . 
        //console.log("The user visited /a/cool/route/path PATH") 

    /// 2. Now go to the http://localhost:3000/a/cool/route/path and check. . . 
    res.send("You accessd the path /a/cool/route/path");
});

app.listen(3000);
