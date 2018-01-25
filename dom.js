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
