var express = require('express');
var router = express.Router();
var http = require('http);
/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.get('/cars/:id', function(req,res){
res.json("Ok");

})

module.exports = router;
