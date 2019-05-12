var express = require('express')
var mongojs  = require('mongojs')
var bodyparser = require('body-parser')
var app = express()
var db = mongojs('todo',['tasks'])

app.use(bodyparser.urlencoded({ extended : false}))
app.use(bodyparser.json())
app.get('/tasks',function(req, res){
   db.tasks.find(function(err,data){
       res.json(data);
   })
})
app.post('/tasks',function(req,res){
    var subject = req.body.subject
    db.tasks.insert({
        "subject": subject,
        status: 0
    },function(err,data){
        res.json(data)
    })
})
app.delete('/tasks/:id',function(req, res){
    var id = req.params.id
    db.tasks.remove({
        "_id" : mongojs.ObjectID(id)
    },function(err, data){
        res.json(data)
    })
})
app.put('/tasks/:id',function(req,res){
    var id = req.params.id
    var status = req.body.status
    db.tasks.update(
        {"_id":mongojs.ObjectID(id)},
        {$set : {"status":status}},
        {"multi":true},
        function(err, data){
            res.json(data)
        }
    )})

app.get('/tasks/:id',function(req, res){
    var id = req.params.id
    db.tasks.find({
        "_id": mongojs.ObjectID(id)
    },function(err,data){
        res.json(data)
    })
})
app.listen(4000,function(){
    console.log("express server is running port 4000");
    
})