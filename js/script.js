document.getElementById('menu-toggler').onclick = function(e) {
    e.preventDefault();
    document.getElementById('menu').classList.remove('hide');
}
document.querySelector('#menu #cross').onclick = function(e) {
    e.preventDefault();
    document.getElementById('menu').classList.add('hide');
}
document.getElementById('map-toggler').onclick = function(e) {
    e.preventDefault();
    document.getElementById('map').classList.remove('hide');
}
document.querySelector('#map #cross').onclick = function(e) {
    e.preventDefault();
    document.getElementById('map').classList.add('hide');
}
