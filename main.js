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
  conn.query("INSERT INTO LIST (title, description, filename, createdAt,updatedAt) values (?,?,?,now(),now());",[request.body.title,request.body.description,request.body.content],function(err,result){
    if(err){
      console.error(err)
    }
    console.log(result.affectedRows)
    if(result.affectedRows === 1){
      response.status(200).json({status: 'success'})
    }
  })
});

app.put("/modify", function (request, response) {
  // console.log(request)
  // response.setHeader('Access-Control-Allow-Origin','http://localhost:3000')
});

app.delete("/delete", function (request, response) {});


app.get("/lists",  function(request,response){
  conn.query("SELECT * FROM list",function(err,result){
    if(err){
      console.log(err)
      response.status(500).json({message: "request fail"});
    }
    console.log(result)
    response.status(200).json(result);
  })
})

app.listen(4000, function () {
  console.log("server is running on port 4000");
});
