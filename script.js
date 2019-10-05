(function (window) {

var names = ["Gav", "Mclaren", "Dannella", "Jez", "Ma'am Samonte", "Corwyn", "Colin", "Kelsey", "Benz", "Joshua"];


for (var i in names) {


  var firstLetter = ((names[i]).charAt(0)).toLowerCase();


  if (firstLetter == 'j') {
     window.byeSpeaker.speak(names[i]);
  } else {
     window.helloSpeaker.speak(names[i]);
  }
}
})(window);