
$(function() {

  var apiKey = 'a460b122b56d6a8774c447d1b123a4b1';
  var url = 'https://api.forecast.io/forecast/';
  var lati = 37.8267;
  var longi = -122.423;
  var weatherData = {isLoaded: false , badWeather: 0};




function convertMilesToLat(dY, currentLat) {
  var earthRadiusMi = 3959;
  return dY*(180/(earthRadiusMi*Math.PI)) + currentLat;
}

function convertMilesToLong(currentLat, currentLong, dX) {
  var earthRadiusMi = 3959;
  return dX*(180/(earthRadiusMi*Math.PI*Math.cos(currentLat))) + currentLong;
}

// setInterval(callAPI(), 60000);
// var click = 0;
// $("button").on("click", function() {
//   click++;
//   alert("clicked");
//   callAPI(click);
// });



callAPI(); 

// this makes the call to the API, do this once every minute
function callAPI() {

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
    lati = Pos.lat;
    longi = Pos.lon;
    position.mapMatch= Pos.MapMtchg;
    position.isLoaded=true;   
    console.log(position);


  // current position weather
    $.getJSON(url + apiKey + "/" + lati + "," + longi + "?callback=?", function(data) {
      // console.log(data.currently.temperature);
      weatherData.currentTemperature= Math.round(data.currently.temperature);
      weatherData.summary = data.hourly.summary;
      if (data.currently.precipProbability < 0.2)
        weatherData.image = "sunny.png";
      else if (data.currently.precipProbability < 0.6)
        weatherData.image = "sunny-cloud.png";
      else
        weatherData.image = "cloudy.png";
      // weatherData.rain = data.currently.precipProbability;


      // SIMULATION ON CLICK 2
      // if (click == 2)
      //   weather.image = "thunderstorm.png";


      refreshWeather();
      // $('#weather').html(data.currently.temperature + "&#xb0<span class='subscript'> f</span>");
    });

  // Get 8 data points
    var newLati, newLongi;
  // (x= +0, y = +10)
    newLati = convertMilesToLat(0, lati);
    newLongi = convertMilesToLong(lati, longi, 10);
    $.getJSON(url + apiKey + "/" + newLati + "," + newLongi + "?callback=?", function(data) {
      // console.log(data.currently.temperature + "long: " + newLongi + ", lat: " + newLati);
      if (data.currently.precipProbability > 0.1)
        weatherData.badWeather++;


      // SIMULATION OF NEARBY INCLEMENT WEATHER ON CLICK 1
      // if (click == 1)
      //   weatherData.badWeather++;


      refreshWeather();
      // $('#weather').html(data.currently.temperature + "&#xb0<span class='subscript'> f</span>");
    });

  // (x= +7.07, y = +7.07)
    newLati = convertMilesToLat(7.07, lati);
    newLongi = convertMilesToLong(lati, longi, 7.07);
    $.getJSON(url + apiKey + "/" + newLati + "," + newLongi + "?callback=?", function(data) {
      // console.log("precip:" + data.currently.precipProbability + "cloudCover: " + data.currently.cloudCover + "wind: " + data.currently.windSpeed);
      // console.log(data.currently.temperature + "long: " + newLongi + ", lat: " + newLati);
      if (data.currently.precipProbability > 0.1)
        weatherData.badWeather++;
      refreshWeather();
      // $('#weather').html(data.currently.temperature + "&#xb0<span class='subscript'> f</span>");
    });

  // (x= +10, y = +0)
    newLati = convertMilesToLat(10, lati);
    newLongi = convertMilesToLong(lati, longi, 0);
    $.getJSON(url + apiKey + "/" + newLati + "," + newLongi + "?callback=?", function(data) {
      // console.log("precip:" + data.currently.precipProbability + "cloudCover: " + data.currently.cloudCover + "wind: " + data.currently.windSpeed);
      // console.log(data.currently.temperature + "long: " + newLongi + ", lat: " + newLati);
      if (data.currently.precipProbability > 0.1)
        weatherData.badWeather++;
      refreshWeather();
      // $('#weather').html(data.currently.temperature + "&#xb0<span class='subscript'> f</span>");
    });

  // (x= +7.07, y = -7.97)
    newLati = convertMilesToLat(7.07, lati);
    newLongi = convertMilesToLong(lati, longi, -7.07);
    $.getJSON(url + apiKey + "/" + newLati + "," + newLongi + "?callback=?", function(data) {
      // console.log("precip:" + data.currently.precipProbability + "cloudCover: " + data.currently.cloudCover + "wind: " + data.currently.windSpeed);
      // console.log(data.currently.temperature + "long: " + newLongi + ", lat: " + newLati);
      if (data.currently.precipProbability > 0.1)
        weatherData.badWeather++;
      refreshWeather();

      // $('#weather').html(data.currently.temperature + "&#xb0<span class='subscript'> f</span>");
    });

  // (x= +0, y = -10)
    newLati = convertMilesToLat(0, lati);
    newLongi = convertMilesToLong(lati, longi, -10);
    $.getJSON(url + apiKey + "/" + newLati + "," + newLongi + "?callback=?", function(data) {
      // console.log("precip:" + data.currently.precipProbability + "cloudCover: " + data.currently.cloudCover + "wind: " + data.currently.windSpeed);
      // console.log(data.currently.temperature + "long: " + newLongi + ", lat: " + newLati);
      if (data.currently.precipProbability > 0.1)
        weatherData.badWeather++;
        refreshWeather()

      // $('#weather').html(data.currently.temperature + "&#xb0<span class='subscript'> f</span>");
    });

  // (x= -7.07, y = -7.07)
    newLati = convertMilesToLat(-7.07, lati);
    newLongi = convertMilesToLong(lati, longi, 7.07);
    $.getJSON(url + apiKey + "/" + newLati + "," + newLongi + "?callback=?", function(data) {
      // console.log("precip:" + data.currently.precipProbability + "cloudCover: " + data.currently.cloudCover + "wind: " + data.currently.windSpeed);
      // console.log(data.currently.temperature + "long: " + newLongi + ", lat: " + newLati);
      if (data.currently.precipProbability > 0.1)
        weatherData.badWeather++;
        refreshWeather()

      // $('#weather').html(data.currently.temperature + "&#xb0<span class='subscript'> f</span>");
    });

  // (x= -10, y = +0)
    newLati = convertMilesToLat(-10, lati);
    newLongi = convertMilesToLong(lati, longi, 0);
    $.getJSON(url + apiKey + "/" + newLati + "," + newLongi + "?callback=?", function(data) {
      // console.log("precip:" + data.currently.precipProbability + "cloudCover: " + data.currently.cloudCover + "wind: " + data.currently.windSpeed);
      // console.log(data.currently.temperature + "long: " + newLongi + ", lat: " + newLati);
      if (data.currently.precipProbability > 0.1)
        weatherData.badWeather++;
        refreshWeather()

      // $('#weather').html(data.currently.temperature + "&#xb0<span class='subscript'> f</span>");
    });

  // (x= -7.07, y = +7.07)
    newLati = convertMilesToLat(-7.07, lati);
    newLongi = convertMilesToLong(lati, longi, 7.07);
    $.getJSON(url + apiKey + "/" + newLati + "," + newLongi + "?callback=?", function(data) {
      // console.log("precip:" + data.currently.precipProbability + "cloudCover: " + data.currently.cloudCover + "wind: " + data.currently.windSpeed);
      // console.log(data.currently.temperature + "long: " + newLongi + ", lat: " + newLati);
      if (data.currently.precipProbability > 0.1)
        weatherData.badWeather++;

        refreshWeather()

      // $('#weather').html(data.currently.temperature + "&#xb0<span class='subscript'> f</span>");
    }); 

  refreshWeather()

});
}

  function refreshWeather() {
  console.log(template);


  var source   = $("#weather-template").html();
  var template = Handlebars.compile(source);
  
  var html = template(weatherData);
  $("#weather-info").html(html);

}

});
