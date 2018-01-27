//record temperature value and scale
var globalTemp = [0, "z"];
//main function gets location and makes the api call with that info
function getWeather(){
  navigator.geolocation.getCurrentPosition(function handlePosition(position){
    var lat = position.coords.latitude
    var lon = position.coords.longitude
    var url = "http://api.openweathermap.org/data/2.5/weather?APPID=2df87e789845393d6e88674f59d36941&lat=" + lat + '&lon=' + lon + "&units=metric";
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.send();
    xhr.onload = function handleRequest() {
      var weatherData = JSON.parse(xhr.responseText);
      removeElement("weatherBlock", "loadmsg");
      addDisplayElements();
      setIcon(weatherData.weather[0].id, weatherData.weather[0].description);
      setTemp(weatherData.main.temp);
      document.getElementById("city-name").innerHTML = weatherData.name;
    }
  });
}
//sets the weather description and Icon to the html
function setIcon(id, description){
  var element = document.getElementById("weather")
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
//Rounds the temperature value from api call to 2 decimals
//Sets the value to display on the html
function setTemp(temperature){
  temperature = Math.round(temperature * 100) / 100
  globalTemp[0] = temperature;
  globalTemp[1] = "C";
  document.getElementById("temp").innerHTML = temperature + " °C";
}

//Converts between °C and °F
function changeTemp(){
  var element = document.getElementById("temp")
  switch (globalTemp[1]){
    case "C":
    var val = globalTemp[0] * 1.8 + 32
    val = Math.round(val * 100) / 100
    globalTemp[0] = val
    globalTemp[1] = "F"
    element.innerHTML = val + " °F"
    break;
    case "F":
    var val = (globalTemp[0] - 32) / 1.8
    val = Math.round(val * 100) / 100
    globalTemp[0] = val
    globalTemp[1] =  "C"
    element.innerHTML = val + " °C"
    break;
  }
}

getWeather();
