document.querySelector('#head nav a').onclick = function(e) {
    e.preventDefault();
    document.getElementById('menu').classList.remove('hide');
}
document.querySelector('#menu #cross').onclick = function(e) {
    e.preventDefault();
    document.getElementById('menu').classList.add('hide');
}
document.querySelector(' #menu #map-toggler').onclick = function(e) {
    e.preventDefault();
    document.getElementById('map').classList.remove('hide');
}
document.querySelector('#map #cross').onclick = function(e) {
    e.preventDefault();
    document.getElementById('map').classList.add('hide');
}
