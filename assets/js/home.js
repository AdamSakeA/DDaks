const menuOpen = document.querySelector('.menu-toggle');
const menuWrapper = document.querySelector('.navbar-content');

menuOpen.addEventListener('click', function() {
    menuOpen.classList.toggle('bx-x');
    menuWrapper.classList.toggle('active');
})
