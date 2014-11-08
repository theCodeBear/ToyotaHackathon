
$(function() {

  // var request = require('request');

  var params = { developerkey: "bea1d5e2e441", responseformat: "json", vid: "ITCUS_VID_052", infoids: "[Pson]" };
  var params1 = "developerkey=bea1d5e2e441&responseformat=json&vid=ITCUS_VID_052&infoids=[Pson]";

    // $.ajax({
    //     type: "POST",
    //     data: JSON.stringify(params),
    //     url: "https://api-jp-t-itc.com/GetVehicleInfoMM",
    //     contentType: "application/json",
    //     success: function(data) { console.log(data) }
    // });

    // $.post()

    //createCORSRequest("POST", "https://api-jp-t-itc.com/GetVehicleInfoMM");

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
callAPI();

// this makes the call to the API, do this once every minute
function callAPI() {

  // current position weather
    $.getJSON(url + apiKey + "/" + lati + "," + longi + "?callback=?", function(data) {
      console.log(data.currently.temperature);
      weatherData.currentTemperature= data.currently.temperature;
      weatherData.summary = data.hourly.summary;
      refreshWeather();
      // $('#weather').html(data.currently.temperature + "&#xb0<span class='subscript'> f</span>");
    });

  // Get 8 data points
    var newLati, newLongi;
  // (x= +0, y = +10)
    newLati = convertMilesToLat(0, lati);
    newLongi = convertMilesToLong(lati, longi, 10);
    $.getJSON(url + apiKey + "/" + newLati + "," + newLongi + "?callback=?", function(data) {
      console.log(data.currently.temperature + "long: " + newLongi + ", lat: " + newLati);
      if (data.currently.precipProbability > 0.1)
        weatherData.badWeather++;
      refreshWeather();
      // $('#weather').html(data.currently.temperature + "&#xb0<span class='subscript'> f</span>");
    });

  // (x= +7.07, y = +7.07)
    newLati = convertMilesToLat(7.07, lati);
    newLongi = convertMilesToLong(lati, longi, 7.07);
    $.getJSON(url + apiKey + "/" + newLati + "," + newLongi + "?callback=?", function(data) {
      console.log("precip:" + data.currently.precipProbability + "cloudCover: " + data.currently.cloudCover + "wind: " + data.currently.windSpeed);
      console.log(data.currently.temperature + "long: " + newLongi + ", lat: " + newLati);
      if (data.currently.precipProbability > 0.1)
        weatherData.badWeather++;
      refreshWeather();
      // $('#weather').html(data.currently.temperature + "&#xb0<span class='subscript'> f</span>");
    });

  // (x= +10, y = +0)
    newLati = convertMilesToLat(10, lati);
    newLongi = convertMilesToLong(lati, longi, 0);
    $.getJSON(url + apiKey + "/" + newLati + "," + newLongi + "?callback=?", function(data) {
      console.log("precip:" + data.currently.precipProbability + "cloudCover: " + data.currently.cloudCover + "wind: " + data.currently.windSpeed);
      console.log(data.currently.temperature + "long: " + newLongi + ", lat: " + newLati);
      if (data.currently.precipProbability > 0.1)
        weatherData.badWeather++;
      refreshWeather();
      // $('#weather').html(data.currently.temperature + "&#xb0<span class='subscript'> f</span>");
    });

  // (x= +7.07, y = -7.97)
    newLati = convertMilesToLat(7.07, lati);
    newLongi = convertMilesToLong(lati, longi, -7.07);
    $.getJSON(url + apiKey + "/" + newLati + "," + newLongi + "?callback=?", function(data) {
      console.log("precip:" + data.currently.precipProbability + "cloudCover: " + data.currently.cloudCover + "wind: " + data.currently.windSpeed);
      console.log(data.currently.temperature + "long: " + newLongi + ", lat: " + newLati);
      if (data.currently.precipProbability > 0.1)
        weatherData.badWeather++;
      refreshWeather();

      // $('#weather').html(data.currently.temperature + "&#xb0<span class='subscript'> f</span>");
    });

  // (x= +0, y = -10)
    newLati = convertMilesToLat(0, lati);
    newLongi = convertMilesToLong(lati, longi, -10);
    $.getJSON(url + apiKey + "/" + newLati + "," + newLongi + "?callback=?", function(data) {
      console.log("precip:" + data.currently.precipProbability + "cloudCover: " + data.currently.cloudCover + "wind: " + data.currently.windSpeed);
      console.log(data.currently.temperature + "long: " + newLongi + ", lat: " + newLati);
      if (data.currently.precipProbability > 0.1)
        weatherData.badWeather++;
        refreshWeather()

      // $('#weather').html(data.currently.temperature + "&#xb0<span class='subscript'> f</span>");
    });

  // (x= -7.07, y = -7.07)
    newLati = convertMilesToLat(-7.07, lati);
    newLongi = convertMilesToLong(lati, longi, 7.07);
    $.getJSON(url + apiKey + "/" + newLati + "," + newLongi + "?callback=?", function(data) {
      console.log("precip:" + data.currently.precipProbability + "cloudCover: " + data.currently.cloudCover + "wind: " + data.currently.windSpeed);
      console.log(data.currently.temperature + "long: " + newLongi + ", lat: " + newLati);
      if (data.currently.precipProbability > 0.1)
        weatherData.badWeather++;
        refreshWeather()

      // $('#weather').html(data.currently.temperature + "&#xb0<span class='subscript'> f</span>");
    });

  // (x= -10, y = +0)
    newLati = convertMilesToLat(-10, lati);
    newLongi = convertMilesToLong(lati, longi, 0);
    $.getJSON(url + apiKey + "/" + newLati + "," + newLongi + "?callback=?", function(data) {
      console.log("precip:" + data.currently.precipProbability + "cloudCover: " + data.currently.cloudCover + "wind: " + data.currently.windSpeed);
      console.log(data.currently.temperature + "long: " + newLongi + ", lat: " + newLati);
      if (data.currently.precipProbability > 0.1)
        weatherData.badWeather++;
        refreshWeather()

      // $('#weather').html(data.currently.temperature + "&#xb0<span class='subscript'> f</span>");
    });

  // (x= -7.07, y = +7.07)
    newLati = convertMilesToLat(-7.07, lati);
    newLongi = convertMilesToLong(lati, longi, 7.07);
    $.getJSON(url + apiKey + "/" + newLati + "," + newLongi + "?callback=?", function(data) {
      console.log("precip:" + data.currently.precipProbability + "cloudCover: " + data.currently.cloudCover + "wind: " + data.currently.windSpeed);
      console.log(data.currently.temperature + "long: " + newLongi + ", lat: " + newLati);
      if (data.currently.precipProbability > 0.1)
        weatherData.badWeather++;

        refreshWeather()

      // $('#weather').html(data.currently.temperature + "&#xb0<span class='subscript'> f</span>");
    }); 

  refreshWeather()

}

  function refreshWeather() {
  console.log(template);


  var source   = $("#weather-template").html();
  var template = Handlebars.compile(source);
  
  var html = template(weatherData);
  $("#weather-info").html(html);

}

});
