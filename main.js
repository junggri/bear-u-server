const express = require("express");
const bodyParser = require("body-parser");
const conn = require("./core/database");
const uuid = require("uuid")
const fs = require('fs');

const app = express()
    .use(bodyParser.json())
    .use(bodyParser.urlencoded({ extended: true }))


app.post("/create", function (request, response) {
  conn.query("INSERT INTO LIST (title, description, content, createdAt,updatedAt) values (?,?,?,now(),now());",[request.body.title,request.body.description,request.body.content],function(err,result){
    if(err){
      console.error(err)
      response.status(500).json({status: "fail"})
    }

    if(result.affectedRows === 1){
      response.status(200).json({status: 'success'})
    }
  })
});

app.put("/modify", function (request, response) {
  conn.query("UPDATE list SET title=?, description=?, content=? where id=?",[request.body.title,request.body.description, request.body.content, request.body.id],function(err,result){
    if(err){
      console.error(err)
      response.status(500).json({status: "fail"})
    }

    if(result.affectedRows === 1){
      response.status(200).json({status: "success"})
    }
  })
});

app.delete("/delete", function (request, response) {
  conn.query("DELETE FROM list WHERE id = ?",[request.body.id],function(err,result){
    if(err){
      console.log(err)
      response.status(500).json({status: "fail"})
    }
    if(result.affectedRows === 1){
      response.status(200).json({status: "success"})
    }
  })
});


app.get("/list",  function(request,response){
  conn.query("SELECT * FROM list",function(err,result){
    if(err){
      console.log(err)
      response.status(500).json({message: "request fail"});
    }
    response.status(200).json(result);
  })
})

app.get("/list/:id",function (request,response){
  conn.query("SELECT * FROM list WHERE id = ?",[request.params.id],function(err,result){
    if(err){
      console.log(err)
      response.status(500).json({message: "request fail"});
    }
    response.status(200).json(result);
  })
});


app.listen(4000, function () {
  console.log("server is running on port 4000");
});
