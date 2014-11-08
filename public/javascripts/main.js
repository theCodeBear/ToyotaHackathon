
$(function() {

  // var request = require('request');

  var params = { developerkey: "bea1d5e2e441", responseformat: "json", vid: "ITCUS_VID_052", infoids: "[Pson]" };
  var params1 = "developerkey=bea1d5e2e441&responseformat=json&vid=ITCUS_VID_052&infoids=[Pson]";

    $.ajax({
        type: "POST",
        data: JSON.stringify(params),
        url: "https://api-jp-t-itc.com/GetVehicleInfoMM",
        contentType: "application/json",
        success: function(data) { console.log(data) }
    });

    // $.post()

    //createCORSRequest("POST", "https://api-jp-t-itc.com/GetVehicleInfoMM");

  var apiKey = 'a460b122b56d6a8774c447d1b123a4b1';
  var url = 'https://api.forecast.io/forecast/';
  var lati = 37.8267;
  var longi = -122.423;

  $.getJSON(url + apiKey + "/" + lati + "," + longi + "?callback=?", function(data) {
    console.log(data.currently.temperature);
    // $('#weather').html(data.currently.temperature + "&#xb0<span class='subscript'> f</span>");
  });

});
