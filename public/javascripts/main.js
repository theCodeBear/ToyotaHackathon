$(function() {

  // var request = require('request');
    $.ajax({
        type: "POST",
        url: "https://api-jp-t-itc.com/GetVehicleInfo",
        data: {'developerkey':'bea1d5e2e441','responseformat':'json','vid':'ITCUS_VID_052','infoids': '[Pson]'},
        contentType: "jsonp",
        crossDomain: true,
        success: function(data) { console.log(data) },
    });

});      