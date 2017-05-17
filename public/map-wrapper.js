var MapWrapper = function(coords, zoom, container){
  var container = document.getElementById("main-map");

  this.googleMap = new google.maps.Map(container, {
    zoom: zoom, 
    center: coords
  });
}

MapWrapper.prototype = {
  addMarker: function(coords) {
    var marker = new google.maps.Marker({
      position: coords, 
      map: this.googleMap
    });

  this.addInfoWindow(marker, "Added message as an argument");

  },
  addClickEvent: function(){
    google.maps.event.addListener(this.googleMap, "click", function(event){
     var position = {
      lat: event.latLng.lat(),
      lng: event.latLng.lng()
     };

     this.addMarker(position);
    }.bind(this));
  },

  addInfoWindow: function(marker, message){
    var infowindow = new google.maps.InfoWindow({
      content: message
    });

    marker.addListener('click', function() {
      infowindow.open(this.googleMap, marker);
    });
  },

  addWhereAmIButton: function(){
    google.maps.event.addListener(this.googleMap, "click", function(event){})
  });

}

  




