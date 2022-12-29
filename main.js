const express = require("express");
const bodyParser = require("body-parser");
const conn = require("./core/database");

const app = express()
    .use(bodyParser.json()).use(bodyParser.urlencoded({ extended: true }))
    .use(express.static(__dirname + '/public'));


app.get("/", function (request, response) {
  response.render("index.html");
});
app.get("/test", function (request, response) {
  response.sendStatus(123);
});
app.post("/create", function (request, response) {});

app.put("/modify", function (request, response) {
  console.log(request)
  response.setHeader('Access-Control-Allow-Origin','http://localhost:3000')
});

app.delete("/delete", function (request, response) {});

app.listen(3000, function () {
  console.log("server is running on port 3000");
});
