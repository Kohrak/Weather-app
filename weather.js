function success(pos) {
  var crd = pos.coords;
  console.log('Your current position is:');
  console.log('Latitude : ' + crd.latitude);
  console.log('Longitude: ' + crd.longitude);
  console.log('More or less ' + crd.accuracy + ' meters.');
  return {"latitude": crd.latitude, "longitude": crd.longitude }
};

function error(err) {
  console.warn('ERROR(' + err.code + '): ' + err.message);
};




function jsonpRequest(){
  //navigator.geolocation.getCurrentPosition(function(position){
    //var lat = position.coords.latitude
    //var lon = position.coords.longitude
    //var tag = document.createElement("script");
    //var url = 'api.openweathermap.org/data/2.5/weather?&APPID=2df87e789845393d6e88674f59d36941&lat=' + lat + '&lon=' + lon + "&callback=mycallback";
    //var url = "api.openweathermap.org/data/2.5/weather?lat=51.51&lon=-0.13&APPID=2df87e789845393d6e88674f59d36941"
    //tag.src = url;
    //tag.id = "jsonpCall"
    //document.getElementsByTagName("head")[0].appendChild(tag);
    var data = null;

var xhr = new XMLHttpRequest();
xhr.open("GET", "http://api.openweathermap.org/data/2.5/weather?lat=51.51&lon=-0.13&APPID=2df87e789845393d6e88674f59d36941");
xhr.send();
xhr.onload = function() {
  var weatherData = JSON.parse(xhr.responseText)
  console.log(weatherData.weather[0].main)
}
  //});
}
/*
function JSONP_CALLBACK(data) {
  console.log(data);
  document.getElementsByTagName("head")[0].removeChild(document.getElementById("jsonpCall"));
}*/

jsonpRequest();
