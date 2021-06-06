const express = require("express");
const fs = require("fs");

const app = express();

app.get("/", function(req, res){
    fs.readFile("./html/helloWorld.htmlbadbad", function(error, pgRes){
        if(error){
            res.writeHead(404);
            res.write("Page not found, you shell not pass");
        }
        else{
            res.writeHead(200);
            res.write(pgRes);
        }
        res.end();
    });
});

app.listen(8080);