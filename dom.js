function test(){
  console.log("it works!")
}

function removeLoading(){
  var box = document.getElementById("weatherBlock");
  var element = document.getElementById('loadmsg');
  box.removeChild(element);
}
