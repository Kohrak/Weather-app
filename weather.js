
function getWeather(unit){
  navigator.geolocation.getCurrentPosition(function handlePosition(position){
    var lat = position.coords.latitude
    var lon = position.coords.longitude
    var url = "http://api.openweathermap.org/data/2.5/weather?APPID=2df87e789845393d6e88674f59d36941&lat=" + lat + '&lon=' + lon + "&units=" + unit;
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.send();
    xhr.onload = function handleRequest() {
      var weatherData = JSON.parse(xhr.responseText);
      setIcon(weatherData.weather[0].id, weatherData.weather[0].description);
      setTemp(weatherData.main.temp, unit);
      document.getElementById("city-name").innerHTML = weatherData.name;
    }
  });
}

function setIcon(id, description){
  var element = document.getElementById("weather")
  console.log(id)
  console.log(description)
  switch(String(id)[0]){
    case "2":
    //Thunderstorm
      element.innerHTML = '<i class="wi wi-thunderstorm"></i> ' + description;
      break;
    case "3":
    //Drizzle
      element.innerHTML = '<i class="wi wi-showers"></i> ' + description;
      break;
    case "5":
    //Rain
      element.innerHTML = '<i class="wi wi-rain"></i> ' + description;
      break;
    case "6":
    //Snow
      element.innerHTML = '<i class="wi wi-snow"></i> ' + description;
      break;
    case "8":
      if (id == 800){
        element.innerHTML = '<i class="wi wi-day-sunny"></i> ' + description + ' <i class="wi wi-night-clear"></i>' ;
      } else {
        element.innerHTML = '<i class="wi wi-cloudy"></i> ' + description;
      }
      break;
    default:
      element.innerHTML = description;
  }
}

function setTemp(temperature, unit){
switch (unit){
  case "metric":
    var units = "C";
    break;
  case 'imperial':
    var units = "F";
    break;
  }
  document.getElementById("temp").innerHTML = temperature + " " + units;
}

getWeather('metric');
