const express = require('express');
const bodyParser = require('body-parser');
const conn = require("./core/database");

const app = express();
app.use(bodyParser.json())
    .use(bodyParser.urlencoded({extended: true}));


app.get("/", function(request, response){
    response.json('hello world')
})

app.post("/")


app.listen(3000, function(){
    console.log("server is running on port 3000")
})