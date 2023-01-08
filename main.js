const express = require("express");
const bodyParser = require("body-parser");
const conn = require("./core/database");

const app = express()
    .use(bodyParser.json())
    .use(bodyParser.urlencoded({ extended: true }))


app.get("/", function (request, response) {
  response.end()
});

app.post("/create", function (request, response) {
  console.log(request.body);
  response.status(200).json(123)
  conn.query("INSERT INTO LIST (title, description, filename, createA)")
});

app.put("/modify", function (request, response) {
  // console.log(request)
  // response.setHeader('Access-Control-Allow-Origin','http://localhost:3000')
});

app.delete("/delete", function (request, response) {});


app.get("/lists",  function(request,response){
  conn.query("SELECT * FROM list",function(err,result){
    response.status(200).json(result);
  })
})

app.listen(4000, function () {
  console.log("server is running on port 4000");
});
