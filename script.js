var fileReader = new FileReader();

window.onload = function () {
  var inputName = document.getElementById("input-name");
  var inputPhoto = document.getElementById("input-photo");
  var inputDate = document.getElementById("input-date");
  var button = document.getElementById("button");
  var messages1 = document.getElementById("messages-1");
  var messages2 = document.getElementById("messages-2");
  var messages3 = document.getElementById("messages-3");

  fileReader.addEventListener("load", (e) => {
    var imgUploadWrap = document.getElementsByClassName("photo-div")[0];
    var img = document.createElement("img");
    var base64 = e.target.result;

    img.setAttribute("id", "uploaded-img");
    img.height = 100;
    img.src = base64;
    imgUploadWrap.append(img);
  });

  inputPhoto.addEventListener("change", (e) => {
    var file = e.target.files[0];
    fileReader.readAsDataURL(file);
  });

  button.addEventListener("click", function () {
    var uploadedImg = document.getElementById("uploaded-img");
    var newMessage1 = document.createElement("li");
    var newMessage2 = document.createElement("li");
    var photo = document.createElement("img");
    var newMessage3 = document.createElement("li");
    newMessage1.innerHTML = inputName.value;
    newMessage3.innerHTML = inputDate.value;
    messages1.appendChild(newMessage1);
    messages2.appendChild(newMessage2);
    messages3.appendChild(newMessage3);

    if (uploadedImg) {
      photo.height = 60;
      photo.src = uploadedImg.src;
      uploadedImg.remove();
    }

    newMessage2.appendChild(photo);
    inputName.value = "";
    inputDate.value = "";
  });
};

