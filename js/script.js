document.querySelector('#head nav a').onclick = function(e) {
    e.preventDefault();
    document.getElementById('menu').classList.remove('hide');
}
document.getElementById('cross').onclick = function(e) {
    e.preventDefault();
    document.getElementById('menu').classList.add('hide');
}
