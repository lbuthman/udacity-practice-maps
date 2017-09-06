var map;
function initMap() {
  // Constructor creates a new map - only center and zoom are required.
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 32.934641, lng: -96.849289},
    zoom: 13
  });

  var home = {lat: 32.928616, lng: -96.825974};

  var marker = new google.maps.Marker({
    position: home,
    map: map,
    title: "No place like home!"
  })
}
