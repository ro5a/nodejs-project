var express = require('express');
var router = express.Router();


http = require('http');
var app = express();
http.createServer(app).listen(port);
var axios =require("axios").default;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/products', (req, res, next) =>{
  axios.get("http://dummyjson.com/products").then((data)=>{
    // console.log(data.data)
    res.render('products', { title: 'product here', products:data.data});
  });

});

module.exports = router;
module.exports = app;
