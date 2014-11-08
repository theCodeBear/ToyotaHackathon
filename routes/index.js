var express = require('express');
var router = express.Router();
var request = require('request');
/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.get('/cars/:id', function(req,res){
  var carId = req.params.id;
  var turl = "https://api-jp-t-itc.com/GetVehicleInfo"
  
  request.post(turl, {form: 
                      { developerkey: "bea1d5e2e441", 
                       responseformat: "json", 
                       vid: "ITCUS_VID_"+carId, 
                       infoids: "[Posn,VehBehvr]" }}, 
 function(err, response, vehInfo){
    
    console.log(vehInfo);
    res.json(vehInfo);
  });


})

module.exports = router;
