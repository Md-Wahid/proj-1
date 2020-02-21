var express = require('express');
var app = express();
var port = process.env.PORT || 8080;
var morgan = require('morgan');
var mongoose = require('mongoose');
var db = mongoose.connection;

// // Rout GET: localhost:8080/
// app.get('/', function(req, res){
//     res.send('Hello World!!!');
// });


app.use(morgan('dev'));

mongoose.connect('mongodb://localhost:27017/demo', function(err){
    if (err) {
        console.log('Not connected to the database: '+ err);
    } else {
        console.log('Succesfully connected to MongoDB');
    }
});

app.get('/home', function(req, res){
    res.send("Hello  from home");
});

app.listen(port, function(){
    console.log('Running server ... on port ' + port);
});















// 01683440715 Sohel D
// 01677458555 Sohel new