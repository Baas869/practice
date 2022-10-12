var links = document.querySelector('.link');
var badge = document.querySelector('.popUp');
var bacdrop = document.querySelector('.backdrop')

for (var i = 0; i < links.length; i++) {
    links[i].addEventListener('click', function() {
        badge.style.display = 'block';
        badge.classList.add('open');
    });
}

links.addEventListener('click', function() {
    badge.classList.add('open');
})
