var map;
var markers = [];

function initMap() {
  // Constructor creates a new map - only center and zoom are required.
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 32.934641, lng: -96.849289},
    zoom: 13
  });

  var locations = [
    {title: "Apt. Home Base", location: {lat: 32.928616, lng: -96.825974}},
    {title: "Bay 34th Street", location: {lat: 32.97324, lng: -96.820502}},
    {title: "Carmine's Pizzeria", location: {lat: 32.939885, lng: -96.815144}}
  ];

  var largeInfoWindonw = new google.maps.InfoWindow();
  var bounds = new google.maps.LatLngBounds();

  for (var i=0; i<locations.length; i++) {
    var position = locations[i].location;
    var title = locations[i].title;
    var marker = new google.maps.Marker({
      position: position,
      title: title,
      animation: google.maps.Animation.DROP,
      id: i
    });

    markers.push(marker);
    bounds.extend(marker.position);
    marker.addListener('click', function(){
      populateInfoWindow(this, largeInfoWindonw);
    });

    function populateInfoWindow(marker, infowindow) {
      if (infowindow.marker != marker) {
        infowindow.marker = marker;
        infowindow.setContent('<div>' + marker.title + "<br>" + marker.position + '</div>');
        infowindow.open(map, marker);
        infowindow.addListener('closeclick', function() {
          infowindow.setMarker(null);
        })
      }
    }

    function showPizzerias() {
      var bounds = new google.maps.LatLngBounds();
      for (var i=0; i<markers.length; i++) {
        markers[i].setMap(map);
        bounds.extend(markers[i].position);
      }

      map.fitBounds(bounds);
    }

    function hidePizzerias() {
      for (var i=0; i<markers.length; i++) {
        markers[i].setMap(null);
      }
    }

    document.getElementById('show-pizzerias').addEventListener('click', showPizzerias);
    document.getElementById('hide-pizzerias').addEventListener('click', hidePizzerias);
  }

  // var marker = new google.maps.Marker({
  //   position: home,
  //   map: map,
  //   title: "No place like home!"
  // });
  //
  // var infowindow = new google.maps.InfoWindow({
  //   content: "One dark night in the middle of the day ..."
  // });
  //
  // marker.addListener('click', function() {
  //   infowindow.open(map, marker);
  // });
}
