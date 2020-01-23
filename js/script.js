var menu = document.getElementById('menu');
var map = document.getElementById('map');

if (document.body.classList.contains('content')) {
    var menuToggler = document.querySelector('#list nav #menu-toggler');
    var mapToggler = document.querySelector('#list nav #map-toggler');
}
else {
    var menuToggler = document.getElementById('menu-toggler');
    var mapToggler = document.getElementById('map-toggler');
}

menuToggler.onclick = function(e) {
    e.preventDefault();
    menu.classList.remove('hide');
    document.querySelector('#menu li a.lang').focus();
}
document.querySelector('#menu #cross').onclick = function(e) {
    e.preventDefault();
    menu.classList.add('hide');
    document.querySelector('#menu li a.lang').blur();
}
mapToggler.onclick = function(e) {
    e.preventDefault();
    map.classList.remove('hide');
    document.querySelector('#map li:first-of-type a').focus();
}
document.querySelector('#map #cross').onclick = function(e) {
    e.preventDefault();
    map.classList.add('hide');
    document.querySelector('#map li:first-of-type a').blur();
}
document.addEventListener("keydown", e => {
  if (e.keyCode === 27) {
      menu.classList.add('hide');
      map.classList.add('hide');
  }
});
