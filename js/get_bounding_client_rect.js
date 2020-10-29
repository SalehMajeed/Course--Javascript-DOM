const box = document.querySelector('div.box');

window.addEventListener('scroll', function () {
    if (box.getBoundingClientRect().top < window.innerHeight)
        box.style.background = 'red';
});
