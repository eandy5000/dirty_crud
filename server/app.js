var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var _ = require('lodash');
var app = express();

var lions = [];
var id = 0;

app.use(express.static('client'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/lions', function(req, res){
   res.json(lions); 
});

app.post('/lions', function(req, res){
     var lion = req.body;
    id++;
    lion.id = id + "";
    lions.push(lion);
    res.json(lions); 
});

app.get('/lions/:id', function(req, res){
   var lion = _.find(lions, {id: req.params.id});
   res.json(lion); 
});

app.put('/lions', function(req, res){
     var update = req.body;

  var lion = _.findIndex(lions, {id: update.id});
  if (!lions[lion]) {
    res.send();
  } else {
    var updatedLion = _.assign(lions[lion], update);
    res.json(updatedLion);
  } 
});
   
 app.delete('/lions', function(req,res){
     var del = req.body;
     console.log("here is del ",del);
      var lion = _.findIndex(lions, {id: del.id});
      console.log("index of deleted lion ",lion);
  if (!lions[lion]) {
    res.send();
  } else {
    var deletedLion = lions[lion];
    lions.splice(lion, 1);
    console.log("lion should be deleted ",lions);
    res.json(deletedLion);
  }  
 });

app.listen(3000, function(){
   console.log("listening on port 3000"); 
});
