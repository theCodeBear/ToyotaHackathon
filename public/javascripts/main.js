$(function() {

  // var request = require('request');

  var params = {developerkey: bea1d5e2e441, responseformat: json, vid: ITCUS_VID_052, infoids: [Pson]};
    $.ajax({
        type: "POST",
        data: JSON.stringify(params),
        url: "https://api-jp-t-itc.com/GetVehicleInfo",
        contentType: "application/json",
        success: function(data) { console.log(data) }
    });



});