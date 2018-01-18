
function getWeather(){
  navigator.geolocation.getCurrentPosition(function(position){
    var lat = position.coords.latitude
    var lon = position.coords.longitude
    var url = "http://api.openweathermap.org/data/2.5/weather?APPID=2df87e789845393d6e88674f59d36941&lat=" + lat + '&lon=' + lon;
    console.log(url)
    //var url = "http://api.openweathermap.org/data/2.5/weather?lat=51.51&lon=-0.13&APPID=2df87e789845393d6e88674f59d36941"
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.send();
    xhr.onload = function() {
      var weatherData = JSON.parse(xhr.responseText);
      console.log(weatherData.weather[0].main);
    }
  });
}

getWeather();
