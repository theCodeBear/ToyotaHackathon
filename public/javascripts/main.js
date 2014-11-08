
$(function() {
  var carId="052";
  var position = {
    isLoaded: false,
    lat: 0 ,
    long: 0 ,
    mapMatch: 0 
  };
  $.get("/cars/"+carId).then(function(response){
    console.log(JSON.parse(response).vehicleinfo[0].data[0].Posn);
    var Pos = JSON.parse(response).vehicleinfo[0].data[0].Posn;
    position.lat = Pos.lat;
    position.long = Pos.lon;
    position.mapMatch= Pos.MapMtchg;
    position.isLoaded=true;
    
    console.log(position);
  })
  // $.post()

  //createCORSRequest("POST", "https://api-jp-t-itc.com/GetVehicleInfoMM");

  var apiKey = 'a460b122b56d6a8774c447d1b123a4b1';
  var url = 'https://api.forecast.io/forecast/';
  var lati = position.lat;
  var longi = position.long;

  $.getJSON(url + apiKey + "/" + lati + "," + longi + "?callback=?", function(data) {
    console.log(data.currently.temperature);
    // $('#weather').html(data.currently.temperature + "&#xb0<span class='subscript'> f</span>");
  });

});
