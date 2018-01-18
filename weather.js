
function getWeather(){
  navigator.geolocation.getCurrentPosition(function handlePosition(position){
    var lat = position.coords.latitude
    var lon = position.coords.longitude
    var url = "http://api.openweathermap.org/data/2.5/weather?APPID=2df87e789845393d6e88674f59d36941&lat=" + lat + '&lon=' + lon;
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.send();
    xhr.onload = function handleRequest() {
      var weatherData = JSON.parse(xhr.responseText);
      setIcon(weatherData.weather[0].main);
    }
  });
}

getWeather();

function setIcon(currentWeather){
  console.log(currentWeather)
}
