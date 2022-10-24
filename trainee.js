var images = document.getElementsByTagName("img");
var h2 = document.getElementsByTagName("h2");


 function init() {
    for (var i = 0; i < images.length; i++) {
        images[i].onclick = showAnswer;
    }

    
 }
 function showAnswer(eventObj1) {

    var image = eventObj1.target;
    var name = image.id;
    name = name + ".jpg";
    image.src = name; 

    for (var i = 0; i < h2.length; i++) {
      if (images[i].onclick) {
          var textName = image.id;
          textName = ".text-" + textName;
          document.querySelector(textName).style.display = "block"

      }
    }

    setTimeout(reblur, 2000, image);
 }

function showText(eventObj) {
 var text = eventObj.target;
 text.innerHTML = "ggg"
}

 function reblur(image) {
    var name = image.id;
    name = name + "blur.jpg";
    image.src = name;

    var textName = image.id;
    textName = ".text-" + textName;
    document.querySelector(textName).style.display = "none"
   }
 window.onload = init;
