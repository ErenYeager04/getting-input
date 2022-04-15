window.onload=function(){
var inputName = document.getElementById('input-name');
var inputPhoto = document.getElementById('input-photo');
var inputDate = document.getElementById('input-date');
var button = document.getElementById('button');
var messages1 = document.getElementById('messages-1');
var messages2 = document.getElementById('messages-2');
var messages3 = document.getElementById('messages-3');
button.addEventListener("click", function(){
  var newMessage1 = document.createElement("li");
  var newMessage2 = document.createElement("li");
  var photo = document.createElement("img")
  var newMessage3 = document.createElement("li");
  newMessage1.innerHTML = inputName.value;
  photo.setAttribute("style", "height: 30px; widht: 30px;");
  var reader1 = new FileReader();
  reader1.addEventListener("onloadend", function(){
    reader1.createObjectURL(inputPhoto);
    photo.src = reader1.result;
  });
  
  newMessage3.innerHTML = inputDate.value;
  messages1.appendChild(newMessage1);
  messages2.appendChild(newMessage2)
  messages3.appendChild(newMessage3);
  newMessage2.appendChild(photo);
  inputName.value = "";
 
  inputDate.value = "";
 });
}
function previewFile() {
  var preview = document.querySelector('img');
  var file    = document.querySelector('input[type=file]').files[0];
  var reader  = new FileReader();

  reader.onloadend = function () {
    preview.src = reader.result;
  }

  if (file) {
    reader.readAsDataURL(file);
  } else {
    preview.src = "";
  }
}

