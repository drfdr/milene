// Version 1.2.0 introuduced optional argument
// on next() and prev() methods
// it allows to slide multiple slide

var mySiema = new Siema();
var prev = document.querySelector('.prev');
var next = document.querySelector('.next');

prev.addEventListener('click', function () {
  return mySiema.prev(1);
});
next.addEventListener('click', function () {
  return mySiema.next(1);
});