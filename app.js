var express = require('express');
var app     = express();

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
var port = process.env.PORT || 3000;
app.get("/", function(req, res){
    res.render("index");
});
app.get("/category", function(req, res){

  res.render("category"); 
});

app.get("/detailes", function(req, res){

  res.render("detailes"); 
});
app.get("/checkout", function(req, res){

  res.render("checkout"); 
});
app.get("/steper", function(req, res){

  res.render("steper"); 
});
app.get("/products", function(req, res){

  res.render("products"); 
});


app.listen(port, function(){
     console.log("server is running on port" + port);
});