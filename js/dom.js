function test(){
  console.log("it works!")
}

function removeElement(idParent, id){
  var box = document.getElementById(idParent);
  var element = document.getElementById(id);
  box.removeChild(element);
}

function addElement(parentId, id, classes, tag){
  var element = document.createElement(tag);
  var parnt = document.getElementById(parentId);
  element.setAttribute("id", id);
  element.setAttribute("class", classes);
  parnt.appendChild(element);
}

function addDisplayElements(){
  addElement("weatherBlock", "weather", "wtext", "h1");
  addElement("weatherBlock", "temp", "wtext", "h2");
  addElement("weatherBlock", "temp-btn", "btn btn-primary", "a");
  document.getElementById("temp-btn").innerHTML = "°C/°F";
  document.getElementById("temp-btn").setAttribute("onclick", "changeTemp()");
  addElement("weatherBlock", "city-name", "text-primary", "h3");
}
