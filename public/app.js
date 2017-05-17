var initialize = function(){
  var zoom = 10;
  var center = {lat: 51.5, lng: -0.12};
  var center1 = {lat: 41.5, lng: -0.8};
  var center2 = {lat: 67.5, lng: -0.10};
  var container = document.getElementById("main-map");
  var mainMap = new MapWrapper(center, zoom, container);
  

  // mainMap.addMarker(center);
  // mainMap.addMarker(center1);
  // mainMap.addMarker(center2);
  mainMap.addClickEvent();
};

window.addEventListener("load", initialize);

