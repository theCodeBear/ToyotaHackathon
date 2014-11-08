    function initialize() {
      var mapOptions = {
        zoom: 10
      };
      var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
      geocoder = new google.maps.Geocoder();
      geocoder.geocode( { 'address': 'San Francisco, CA'}, function(results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
          map.setCenter(results[0].geometry.location);
          var marker = new google.maps.Marker({
              map: map,
              position: results[0].geometry.location
          });
        } else {
          alert('Geocode was not successful for the following reason: ' + status);
        }
      });
    }
    google.maps.event.addDomListener(window, 'load', initialize);